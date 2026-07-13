const OpenAI = require('openai');

// Configurar OpenAI (solo si está disponible la API key)
let openai = null;
if (process.env.OPENAI_API_KEY) {
    openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
}

// Controlador de IA híbrido: OpenAI + IA local para consultas del proyecto
class AIController {
    
    // Procesar consulta del chatbot
    static async processQuery(req, res) {
        try {
            const { query, projectData } = req.body;
            
            if (!query) {
                return res.status(400).json({
                    ok: false,
                    message: 'Query is required'
                });
            }

            // Procesar la consulta con IA híbrida (OpenAI + local)
            const aiResponse = await AIController.generateIntelligentResponse(query, projectData);
            
            return res.status(200).json({
                ok: true,
                message: 'AI response generated successfully',
                data: {
                    query,
                    response: aiResponse,
                    timestamp: new Date().toISOString()
                }
            });
            
        } catch (error) {
            console.error('AI Controller Error:', error);
            return res.status(500).json({
                ok: false,
                message: 'Internal server error',
                error: error.message
            });
        }
    }

    // Generar respuesta inteligente basada en datos del proyecto
    static async generateIntelligentResponse(query, projectData = {}) {
        try {
            // Si OpenAI está disponible, usar GPT-4 para respuestas más naturales
            if (openai) {
                return await AIController.generateOpenAIResponse(query, projectData);
            }
            
            // Fallback al modelo local
            return await AIController.generateLocalResponse(query, projectData);
            
        } catch (error) {
            console.error('Error en IA:', error);
            // Fallback al modelo local en caso de error
            return await AIController.generateLocalResponse(query, projectData);
        }
    }

    // Generar respuesta usando OpenAI GPT-4
    static async generateOpenAIResponse(query, projectData = {}) {
        // Crear contexto rico con datos del proyecto
        const projectContext = AIController.buildProjectContext(projectData);
        
        const systemPrompt = `Eres un asistente inmobiliario especializado para el proyecto "Parcelas Chaignal" de Astra 360. 

DATOS DEL PROYECTO ACTUAL:
${projectContext}

INSTRUCCIONES:
- Responde SOLO sobre este proyecto inmobiliario específico
- Usa los datos reales proporcionados
- Sé conversacional pero profesional
- Incluye emojis apropiados para hacer las respuestas más atractivas
- Formatea con markdown cuando sea útil (**negritas**, listas con •)
- Proporciona respuestas precisas y útiles para administradores del proyecto
- Si no tienes información específica, indícalo claramente
- Mantén las respuestas concisas pero informativas`;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini", // Modelo más eficiente y económico
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: query
                }
            ],
            max_tokens: 500,
            temperature: 0.7,
        });

        return completion.choices[0].message.content;
    }

    // Construir contexto del proyecto para OpenAI
    static buildProjectContext(projectData) {
        const {
            totalLotes = 0,
            lotesDisponibles = 0,
            lotesVendidos = 0,
            lotesReservados = 0,
            lotesPromocion = 0,
            lotesOpcion4 = 0,
            totalVentas = 0,
            promedioPrecios = 0,
            precios = [],
            porcentajeVendido = 0
        } = projectData;

        const formatCurrency = (amount) => {
            return new Intl.NumberFormat('es-CL', { 
                style: 'currency', 
                currency: 'CLP' 
            }).format(amount);
        };

        const minPrice = precios.length > 0 ? Math.min(...precios) : 0;
        const maxPrice = precios.length > 0 ? Math.max(...precios) : 0;

        return `
📊 ESTADÍSTICAS GENERALES:
- Total de lotes: ${totalLotes}
- Porcentaje vendido: ${porcentajeVendido}%

🏠 DISTRIBUCIÓN DE LOTES:
- Disponibles: ${lotesDisponibles}
- Vendidos: ${lotesVendidos}
- Reservados: ${lotesReservados}
- En promoción: ${lotesPromocion}
- En oferta especial: ${lotesOpcion4}

💰 INFORMACIÓN FINANCIERA:
- Total de ventas: ${formatCurrency(totalVentas)}
- Precio promedio: ${formatCurrency(promedioPrecios)}
- Rango de precios: ${formatCurrency(minPrice)} - ${formatCurrency(maxPrice)}

🎯 OPORTUNIDADES:
- Lotes en promoción: ${lotesPromocion}
- Ofertas especiales: ${lotesOpcion4}
        `;
    }

    // Respuesta local (método original mejorado)
    static async generateLocalResponse(query, projectData = {}) {
        const lowerQuery = query.toLowerCase();
        
        // Extraer información clave de la consulta
        const context = AIController.analyzeQuery(lowerQuery);
        
        // Generar respuesta contextual
        return AIController.buildContextualResponse(context, projectData, lowerQuery);
    }

    // Analizar la consulta para extraer intención
    static analyzeQuery(query) {
        const context = {
            type: 'general',
            entities: [],
            intent: 'info'
        };

        // Detectar tipo de consulta
        if (query.includes('vend') || query.includes('venta')) {
            context.type = 'ventas';
            context.intent = 'sales_info';
        } else if (query.includes('precio') || query.includes('costo') || query.includes('valor')) {
            context.type = 'precios';
            context.intent = 'price_info';
        } else if (query.includes('disponible') || query.includes('libre')) {
            context.type = 'disponibilidad';
            context.intent = 'availability_info';
        } else if (query.includes('reserv')) {
            context.type = 'reservas';
            context.intent = 'reservation_info';
        } else if (query.includes('promocion') || query.includes('promoción') || query.includes('descuento')) {
            context.type = 'promociones';
            context.intent = 'promotion_info';
        } else if (query.includes('oferta') || query.includes('especial')) {
            context.type = 'ofertas';
            context.intent = 'offer_info';
        } else if (query.includes('estado') || query.includes('resumen') || query.includes('proyecto')) {
            context.type = 'estado_proyecto';
            context.intent = 'project_status';
        } else if (query.includes('mejor') || query.includes('recomend') || query.includes('suger')) {
            context.type = 'recomendaciones';
            context.intent = 'recommendation';
        } else if (query.includes('total') || query.includes('cuántos') || query.includes('cantidad')) {
            context.type = 'estadisticas';
            context.intent = 'statistics';
        }

        // Detectar números y entidades
        const numbers = query.match(/\d+/g);
        if (numbers) {
            context.entities.push(...numbers.map(n => ({ type: 'number', value: parseInt(n) })));
        }

        return context;
    }

    // Construir respuesta contextual
    static buildContextualResponse(context, projectData, originalQuery) {
        const {
            lotesDisponibles = 0,
            lotesVendidos = 0,
            lotesReservados = 0,
            lotesPromocion = 0,
            lotesOpcion4 = 0,
            totalLotes = 0,
            totalVentas = 0,
            promedioPrecios = 0,
            precios = [],
            porcentajeVendido = 0
        } = projectData;

        const formatCurrency = (amount) => {
            return new Intl.NumberFormat('es-CL', { 
                style: 'currency', 
                currency: 'CLP' 
            }).format(amount);
        };

        switch (context.type) {
            case 'ventas':
                return AIController.generateSalesResponse(projectData, formatCurrency);
            
            case 'precios':
                return AIController.generatePriceResponse(projectData, formatCurrency);
            
            case 'disponibilidad':
                return AIController.generateAvailabilityResponse(projectData);
            
            case 'reservas':
                return `Actualmente tenemos ${lotesReservados} lotes reservados. ${lotesReservados > 0 ? 'Estos lotes están en proceso de venta.' : 'No hay lotes reservados en este momento.'}`;
            
            case 'promociones':
                return `Hay ${lotesPromocion} lotes en promoción especial. ${lotesPromocion > 0 ? '¡Es una excelente oportunidad para invertir!' : 'No hay promociones activas actualmente.'}`;
            
            case 'ofertas':
                return `Tenemos ${lotesOpcion4} lotes con ofertas especiales. ${lotesOpcion4 > 0 ? 'Estas ofertas tienen condiciones preferenciales.' : 'No hay ofertas especiales disponibles.'}`;
            
            case 'estado_proyecto':
                return AIController.generateProjectStatusResponse(projectData, formatCurrency);
            
            case 'recomendaciones':
                return AIController.generateRecommendationResponse(projectData);
            
            case 'estadisticas':
                return AIController.generateStatisticsResponse(projectData);
            
            default:
                return AIController.generateHelpResponse();
        }
    }

    // Respuestas especializadas
    static generateSalesResponse(data, formatCurrency) {
        const { lotesVendidos, porcentajeVendido, totalVentas } = data;
        
        let response = `📊 **Reporte de Ventas**\n\n`;
        response += `• Lotes vendidos: ${lotesVendidos}\n`;
        response += `• Porcentaje vendido: ${porcentajeVendido}%\n`;
        response += `• Valor total de ventas: ${formatCurrency(totalVentas)}\n\n`;
        
        if (porcentajeVendido > 70) {
            response += "🔥 ¡Excelente performance! El proyecto tiene alta demanda.";
        } else if (porcentajeVendido > 40) {
            response += "📈 Buenas ventas, el proyecto avanza según lo esperado.";
        } else {
            response += "🚀 Hay gran oportunidad disponible para nuevos compradores.";
        }
        
        return response;
    }

    static generatePriceResponse(data, formatCurrency) {
        const { promedioPrecios, precios } = data;
        
        if (precios.length === 0) {
            return "No hay información de precios disponible.";
        }
        
        const minPrice = Math.min(...precios);
        const maxPrice = Math.max(...precios);
        
        let response = `💰 **Información de Precios**\n\n`;
        response += `• Precio promedio: ${formatCurrency(promedioPrecios)}\n`;
        response += `• Precio mínimo: ${formatCurrency(minPrice)}\n`;
        response += `• Precio máximo: ${formatCurrency(maxPrice)}\n\n`;
        response += `📋 Rango de precios: ${formatCurrency(minPrice)} - ${formatCurrency(maxPrice)}`;
        
        return response;
    }

    static generateAvailabilityResponse(data) {
        const { lotesDisponibles, totalLotes } = data;
        const porcentajeDisponible = totalLotes > 0 ? ((lotesDisponibles / totalLotes) * 100).toFixed(1) : 0;
        
        let response = `🏠 **Disponibilidad de Lotes**\n\n`;
        response += `• Lotes disponibles: ${lotesDisponibles}\n`;
        response += `• Porcentaje disponible: ${porcentajeDisponible}%\n\n`;
        
        if (lotesDisponibles > 20) {
            response += "✅ Excelente disponibilidad. Amplia variedad para elegir.";
        } else if (lotesDisponibles > 10) {
            response += "⚡ Buena disponibilidad. Te recomiendo revisar las opciones pronto.";
        } else if (lotesDisponibles > 0) {
            response += "⚠️ Disponibilidad limitada. ¡Las mejores oportunidades se agotan rápido!";
        } else {
            response += "🔴 Sin disponibilidad actual. Te notificaremos cuando haya nuevas opciones.";
        }
        
        return response;
    }

    static generateProjectStatusResponse(data, formatCurrency) {
        const { totalLotes, lotesVendidos, lotesDisponibles, lotesReservados, porcentajeVendido, totalVentas } = data;
        
        let response = `📋 **Estado del Proyecto**\n\n`;
        response += `🏘️ Total de lotes: ${totalLotes}\n`;
        response += `✅ Vendidos: ${lotesVendidos} (${porcentajeVendido}%)\n`;
        response += `🟢 Disponibles: ${lotesDisponibles}\n`;
        response += `🟡 Reservados: ${lotesReservados}\n`;
        response += `💵 Valor vendido: ${formatCurrency(totalVentas)}\n\n`;
        
        if (porcentajeVendido > 80) {
            response += "🎯 Proyecto en fase final. ¡Últimas oportunidades!";
        } else if (porcentajeVendido > 50) {
            response += "🚀 Proyecto con excelente momentum de ventas.";
        } else {
            response += "🌟 Proyecto con grandes oportunidades disponibles.";
        }
        
        return response;
    }

    static generateRecommendationResponse(data) {
        const { lotesDisponibles, lotesPromocion, lotesOpcion4, precios } = data;
        
        let response = `💡 **Recomendaciones Personalizadas**\n\n`;
        
        if (lotesPromocion > 0) {
            response += `🎯 Te recomiendo los ${lotesPromocion} lotes en promoción por sus condiciones especiales.\n\n`;
        }
        
        if (lotesOpcion4 > 0) {
            response += `⭐ También considera los ${lotesOpcion4} lotes en oferta con beneficios únicos.\n\n`;
        }
        
        if (precios.length > 0) {
            const minPrice = Math.min(...precios);
            const avgPrice = precios.reduce((a, b) => a + b, 0) / precios.length;
            
            if (minPrice < avgPrice * 0.8) {
                response += `💰 Oportunidad: Hay lotes desde ${new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(minPrice)}, ideal para inversión.\n\n`;
            }
        }
        
        response += `📞 ¿Te gustaría que te proporcione más detalles sobre alguna opción específica?`;
        
        return response;
    }

    static generateStatisticsResponse(data) {
        const { totalLotes, lotesDisponibles, lotesVendidos, lotesReservados, lotesPromocion, lotesOpcion4 } = data;
        
        let response = `📊 **Estadísticas Completas**\n\n`;
        response += `📈 **Distribución de Lotes:**\n`;
        response += `• Total: ${totalLotes}\n`;
        response += `• Disponibles: ${lotesDisponibles}\n`;
        response += `• Vendidos: ${lotesVendidos}\n`;
        response += `• Reservados: ${lotesReservados}\n`;
        response += `• En promoción: ${lotesPromocion}\n`;
        response += `• En oferta: ${lotesOpcion4}\n\n`;
        
        const porcentajes = {
            vendidos: totalLotes > 0 ? ((lotesVendidos / totalLotes) * 100).toFixed(1) : 0,
            disponibles: totalLotes > 0 ? ((lotesDisponibles / totalLotes) * 100).toFixed(1) : 0,
            reservados: totalLotes > 0 ? ((lotesReservados / totalLotes) * 100).toFixed(1) : 0
        };
        
        response += `📊 **Porcentajes:**\n`;
        response += `• Vendidos: ${porcentajes.vendidos}%\n`;
        response += `• Disponibles: ${porcentajes.disponibles}%\n`;
        response += `• Reservados: ${porcentajes.reservados}%`;
        
        return response;
    }

    static generateHelpResponse() {
        return `🤖 **Asistente IA - Ayuda**\n\nPuedo ayudarte con:\n\n` +
               `📊 Información de ventas y estadísticas\n` +
               `💰 Precios y rangos de valores\n` +
               `🏠 Disponibilidad de lotes\n` +
               `📋 Estado general del proyecto\n` +
               `💡 Recomendaciones personalizadas\n` +
               `🎯 Promociones y ofertas especiales\n\n` +
               `💬 Escribe tu consulta y te ayudaré con información específica del proyecto.`;
    }
}

module.exports = AIController;
