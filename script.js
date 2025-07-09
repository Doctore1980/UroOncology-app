const ESTADOS = {
  VACIO: 'vacio',
  BORRADOR: 'borrador',
  CONFIRMADO: 'confirmado',
  DEFINITIVO: 'definitivo'
};

let estadoActual = ESTADOS.VACIO;

function generarAnios() {
  const sel = document.getElementById('select-anio');
  const actual = new Date().getFullYear();
  for (let i = actual; i <= actual + 2; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = i;
    sel.appendChild(opt);
  }
}

function inicializar() {
  generarAnios();
  document.getElementById('select-anio').value = new Date().getFullYear();
  document.getElementById('btn-exportar-csv').addEventListener('click', exportarCSV);
}

document.addEventListener('DOMContentLoaded', inicializar);

function exportarCSV() {
  alert('Función de exportar CSV aún en desarrollo.');
}
