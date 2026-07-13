document.addEventListener('DOMContentLoaded', function () {
  const url = `${window.location.origin}/api/admin`; // URL de la API para obtener los datos de los lotes
  const token = getCookie('jwt') || 'logout';

  const optionsGET = {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  // Incluir el plugin de Chart.js para mostrar etiquetas personalizadas con porcentajes
  Chart.register(ChartDataLabels);

  // Obtén los datos de los lotes para el resumen del proyecto
  if (token !== 'logout') {
    fetch(url, optionsGET)
      .then((response) => response.json())
      .then(({ hotspots }) => {
        // Filtra y procesa los datos para el modal resumen
        const lotesData = hotspots.filter(
          (hotspot) => !['Point01', 'Point02', 'Point03'].includes(hotspot.id)
        );

        // Llenar los gráficos del modal resumen con los datos reales
        generarResumenModal(lotesData);
      })
      .catch((error) => console.error('Error al obtener los datos:', error));
  }

  // Función para llenar los gráficos del modal resumen
  function generarResumenModal(lotesData) {
    const estadoLotes = {
      disponible: 0,
      vendido: 0,
      reservado: 0,
      proximamente: 0,
    };

    const preciosLotes = [];
    const lotesLabels = [];
    let ingresosReales = 0;
    let ingresosProyectados = 0;

    // Procesar datos para gráficos
    lotesData.forEach((lote) => {
      const precio = parseInt(lote.url, 10) || 0; // Aseguramos que el precio se convierta a número

      switch (lote.skinid) {
        case 'ht_disponible':
          estadoLotes.disponible++;
          ingresosProyectados += precio; // Ingresos proyectados son los precios de los lotes disponibles
          break;
        case 'ht_noDisponible':
          estadoLotes.vendido++;
          ingresosReales += precio; // Ingresos reales son los lotes vendidos
          break;
        case 'ht_reservado':
          estadoLotes.reservado++;
          ingresosProyectados += precio; // Ingresos proyectados incluyen lotes reservados
          break;
        case 'ht_proximamente':
          estadoLotes.proximamente++;
          ingresosProyectados += precio; // Ingresos proyectados incluyen lotes proximamente disponibles
          break;
      }

      preciosLotes.push(precio); // Agregar precio convertido a número
      lotesLabels.push(`Lote ${lote.id}`);
    });

    // Llenar gráficos
    cargarGraficoEstadoLotes(estadoLotes);
    cargarGraficoPreciosLotes(lotesLabels, preciosLotes);
    cargarGraficoIngresos(ingresosProyectados, ingresosReales); // Llenar el gráfico de ingresos
  }

  // Función para cargar gráfico del estado de los lotes
  function cargarGraficoEstadoLotes(estadoLotes) {
    const ctxStatus = document.getElementById('loteStatusChart').getContext('2d');
    const totalLotes = estadoLotes.disponible + estadoLotes.vendido + estadoLotes.reservado + estadoLotes.proximamente; // Total de lotes
    const statusData = {
      labels: ['Disponible', 'Vendido', 'Reservado', 'Próximamente'],
      datasets: [
        {
          label: 'Estado de los Lotes',
          data: [
            estadoLotes.disponible,
            estadoLotes.vendido,
            estadoLotes.reservado,
            estadoLotes.proximamente,
          ],
          backgroundColor: ['#007bff', '#28a745', '#ffc107', '#17a2b8'],
        },
      ],
    };

    // Volvemos a la configuración funcional y añadimos porcentajes redondeados
    new Chart(ctxStatus, {
      type: 'doughnut',
      data: statusData,
      options: {
        responsive: true,
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              const total = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
              const percentage = Math.round((value / total) * 100) + '%'; // Redondear porcentaje
              return percentage; // Muestra el porcentaje
            },
            color: '#fff',
            font: {
              weight: 'bold',
              size: 14,
            },
          },
        },
      },
      plugins: [ChartDataLabels], // Registro del plugin
    });
  }

  // Función para cargar gráfico de distribución de precios
  function cargarGraficoPreciosLotes(lotesLabels, preciosLotes) {
    const ctxPrice = document.getElementById('priceDistributionChart').getContext('2d');
    const priceData = {
      labels: lotesLabels,
      datasets: [
        {
          label: 'Precios',
          data: preciosLotes,
          backgroundColor: '#17a2b8',
        },
      ],
    };

    new Chart(ctxPrice, {
      type: 'bar',
      data: priceData,
    });
  }

  // Función para cargar gráfico de ingresos proyectados vs reales con porcentajes redondeados
  function cargarGraficoIngresos(ingresosProyectados, ingresosReales) {
    const ctxIncome = document.getElementById('incomeChart').getContext('2d');
    const totalIngresos = ingresosProyectados + ingresosReales; // Total de ingresos
    const incomeData = {
      labels: ['Ingresos Proyectados', 'Ingresos Reales'],
      datasets: [
        {
          label: 'Ingresos (CLP)',
          data: [ingresosProyectados, ingresosReales],
          backgroundColor: ['#007bff', '#28a745'],
        },
      ],
    };

    new Chart(ctxIncome, {
      type: 'bar',
      data: incomeData,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);
              },
            },
          },
        },
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              const total = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
              const percentage = Math.round((value / total) * 100) + '%'; // Redondear porcentaje
              return percentage; // Muestra el porcentaje
            },
            color: '#fff',
            font: {
              weight: 'bold',
              size: 14,
            },
            anchor: 'end',
            align: 'top',
          },
        },
      },
    });
  }

  // Función auxiliar para obtener cookies
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
});
