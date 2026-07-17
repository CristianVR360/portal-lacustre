(() => {
    const tableBody = document.querySelector('#hotspotTable tbody');
    const logoutButton = document.querySelector('#logoutButton');
    const mobLogoutButton = document.querySelector('#mobLogoutButton');
    let currentLoteId = null;
  
    let hotspotsXML = [];
    let allLeads = []; // Store leads for client-side search filtering
    const url = `${window.location.origin}/api/admin`;
  
    const token = getCookie('jwt') || 'logout';
    let isJWTToken = true;
  
    const optionsGET = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    // Grid vs Table View toggles
    const btnTableView = document.getElementById('btnTableView');
    const btnGridView = document.getElementById('btnGridView');
    const lotesTableView = document.getElementById('lotesTableView');
    const lotesGridView = document.getElementById('lotesGridView');

    if (btnTableView && btnGridView && lotesTableView && lotesGridView) {
      btnTableView.addEventListener('click', () => {
        lotesTableView.classList.remove('hidden');
        lotesGridView.classList.add('hidden');
        btnTableView.className = 'p-2 rounded-lg bg-amber-600 text-white focus:outline-none shadow-md shadow-amber-900/10';
        btnGridView.className = 'p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white focus:outline-none transition-colors';
      });

      btnGridView.addEventListener('click', () => {
        lotesTableView.classList.add('hidden');
        lotesGridView.classList.remove('hidden');
        btnGridView.className = 'p-2 rounded-lg bg-amber-600 text-white focus:outline-none shadow-md shadow-amber-900/10';
        btnTableView.className = 'p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white focus:outline-none transition-colors';
      });
    }

    // Search and Filter Elements
    const searchLotInput = document.getElementById('searchLotInput');
    const statusLotFilter = document.getElementById('statusLotFilter');

    if (searchLotInput) searchLotInput.addEventListener('input', applyLotFilters);
    if (statusLotFilter) statusLotFilter.addEventListener('change', applyLotFilters);

    // Selector de Moneda
    const currencySelector = document.getElementById('currencySelector');
    if (currencySelector) {
      currencySelector.addEventListener('change', function(e) {
        const newCurrency = e.target.value;
        fetch(`${window.location.origin}/api/admin/currency`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ currency: newCurrency })
        })
        .then(res => {
          if (res.ok) {
            alert('Moneda del proyecto actualizada con éxito');
            location.reload();
          } else {
            alert('Error al actualizar la moneda');
          }
        })
        .catch(err => {
          console.error('Error:', err);
          alert('Error al conectar con el servidor');
        });
      });
    }

    function applyLotFilters() {
      const query = searchLotInput ? searchLotInput.value.toLowerCase().trim() : '';
      const status = statusLotFilter ? statusLotFilter.value : 'all';

      const filtered = hotspotsXML.filter(hotspot => {
        const matchesQuery = hotspot.id.toLowerCase().includes(query) || 
                             (hotspot.description && hotspot.description.toLowerCase().includes(query));
        const matchesStatus = status === 'all' || hotspot.skinid === status;
        
        return matchesQuery && matchesStatus;
      });

      renderLots(filtered);
    }
  
    // Función para actualizar los contadores de estadísticas de Lotes
    function updateStatistics(hotspots) {
        const stats = {
            disponibles: 0,
            noDisponibles: 0,
            reservados: 0,
            promocion: 0,
            opcion4: 0
        };

        hotspots.forEach(hotspot => {
            switch (hotspot.skinid) {
                case 'ht_disponible':
                    stats.disponibles++;
                    break;
                case 'ht_noDisponible':
                    stats.noDisponibles++;
                    break;
                case 'ht_reservado':
                    stats.reservados++;
                    break;
                case 'ht_promocion':
                    stats.promocion++;
                    break;
                case 'ht_opcion4':
                    stats.opcion4++;
                    break;
            }
        });

        // Actualizar los contadores en el DOM
        if (document.getElementById('lotesDisponibles')) document.getElementById('lotesDisponibles').textContent = stats.disponibles;
        if (document.getElementById('lotesNoDisponibles')) document.getElementById('lotesNoDisponibles').textContent = stats.noDisponibles;
        if (document.getElementById('lotesReservados')) document.getElementById('lotesReservados').textContent = stats.reservados;
        if (document.getElementById('lotesPromocion')) document.getElementById('lotesPromocion').textContent = stats.promocion;
        if (document.getElementById('lotesOpcion4')) document.getElementById('lotesOpcion4').textContent = stats.opcion4;
    }
  
    function getCookie(name) {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
          return cookie.substring(name.length + 1);
        }
      }
      return '';
    }
  
    function getStatusBadge(skinid) {
      const badges = {
        'ht_disponible': {
          text: 'Disponible',
          icon: 'fas fa-check-circle',
          classes: 'bg-emerald-950/40 text-emerald-400 border border-emerald-800/30'
        },
        'ht_noDisponible': {
          text: 'Vendido',
          icon: 'fas fa-handshake',
          classes: 'bg-red-950/40 text-red-400 border border-red-800/30'
        },
        'ht_reservado': {
          text: 'Reservado',
          icon: 'fas fa-clock',
          classes: 'bg-amber-950/40 text-amber-400 border border-amber-800/30'
        },
        'ht_opcion4': {
          text: 'Oferta',
          icon: 'fas fa-star',
          classes: 'bg-blue-950/40 text-blue-400 border border-blue-800/30'
        },
        'ht_promocion': {
          text: 'Promoción',
          icon: 'fas fa-tags',
          classes: 'bg-purple-950/40 text-purple-400 border border-purple-800/30'
        }
      };

      const badge = badges[skinid] || { 
        text: 'Desconocido', 
        icon: 'fas fa-question-circle',
        classes: 'bg-slate-950/40 text-slate-400 border border-slate-800/30' 
      };
      
      return `<span class="px-2.5 py-1 inline-flex items-center text-xs leading-5 font-semibold rounded-full ${badge.classes}">
                <i class="${badge.icon} mr-1"></i>
                ${badge.text}
              </span>`;
    }
  
    // Formatear precios desde la base de datos (valores UF) para mostrar en la UI
    function formatPriceFromDB(value) {
      const numericValue = parseFloat(value) || 0;
      const activeCurrency = window.activeCurrency || 'UF';
      const conversionRate = window.conversionRate || 38000;
      if (activeCurrency === 'UF') {
        return new Intl.NumberFormat('es-CL', { maximumFractionDigits: 0 }).format(numericValue) + ' UF';
      } else {
        const clpValue = Math.round(numericValue * conversionRate);
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(clpValue);
      }
    }

    // Formatear la entrada de texto en el modal a medida que el usuario escribe
    function formatPriceInput(value) {
      const numericValue = parseFloat(String(value).replace(/\D/g, '')) || 0;
      const activeCurrency = window.activeCurrency || 'UF';
      if (activeCurrency === 'UF') {
        return new Intl.NumberFormat('es-CL', { maximumFractionDigits: 0 }).format(numericValue) + ' UF';
      } else {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(numericValue);
      }
    }

    // Convertir el texto formateado de la UI al valor numérico canónico de la base de datos (UF)
    function parsePriceToDB(valueStr) {
      const numericValue = parseFloat(String(valueStr).replace(/\D/g, '')) || 0;
      const activeCurrency = window.activeCurrency || 'UF';
      const conversionRate = window.conversionRate || 38000;
      if (activeCurrency === 'UF') {
        return numericValue;
      } else {
        return Math.round(numericValue / conversionRate);
      }
    }

    function parseDescription(desc, id) {
      try {
        if (desc && desc.trim().startsWith('{') && desc.trim().endsWith('}')) {
          const data = JSON.parse(desc);
          return {
            comment: data.comment || '',
            owner: data.owner || '',
            saleDate: data.saleDate || '',
            area: data.area || '5000',
          };
        }
      } catch (e) {}
      
      const lines = desc ? desc.split('\n').map(l => l.trim()).filter(Boolean) : [];
      let comment = '';
      let area = '5000';
      let owner = '';
      let saleDate = '';

      if (lines.length > 0) {
        const lastLine = lines[lines.length - 1].toLowerCase();
        if (lastLine.includes('superficie') || lastLine.includes('mts') || lastLine.includes('m²')) {
          area = lastLine.replace(/[^\d]/g, '');
          if (lines.length > 2) {
            comment = lines.slice(1, lines.length - 1).join('\n');
          } else if (lines.length === 2) {
            comment = '';
          }
        } else {
          comment = lines.slice(1).join('\n') || lines[0] || '';
        }
      }

      if (comment.toLowerCase().startsWith('vendida') || comment.toLowerCase().startsWith('vendido')) {
        owner = comment.replace(/vendid[ao]\s+/i, '').trim();
      }

      return {
        comment,
        owner,
        saleDate,
        area
      };
    }
  
    const replacePage = () => {
      history.replaceState(null, null, 'loginForm.html');
      location.href = `${window.location.origin}/loginForm.html`;
    };
  
    fetch(`${window.location.origin}/api/login/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    })
      .then((response) => response.json())
      .then(({ isValidToken }) => {
        isJWTToken = isValidToken;
      })
      .catch((error) => console.error(error));
  
    const handleLogout = () => {
      document.cookie = 'jwt=logout; path=/';
      replacePage();
    };

    if (logoutButton) logoutButton.addEventListener('click', handleLogout);
    if (mobLogoutButton) mobLogoutButton.addEventListener('click', handleLogout);
  
    // Load Initial Lotes
    if (token !== 'logout' && isJWTToken) {
      fetch(url, optionsGET)
        .then((response) => response.json())
        .then((data) => {
          let hotspots = data.hotspots.filter(hotspot => !['Point01', 'Point02', 'Point03'].includes(hotspot.id));
          hotspotsXML = hotspots;
  
          window.activeCurrency = data.currency || 'UF';
          window.conversionRate = data.conversionRate || 38000;
  
          const currencySelector = document.getElementById('currencySelector');
          if (currencySelector) {
            currencySelector.value = window.activeCurrency;
          }
  
          // Actualizar estadísticas
          updateStatistics(hotspots);
          
          // Actualizar datos para el resumen y gráficos
          updateProjectData(hotspots);
  
          // Renderizar vistas
          renderLots(hotspots);
        })
        .catch((error) => console.error(error));
    } else {
      replacePage();
    }

    // Render Table and Grid views
    function renderLots(hotspots) {
      // 1. Render Table View
      if (tableBody) {
        tableBody.innerHTML = '';
        hotspots.forEach((hotspot) => {
          const info = parseDescription(hotspot.description, hotspot.id);
          
          let realNomenclature = hotspot.id;
          const prefix = hotspot.id.startsWith('B') ? 'A24-' : 'A25-';
          const num = hotspot.id.replace(/\D/g, '');
          realNomenclature = `${prefix}${num}`;

          const row = document.createElement('tr');
          row.className = 'hover:bg-slate-900/30 transition-colors';
          row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-white">${realNomenclature} <span class="text-xs text-slate-500 font-normal">(${hotspot.id})</span></td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-300 max-w-xs truncate" title="${info.comment || 'Sin comentarios'}">${info.comment || 'Sin comentarios'}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-300">${info.area || '5000'} m²</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-300">${info.owner || '-'}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-400">${info.saleDate || '-'}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-semibold text-amber-500">${formatPriceFromDB(hotspot.url)}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              ${getStatusBadge(hotspot.skinid)}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button class="inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-lg text-white bg-slate-800 hover:bg-slate-700 transition-colors modify-btn" data-bs-toggle="modal" data-bs-target="#editModal" data-lote-id="${hotspot.id}">
                <i class="fas fa-edit mr-1"></i> Modificar
              </button>
            </td>
          `;
          tableBody.appendChild(row);
        });
      }

      // 2. Render Grid View
      renderLotsGridView(hotspots);

      // 3. Bind modify event listeners
      setupModifyButtons();
    }

    // Render lots as a visual grid
    function renderLotsGridView(hotspots) {
      if (!lotesGridView) return;
      lotesGridView.innerHTML = '';

      if (hotspots.length === 0) {
        lotesGridView.innerHTML = '<div class="col-span-full text-center py-8 text-slate-500">No se encontraron lotes.</div>';
        return;
      }

      hotspots.forEach(hotspot => {
        const info = parseDescription(hotspot.description, hotspot.id);
        
        let realNomenclature = hotspot.id;
        const prefix = hotspot.id.startsWith('B') ? 'A24-' : 'A25-';
        const num = hotspot.id.replace(/\D/g, '');
        realNomenclature = `${prefix}${num}`;

        const card = document.createElement('div');
        
        let bgClass = '';
        let textClass = '';
        let borderClass = '';
        let statusLabel = '';
        
        switch (hotspot.skinid) {
          case 'ht_disponible':
            bgClass = 'bg-emerald-950/20 hover:bg-emerald-900/30';
            textClass = 'text-emerald-400';
            borderClass = 'border-emerald-800/30';
            statusLabel = 'Disponible';
            break;
          case 'ht_noDisponible':
            bgClass = 'bg-red-950/20 hover:bg-red-900/30';
            textClass = 'text-red-400';
            borderClass = 'border-red-800/30';
            statusLabel = 'Vendido';
            break;
          case 'ht_reservado':
            bgClass = 'bg-amber-950/20 hover:bg-amber-900/30';
            textClass = 'text-amber-400';
            borderClass = 'border-amber-800/30';
            statusLabel = 'Reservado';
            break;
          case 'ht_promocion':
            bgClass = 'bg-purple-950/20 hover:bg-purple-900/30';
            textClass = 'text-purple-400';
            borderClass = 'border-purple-800/30';
            statusLabel = 'Promoción';
            break;
          case 'ht_opcion4':
            bgClass = 'bg-blue-950/20 hover:bg-blue-900/30';
            textClass = 'text-blue-400';
            borderClass = 'border-blue-800/30';
            statusLabel = 'Oferta';
            break;
          default:
            bgClass = 'bg-slate-900/20 hover:bg-slate-800/30';
            textClass = 'text-slate-400';
            borderClass = 'border-slate-800/30';
            statusLabel = 'Desconocido';
        }

        let ownerHtml = '';
        if (hotspot.skinid === 'ht_noDisponible' && info.owner) {
          ownerHtml = `<p class="text-[10px] text-red-400 font-semibold truncate" title="Propietario: ${info.owner}">Prop: ${info.owner}</p>`;
        } else if (hotspot.skinid === 'ht_reservado' && info.owner) {
          ownerHtml = `<p class="text-[10px] text-amber-400 font-semibold truncate" title="Reserva: ${info.owner}">Res: ${info.owner}</p>`;
        }

        card.className = `glass-panel ${bgClass} ${borderClass} rounded-2xl p-4 flex flex-col justify-between h-44 border transition-all duration-300 hover:scale-[1.02] cursor-pointer group`;
        card.innerHTML = `
          <div class="flex justify-between items-start">
            <span class="text-lg font-bold text-white group-hover:text-amber-500 transition-colors">${realNomenclature}</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold ${textClass} border ${borderClass} uppercase tracking-wider">${statusLabel}</span>
          </div>
          <div class="space-y-0.5">
            <p class="text-xs text-slate-400 truncate" title="${info.comment || 'Sin comentarios'}">${info.comment || 'Sin comentarios'}</p>
            <p class="text-xs text-slate-500">Superficie: ${info.area || '5000'} m²</p>
            ${ownerHtml}
            <p class="text-sm font-bold text-slate-100">${formatPriceFromDB(hotspot.url)}</p>
          </div>
          <div class="pt-2 border-t border-slate-800/50 flex justify-end">
            <button class="text-xs font-semibold text-amber-500 hover:text-amber-400 modify-btn" data-bs-toggle="modal" data-bs-target="#editModal" data-lote-id="${hotspot.id}">
              <i class="fas fa-edit mr-1"></i> Modificar
            </button>
          </div>
        `;
        lotesGridView.appendChild(card);
      });
    }
  
    function setupModifyButtons() {
      const modifyButtons = document.querySelectorAll('.modify-btn');
      const titleInput = document.getElementById('titleInput');
      const skinIDSelect = document.getElementById('skinIDSelect');
      const modalLoteIdSpan = document.getElementById('modalLoteId');
  
      modifyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
          e.stopPropagation(); // Avoid triggering any container clicks
          currentLoteId = this.getAttribute('data-lote-id');
  
          // Find lot info directly from our memory array
          const lot = hotspotsXML.find(h => h.id === currentLoteId);
          let realNomenclature = currentLoteId;
          const prefix = currentLoteId.startsWith('B') ? 'A24-' : 'A25-';
          const num = currentLoteId.replace(/\D/g, '');
          realNomenclature = `${prefix}${num} (${currentLoteId})`;

          if (lot) {
            const info = parseDescription(lot.description, lot.id);

            const priceLabel = document.getElementById('priceLabel');
            if (priceLabel) {
              priceLabel.textContent = `Precio comercial (${window.activeCurrency || 'UF'})`;
            }

            titleInput.value = formatPriceFromDB(lot.url);
            document.getElementById('comentarioInput').value = info.comment || '';
            document.getElementById('superficieInput').value = info.area || '5000';
            document.getElementById('propietarioInput').value = info.owner || '';
            document.getElementById('fechaVentaInput').value = info.saleDate || '';
            skinIDSelect.value = lot.skinid || '';
          }
          modalLoteIdSpan.textContent = realNomenclature;
        });
      });
  
      // Formatear el precio en tiempo real en el modal
      if (titleInput) {
        titleInput.addEventListener('input', function(e) {
          const value = e.target.value.replace(/\D/g, ''); // Eliminar cualquier carácter no numérico
          e.target.value = formatPriceInput(value); // Formatear el valor según la moneda
        });
      }
    }
  
    // Captura el botón "Guardar" del modal
    const saveChangesBtn = document.getElementById('saveChangesBtn');
  
    if (saveChangesBtn) {
      saveChangesBtn.addEventListener('click', function() {
        const priceInputStr = document.getElementById('titleInput').value;
        const price = parsePriceToDB(priceInputStr);
        
        const comment = document.getElementById('comentarioInput').value;
        const area = document.getElementById('superficieInput').value || '5000';
        const owner = document.getElementById('propietarioInput').value;
        const saleDate = document.getElementById('fechaVentaInput').value;
        const status = document.getElementById('skinIDSelect').value;
        
        const descriptionJSON = JSON.stringify({ comment, area, owner, saleDate });
    
        const data = {
          lotId: currentLoteId,
          status,
          newInfo: String(price),
          description: descriptionJSON
        };
    
        fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data)
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`Server responded with a status of ${response.status}`);
          }
        })
        .then(data => {
          console.log('Datos actualizados correctamente');
    
          const modal = document.getElementById('editModal');
          const bootstrapModal = bootstrap.Modal.getInstance(modal) || new bootstrap.Modal(modal);
          bootstrapModal.hide();
    
          alert('Guardado con éxito!');
          location.reload();
        })
        .catch(error => {
          console.error('Error al actualizar:', error.message);
        });
      });
    }
  
    // Función para actualizar datos del proyecto para gráficos y resumen
    function updateProjectData(hotspots) {
      const stats = {
        disponibles: 0,
        vendidos: 0,
        reservados: 0,
        promocion: 0,
        opcion4: 0
      };

      const precios = [];
      const lotesInfo = [];

      hotspots.forEach(hotspot => {
        const precio = parseFloat(hotspot.url) || 0;
        precios.push(precio);
        
        lotesInfo.push({
          id: hotspot.id,
          description: hotspot.description,
          price: precio,
          status: hotspot.skinid
        });

        switch (hotspot.skinid) {
          case 'ht_disponible':
            stats.disponibles++;
            break;
          case 'ht_noDisponible':
            stats.vendidos++;
            break;
          case 'ht_reservado':
            stats.reservados++;
            break;
          case 'ht_promocion':
            stats.promocion++;
            break;
          case 'ht_opcion4':
            stats.opcion4++;
            break;
        }
      });

      const totalLotes = hotspots.length;
      const preciosVendidos = hotspots
        .filter(h => h.skinid === 'ht_noDisponible')
        .map(h => parseFloat(h.url) || 0);
      
      const totalVentas = preciosVendidos.reduce((sum, precio) => sum + precio, 0);
      const promedioPrecios = precios.length > 0 ? 
        precios.reduce((sum, precio) => sum + precio, 0) / precios.length : 0;

      window.currentProjectData = {
        lotesDisponibles: stats.disponibles,
        lotesVendidos: stats.vendidos,
        lotesReservados: stats.reservados,
        lotesPromocion: stats.promocion,
        lotesOpcion4: stats.opcion4,
        precios: precios,
        lotesInfo: lotesInfo,
        totalLotes: totalLotes,
        totalVentas: totalVentas,
        promedioPrecios: promedioPrecios,
        porcentajeVendido: totalLotes > 0 ? (stats.vendidos / totalLotes * 100).toFixed(1) : 0
      };

      console.log('Datos del proyecto actualizados:', window.currentProjectData);

      if (typeof window.updateResumenData === 'function') {
        window.updateResumenData();
      }

      window.dispatchEvent(new CustomEvent('projectDataUpdated', {
        detail: window.currentProjectData
      }));
    }

    // ==========================================
    // SECCIÓN GESTIÓN DE LEADS
    // ==========================================
    const searchLeadInput = document.getElementById('searchLeadInput');
    if (searchLeadInput) {
      searchLeadInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        const filtered = allLeads.filter(lead => 
          lead.name.toLowerCase().includes(query) || 
          lead.email.toLowerCase().includes(query) || 
          lead.phone.toLowerCase().includes(query) ||
          (lead.message && lead.message.toLowerCase().includes(query))
        );
        renderLeads(filtered);
      });
    }

    async function fetchAndRenderLeads() {
      const leadsTableBody = document.querySelector('#leadsTable tbody');
      if (!leadsTableBody) return;

      leadsTableBody.innerHTML = '<tr><td colspan="7" class="text-center py-4 text-slate-400">Cargando leads...</td></tr>';

      try {
        const response = await fetch(`${window.location.origin}/api/leads/admin`, {
          method: 'GET',
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const { leads } = await response.json();
        allLeads = leads; // Store locally for search filtering

        renderLeads(leads);

      } catch (error) {
        console.error('Error fetching leads:', error);
        leadsTableBody.innerHTML = '<tr><td colspan="7" class="text-center py-4 text-red-400">Error al cargar leads. Intente de nuevo.</td></tr>';
      }
    }

    function renderLeads(leads) {
      const leadsTableBody = document.querySelector('#leadsTable tbody');
      if (!leadsTableBody) return;

      // Calcular estadísticas
      const stats = {
        total: allLeads.length,
        new: 0,
        contacted: 0
      };

      allLeads.forEach(lead => {
        if (lead.status === 'new') stats.new++;
        else if (lead.status === 'contacted') stats.contacted++;
      });

      if (document.getElementById('totalLeads')) document.getElementById('totalLeads').textContent = stats.total;
      if (document.getElementById('newLeads')) document.getElementById('newLeads').textContent = stats.new;
      if (document.getElementById('contactedLeads')) document.getElementById('contactedLeads').textContent = stats.contacted;

      // Renderizar tabla
      leadsTableBody.innerHTML = '';
      if (leads.length === 0) {
        leadsTableBody.innerHTML = '<tr><td colspan="7" class="text-center py-4 text-slate-500">No se encontraron leads.</td></tr>';
        return;
      }

      leads.forEach(lead => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-slate-900/30 transition-colors';
        
        const dateStr = new Date(lead.created_at).toLocaleString('es-CL', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });

        const statusBadge = lead.status === 'new' 
          ? '<span class="px-2.5 py-1 inline-flex items-center text-[10px] leading-5 font-semibold rounded-full bg-blue-950/60 text-blue-400 border border-blue-800/30 uppercase tracking-wider"><i class="fas fa-envelope mr-1"></i> Nuevo</span>'
          : '<span class="px-2.5 py-1 inline-flex items-center text-[10px] leading-5 font-semibold rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/30 uppercase tracking-wider"><i class="fas fa-check-circle mr-1"></i> Contactado</span>';

        const toggleButtonText = lead.status === 'new' ? 'Contactado' : 'Nuevo';
        const toggleButtonClass = lead.status === 'new' 
          ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
          : 'bg-blue-600 hover:bg-blue-700 text-white';
        const toggleIcon = lead.status === 'new' ? 'fa-check' : 'fa-envelope';

        const originBadge = lead.origin === 'whatsapp'
          ? '<span class="px-2.5 py-1 inline-flex items-center text-[10px] leading-5 font-semibold rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/30 uppercase tracking-wider"><i class="fab fa-whatsapp mr-1"></i> WhatsApp</span>'
          : '<span class="px-2.5 py-1 inline-flex items-center text-[10px] leading-5 font-semibold rounded-full bg-indigo-950/60 text-indigo-400 border border-indigo-800/30 uppercase tracking-wider"><i class="fas fa-file-alt mr-1"></i> Formulario</span>';

        const cleanPhone = lead.phone.replace(/\D/g, '');
        let wpPhone = cleanPhone;
        if (wpPhone.length === 9 && wpPhone.startsWith('9')) {
          wpPhone = '56' + wpPhone;
        }

        const wpText = `Hola ${lead.name}, gracias por contactarte con Portal Lacustre. Cuéntanos en qué podemos ayudarte.`;
        const wpUrl = `https://wa.me/${wpPhone}?text=${encodeURIComponent(wpText)}`;

        row.innerHTML = `
          <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-400">${dateStr}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-200">${lead.name}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-400">${lead.email}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-400">${lead.phone}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm">${originBadge}</td>
          <td class="px-6 py-4 text-sm text-slate-400 max-w-xs truncate" title="${lead.message}">${lead.message || 'Sin mensaje'}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm">${statusBadge}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2 text-right">
            <button class="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-lg toggle-status-btn ${toggleButtonClass} transition-colors" data-id="${lead.id}" data-current-status="${lead.status}">
              <i class="fas ${toggleIcon} mr-1"></i> Marcar ${toggleButtonText}
            </button>
            <a href="${wpUrl}" target="_blank" class="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors">
              <i class="fab fa-whatsapp mr-1"></i> WhatsApp
            </a>
            <button class="inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-lg text-white bg-red-950/40 hover:bg-red-900/60 border border-red-900/50 delete-lead-btn transition-colors" data-id="${lead.id}">
              <i class="fas fa-trash-alt mr-1"></i> Eliminar
            </button>
          </td>
        `;

        leadsTableBody.appendChild(row);
      });

      setupLeadActionListeners();
    }

    function setupLeadActionListeners() {
      document.querySelectorAll('.toggle-status-btn').forEach(button => {
        button.addEventListener('click', async function() {
          const id = this.getAttribute('data-id');
          const currentStatus = this.getAttribute('data-current-status');
          const newStatus = currentStatus === 'new' ? 'contacted' : 'new';

          try {
            const response = await fetch(`${window.location.origin}/api/leads/admin/${id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ status: newStatus })
            });

            if (response.ok) {
              // Reload leads
              fetchAndRenderLeads();
            } else {
              alert('Error al actualizar el estado del lead');
            }
          } catch (err) {
            console.error('Error updating lead status:', err);
          }
        });
      });

      document.querySelectorAll('.delete-lead-btn').forEach(button => {
        button.addEventListener('click', async function() {
          if (!confirm('¿Está seguro de que desea eliminar este lead?')) return;
          const id = this.getAttribute('data-id');

          try {
            const response = await fetch(`${window.location.origin}/api/leads/admin/${id}`, {
              method: 'DELETE',
              headers: {
                authorization: `Bearer ${token}`,
              }
            });

            if (response.ok) {
              fetchAndRenderLeads();
            } else {
              alert('Error al eliminar el lead');
            }
          } catch (err) {
            console.error('Error deleting lead:', err);
          }
        });
      });
    }

    window.fetchAndRenderLeads = fetchAndRenderLeads;
  
  })();