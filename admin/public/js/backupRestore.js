// Función para exportar los datos de los lotes
function exportLotesToJSON(lotesData) {
    const dataStr = JSON.stringify(lotesData, null, 2); // Convertir los datos a JSON con formato legible
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = 'lotes_backup.json';
  
    // Crear un enlace temporal para descargar el archivo JSON
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }
  
  // Función para manejar el clic en el botón de exportación
  document.getElementById('exportButton').addEventListener('click', () => {
    const url = `${window.location.origin}/api/admin`; // Asegúrate de que esta URL sea correcta
    const token = getCookie('jwt') || 'logout';
  
    const optionsGET = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
  
    // Verificar si el token está presente y hacer la solicitud
    if (token !== 'logout') {
      fetch(url, optionsGET)
        .then((response) => response.json())
        .then(({ hotspots }) => {
          const lotesData = hotspots.filter(hotspot => !['Point01', 'Point02', 'Point03'].includes(hotspot.id));
          if (lotesData.length > 0) {
            exportLotesToJSON(lotesData);  // Exporta los lotes cuando se haga clic
          } else {
            console.error('No se encontraron datos para exportar');
            alert('No se encontraron lotes disponibles para exportar.');
          }
        })
        .catch((error) => {
          console.error('Error al obtener los datos de los lotes:', error);
          alert('Ocurrió un error al intentar exportar los lotes.');
        });
    } else {
      console.error('Token JWT no válido o ausente.');
      alert('Debe estar autenticado para exportar los lotes.');
    }
  });
  
  // Función para importar los lotes desde un archivo JSON cargado
  function importLotesFromJSON(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const lotesData = JSON.parse(e.target.result);
        console.log('Datos importados:', lotesData);
  
        // Enviar estos datos al servidor o procesarlos localmente
        restoreLotes(lotesData);
      };
      reader.readAsText(file);
    }
  }
  
  // Función para restaurar los lotes en el servidor o localmente
  function restoreLotes(lotesData) {
    const url = `${window.location.origin}/api/admin`; // Utilizar la misma URL de scriptAdmin.js
    const token = getCookie('jwt') || 'logout';
  
    lotesData.forEach(lote => {
      console.log('Enviando lote al servidor para restaurar:', lote);
  
      fetch(url, {
        method: 'PUT', // Usamos PUT para actualizar, igual que en scriptAdmin.js
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          lotId: lote.id,
          status: lote.skinid,
          newInfo: lote.url, // Aquí asumo que el 'url' es el precio
          description: lote.description
        }),
      })
      .then((response) => {
        if (response.ok) {
          console.log(`Lote ${lote.id} restaurado correctamente`);
        } else {
          console.error(`Error al restaurar el lote ${lote.id}`, response.statusText);
        }
      })
      .catch((error) => console.error('Error al restaurar el lote:', error));
    });
  }
  
  // Asociar el evento de carga de archivo al input de importación
  document.getElementById('importFileInput').addEventListener('change', importLotesFromJSON);
  
  // Botón de importación para seleccionar el archivo JSON
  document.getElementById('importButton').addEventListener('click', () => {
    document.getElementById('importFileInput').click();  // Simula el clic en el input de archivo
  });
  
  // Función auxiliar para obtener cookies (JWT)
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
  
  // Función para restaurar los lotes en el servidor o localmente
function restoreLotes(lotesData) {
    const url = `${window.location.origin}/api/admin`; // Utilizar la misma URL de scriptAdmin.js
    const token = getCookie('jwt') || 'logout';
  
    let totalLotes = lotesData.length;
    let lotesRestaurados = 0;
  
    // Mostrar el modal de carga a pantalla completa
    mostrarCarga(true);
    actualizarBarraDeProgreso(0, totalLotes);
  
    lotesData.forEach(lote => {
      console.log('Enviando lote al servidor para restaurar:', lote);
  
      fetch(url, {
        method: 'PUT', // Usamos PUT para actualizar, igual que en scriptAdmin.js
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          lotId: lote.id,
          status: lote.skinid,
          newInfo: lote.url, // Aquí asumo que el 'url' es el precio
          description: lote.description
        }),
      })
      .then((response) => {
        if (response.ok) {
          lotesRestaurados++;
          console.log(`Lote ${lote.id} restaurado correctamente`);
  
          // Actualizar barra de progreso
          actualizarBarraDeProgreso(lotesRestaurados, totalLotes);
  
          // Verificar si todos los lotes han sido restaurados
          if (lotesRestaurados === totalLotes) {
            mostrarCarga(false); // Ocultar el modal de carga
            mostrarModalConfirmacion(); // Mostrar el modal de confirmación
          }
        } else {
          console.error(`Error al restaurar el lote ${lote.id}`, response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error al restaurar el lote:', error);
        mostrarCarga(false); // Ocultar el modal si ocurre un error
      });
    });
  }
  
  // Función para mostrar/ocultar el modal de carga (spinner y barra de progreso)
  function mostrarCarga(mostrar) {
    const loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'));
  
    if (mostrar) {
      loadingModal.show(); // Mostrar el modal de carga a pantalla completa
    } else {
      loadingModal.hide(); // Ocultar el modal de carga
    }
  }
  
  // Función para actualizar la barra de progreso
  function actualizarBarraDeProgreso(lotesRestaurados, totalLotes) {
    const progressBar = document.getElementById('progressBar');
    const porcentaje = Math.round((lotesRestaurados / totalLotes) * 100);
    
    progressBar.style.width = `${porcentaje}%`;
    progressBar.setAttribute('aria-valuenow', porcentaje);
    progressBar.textContent = `${porcentaje}%`;
  }
  
  // Función para mostrar el modal de confirmación cuando la importación ha finalizado
  function mostrarModalConfirmacion() {
    const importSuccessModal = new bootstrap.Modal(document.getElementById('importSuccessModal'));
    importSuccessModal.show();
  
    // Esperar unos segundos y luego recargar la página
    setTimeout(() => {
      location.reload(); // Recargar la página para mostrar los datos actualizados
    }, 3000); // Recargar la página después de 3 segundos
  }
  