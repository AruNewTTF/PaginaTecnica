const serviciosData = [
    // --- SERVICIOS GENERALES ---
    {
        id: 1,
        area: "general",
        titulo: "Instalación de Sistema Operativo",
        categoria: "Software",
        descripcion: "Instalación limpia de Windows 10 o Windows 11 (ambas versiones Pro Edition activadas).",
        detalleCompleto: "Se formatea el equipo por completo y se instala Windows 10 o Windows 11 según lo que decida usted.",
        imagen: "https://static.allthings.how/wp-content/uploads/ghost-featured/wordpress/2021/07/allthings.how-how-to-use-windows-11-windows-11-logo-dark.png",
        precio: 20000
    },
    {
        id: 2,
        area: "general",
        titulo: "Instalación Suite de Office LTSC 2024",
        categoria: "Software",
        descripcion: "Instalación y activación completa de paquetería Office LTSC 2024 (Word, Excel, PowerPoint, etc.) lista para trabajar.",
        detalleCompleto: "Instalación de la versión más reciente y estable de Microsoft Office LTSC 2024. Incluye Word, Excel, PowerPoint y Outlook activados de forma permanente y listos para optimizar tus trabajos o estudios.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKg5nOCSRhUQF11qs-PPJd1z6toDz0HuiowpqHE9TDdz6zxMUm1DJqFtRF&s=10",
        precio: 20000
    },
    {
        id: 3,
        area: "general",
        titulo: "Instalación de Componentes",
        categoria: "Hardware",
        descripcion: "Montaje de memorias RAM, discos duros (HDD), unidades de estado sólido (SSD), etc.",
        detalleCompleto: "Servicio de montaje físico y validación de compatibilidad para memorias RAM, unidades de almacenamiento NVMe/SATA y tarjetas gráficas.",
        imagen: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80",
        precio: 15000
    },

    // --- MANTENIMIENTO NOTEBOOK ---
    {
        id: 4,
        area: "notebook",
        titulo: "Mantenimiento Básico Notebook",
        categoria: "Notebook",
        descripcion: "Desarme, limpieza profunda de disipación y aplicación de pasta térmica Thermal Grizzly Kryonaut Xtreme.",
        detalleCompleto: "Desensamble cuidadoso del equipo, limpieza de ventiladores y rejillas de ventilación. Aplicación de pasta térmica de alta gama Thermal Grizzly Kryonaut Xtreme para garantizar temperaturas óptimas y evitar el Throttling térmico.",
        imagen: "https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/shutterstock_1280062528.jpg",
        precio: 35000
    },

    // --- MANTENIMIENTO ESCRITORIO ---
    {
        id: 5,
        area: "escritorio",
        titulo: "Mantenimiento Básico Escritorio (CPU o GPU)",
        categoria: "Escritorio",
        descripcion: "Cambio de pasta térmica Thermal Grizzly Kryonaut Xtreme enfocado únicamente en CPU o Tarjeta Gráfica (GPU).",
        detalleCompleto: "Ideal si notas altas temperaturas específicas en tu procesador o en tu tarjeta de vídeo. Se desmonta el componente seleccionado, se limpia el disipador y se aplica pasta térmica Thermal Grizzly Kryonaut Xtreme.",
        imagen: "https://www.thermal-grizzly.com/media/56/33/eb/1787205972/888778-product.webp?ts=1790941494",
        precio: 35000
    },
    {
        id: 6,
        area: "escritorio",
        titulo: "Mantenimiento Completo PC Escritorio",
        categoria: "Escritorio",
        descripcion: "Limpieza integral del gabinete, ventiladores y cambio completo de pasta térmica Thermal Grizzly Kryonaut Xtreme en CPU y GPU.",
        detalleCompleto: "Servicio premium para equipos de escritorio. Limpieza total de polvo en el gabinete, orden y gestión de cables básica, y reemplazo de pasta térmica Thermal Grizzly Kryonaut Xtreme tanto en el procesador como en la tarjeta gráfica.",
        imagen: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
        precio: 55000
    }
];

const formatearPrecio = (valor) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(valor);
};

// Contenedores del DOM
const gridGenerales = document.getElementById('grid-generales');
const gridNotebook = document.getElementById('grid-notebook');
const gridEscritorio = document.getElementById('grid-escritorio');
const modalServicio = document.getElementById('modal-servicio');
const modalBodyContent = document.getElementById('modal-body-content');
const btnCerrarModal = document.getElementById('btn-cerrar-modal');

// Helper para crear el HTML de cada tarjeta con interacción de clic
function crearTarjetaHTML(servicio) {
    // AQUÍ ESTABA EL DETALLE: Creamos la etiqueta img aplicando tu clase CSS
    let imagenHTML = servicio.imagen 
        ? `<img src="${servicio.imagen}" alt="${servicio.titulo}" class="card-img-custom">` 
        : '';

    return `
        <article class="card" onclick="abrirModal(${servicio.id})">
            <div>
                <span class="card-tag">${servicio.categoria}</span>
                ${imagenHTML}
                <h3>${servicio.titulo}</h3>
                <p>${servicio.descripcion}</p>
            </div>
            <div class="card-footer-info">
                <span class="card-precio">${formatearPrecio(servicio.precio)}</span>
                <span class="card-ver-mas">Ver detalles +</span>
            </div>
        </article>
    `;
}

// Renderizar secciones
function renderServicios() {
    gridGenerales.innerHTML = serviciosData
        .filter(s => s.area === 'general')
        .map(crearTarjetaHTML)
        .join('');

    gridNotebook.innerHTML = serviciosData
        .filter(s => s.area === 'notebook')
        .map(crearTarjetaHTML)
        .join('');

    gridEscritorio.innerHTML = serviciosData
        .filter(s => s.area === 'escritorio')
        .map(crearTarjetaHTML)
        .join('');
}

// Lógica del Modal
window.abrirModal = function(id) {
    const servicio = serviciosData.find(s => s.id === id);
    if (!servicio) return;

    modalBodyContent.innerHTML = `
        <img src="${servicio.imagen}" alt="${servicio.titulo}" class="modal-img">
        <div class="modal-detalles">
            <span class="card-tag">${servicio.categoria}</span>
            <h3>${servicio.titulo}</h3>
            <p>${servicio.detalleCompleto}</p>
        </div>
        <div class="modal-footer-info">
            <span class="modal-precio">${formatearPrecio(servicio.precio)}</span>
            <a href="#contacto" class="btn btn-primary" onclick="cerrarModal()">Agendar Servicio</a>
        </div>
    `;

    modalServicio.classList.add('activo');
}

function cerrarModal() {
    modalServicio.classList.remove('activo');
}

btnCerrarModal.addEventListener('click', cerrarModal);

modalServicio.addEventListener('click', (e) => {
    if (e.target === modalServicio) {
        cerrarModal();
    }
});

// Inicialización
document.addEventListener('DOMContentLoaded', renderServicios);