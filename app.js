const CARGO_DOMICILIO = 10000;

const serviciosData = [
    // --- SERVICIOS GENERALES ---
    {
        id: 1,
        area: "general",
        titulo: "Instalación de Sistema Operativo",
        categoria: "Software",
        aDomicilio: true,
        descripcion: "Instalación limpia de Windows 10 o Windows 11 (ambas versiones Pro Edition activadas).",
        detalleCompleto: "Se formatea el equipo por completo y se instala Windows 10 o Windows 11 según preferencia.",
        imagen: "https://static.allthings.how/wp-content/uploads/ghost-featured/wordpress/2021/07/allthings.how-how-to-use-windows-11-windows-11-logo-dark.png",
        precio: 20000
    },
    {
        id: 2,
        area: "general",
        titulo: "Instalación Suite de Office LTSC 2024",
        categoria: "Software",
        aDomicilio: true,
        descripcion: "Instalación y activación completa de paquetería Office LTSC 2024 (Word, Excel, PowerPoint.) lista para trabajar.",
        detalleCompleto: "Instalación de la versión más reciente y estable de Microsoft Office LTSC 2024. Incluye Word, Excel y PowerPoint activados de forma permanente y listos para tus trabajos o estudios.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKg5nOCSRhUQF11qs-PPJd1z6toDz0HuiowpqHE9TDdz6zxMUm1DJqFtRF&s=10",
        precio: 20000
    },
    {
        id: 3,
        area: "general",
        titulo: "Instalación de Componentes",
        categoria: "Hardware",
        aDomicilio: true,
        descripcion: "Montaje de memorias RAM, discos duros (HDD), unidades de estado sólido (SSD).",
        detalleCompleto: "Servicio de montaje físico y validación de compatibilidad para memorias RAM, unidades de almacenamiento NVMe/SATA y tarjetas gráficas.",
        imagen: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80",
        precio: 15000
    },

    // --- MANTENIMIENTO NOTEBOOK ---
    {
        id: 4,
        area: "notebook",
        titulo: "Mantenimiento Básico Notebook",
        categoria: "Notebook · Básica",
        aDomicilio: true,
        descripcion: "Desarme, limpieza de ventiladores/disipación y aplicación de pasta térmica Arctic MX-4.",
        detalleCompleto: "Desensamble cuidadoso del equipo, limpieza de ventiladores y rejillas de ventilación con aplicación de pasta térmica Arctic MX-4 para un buen rendimiento térmico diario.",
        imagenes: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC9xKGkvcOXim4FXMSWuBdKa9YdrH50op_6bnrQCJO9gf1EwIQVskWpDk&s=10",
            "https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/shutterstock_1280062528.jpg"
        ],
        imagen: "https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/shutterstock_1280062528.jpg",
        precio: 25000
    },
    {
        id: 5,
        area: "notebook",
        titulo: "Mantenimiento Intermedio Notebook",
        categoria: "Notebook · Intermedia",
        aDomicilio: true,
        descripcion: "Desarme, limpieza profunda de disipación y aplicación de pasta térmica Thermal Grizzly Kryonaut Xtreme.",
        detalleCompleto: "Desensamble cuidadoso del equipo, limpieza a fondo de turbinas y rejillas de ventilación. Aplicación de pasta térmica de alta gama Thermal Grizzly Kryonaut Xtreme para garantizar temperaturas óptimas y evitar el Throttling térmico.",
        imagenes: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO4iYbIEj1UYydPJL21LqN6gTcFsNv0CrYCHNhSXpUYA&s",
            "https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/shutterstock_1280062528.jpg"
        ],
        imagen: "https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2023/11/shutterstock_1280062528.jpg",
        precio: 35000
    },

    // --- MANTENIMIENTO ESCRITORIO ---
    {
        id: 6,
        area: "escritorio",
        titulo: "Mantenimiento Básico Escritorio (CPU o GPU)",
        categoria: "Escritorio · Básica",
        aDomicilio: true,
        descripcion: "Cambio de pasta térmica Arctic MX-4 enfocado únicamente en CPU o Tarjeta Gráfica (GPU).",
        detalleCompleto: "Ideal para mantención preventiva estándar en tu procesador o tarjeta de vídeo. Se desmonta el componente seleccionado, se limpia el disipador y se aplica pasta térmica Arctic MX-4.",
        imagenes: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC9xKGkvcOXim4FXMSWuBdKa9YdrH50op_6bnrQCJO9gf1EwIQVskWpDk&s=10",
            "https://www.thermal-grizzly.com/media/56/33/eb/1787205972/888778-product.webp?ts=1790941494"
        ],
        imagen: "https://www.thermal-grizzly.com/media/56/33/eb/1787205972/888778-product.webp?ts=1790941494",
        precio: 25000
    },
    {
        id: 7,
        area: "escritorio",
        titulo: "Mantenimiento Intermedio Escritorio (CPU o GPU)",
        categoria: "Escritorio · Intermedia",
        aDomicilio: true,
        descripcion: "Cambio de pasta térmica Thermal Grizzly Kryonaut Xtreme enfocado únicamente en CPU o Tarjeta Gráfica (GPU).",
        detalleCompleto: "Ideal si notas altas temperaturas específicas en tu procesador o en tu tarjeta de vídeo. Se desmonta el componente seleccionado, se limpia el disipador y se aplica pasta térmica Thermal Grizzly Kryonaut Xtreme.",
        imagenes: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO4iYbIEj1UYydPJL21LqN6gTcFsNv0CrYCHNhSXpUYA&s",
            "https://www.thermal-grizzly.com/media/56/33/eb/1787205972/888778-product.webp?ts=1790941494"
        ],
        imagen: "https://www.thermal-grizzly.com/media/56/33/eb/1787205972/888778-product.webp?ts=1790941494",
        precio: 35000
    },
    {
        id: 8,
        area: "escritorio",
        titulo: "Mantenimiento Completo PC Escritorio",
        categoria: "Escritorio · Completa",
        aDomicilio: false,
        descripcion: "Limpieza integral del gabinete, ventiladores y pasta térmica Thermal Grizzly Kryonaut Xtreme en CPU y GPU.",
        detalleCompleto: "Servicio completo para equipos de escritorio. Limpieza total de polvo en el gabinete, orden y gestión de cables básica, y reemplazo de pasta térmica Thermal Grizzly Kryonaut Xtreme tanto en el procesador como en la tarjeta gráfica. (Por el momento este servicio no se realiza a domicilio).",
        imagen: "https://primetechsupport.com/cdn/shop/articles/gaming-pc-aio-cooler-pump-diagnostic.webp?v=1790049590&width=1080",
        precio: 55000
    }
];

const formatearPrecio = (valor) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(valor);
};

// Contenedores del DOM
const gridGenerales = document.getElementById('grid-generales');
const gridNotebook = document.getElementById('grid-notebook');
const gridEscritorio = document.getElementById('grid-escritorio');
const modalServicio = document.getElementById('modal-servicio');
const modalBodyContent = document.getElementById('modal-body-content');
const btnCerrarModal = document.getElementById('btn-cerrar-modal');

function obtenerBadgeDomicilio(aDomicilio) {
    if (aDomicilio) {
        return `<span class="domicilio-pill disponible">A domicilio (+${formatearPrecio(CARGO_DOMICILIO)})</span>`;
    }
    return `<span class="domicilio-pill no-disponible">No a domicilio</span>`;
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

    const textoDomicilioModal = servicio.aDomicilio
        ? `<strong>Disponible a domicilio:</strong> el servicio base tiene un valor de ${formatearPrecio(servicio.precio)} y el cargo extra por domicilio es de ${formatearPrecio(CARGO_DOMICILIO)} (total a domicilio: ${formatearPrecio(servicio.precio + CARGO_DOMICILIO)}).`
        : `<strong>No disponible a domicilio:</strong> este servicio requiere coordinar entrega/recepción del equipo por fuera de modalidad a domicilio.`;

    modalBodyContent.innerHTML = `
        <img src="${servicio.imagen}" alt="${servicio.titulo}" class="modal-img">
        <div class="modal-detalles">
            <div class="card-header-tags">
                <span class="card-tag">${servicio.categoria}</span>
                ${obtenerBadgeDomicilio(servicio.aDomicilio)}
            </div>
            <h3>${servicio.titulo}</h3>
            <p>${servicio.detalleCompleto}</p>
            <div class="modal-nota-domicilio">${textoDomicilioModal}</div>
        </div>
        <div class="modal-footer-info">
            <span class="modal-precio">${formatearPrecio(servicio.precio)}</span>
            <a href="#contacto" class="btn btn-primary" onclick="cerrarModal()">Agendar Servicio</a>
        </div>
    `;

    modalServicio.classList.add('activo');
};

window.cerrarModal = function() {
    modalServicio.classList.remove('activo');
};

btnCerrarModal.addEventListener('click', cerrarModal);

modalServicio.addEventListener('click', (e) => {
    if (e.target === modalServicio) {
        cerrarModal();
    }
});

function crearTarjetaHTML(servicio) {
    let imagenHTML = '';

    if (servicio.imagenes && servicio.imagenes.length === 2) {
        imagenHTML = `
            <div class="card-img-split">
                <img src="${servicio.imagenes[0]}" alt="${servicio.titulo} 1">
                <img src="${servicio.imagenes[1]}" alt="${servicio.titulo} 2">
            </div>
        `;
    } else if (servicio.imagen) {
        imagenHTML = `<img src="${servicio.imagen}" alt="${servicio.titulo}" class="card-img-custom">`;
    }

    return `
        <article class="card" onclick="abrirModal(${servicio.id})">
            <div>
                <div class="card-header-tags">
                    <span class="card-tag">${servicio.categoria}</span>
                    ${obtenerBadgeDomicilio(servicio.aDomicilio)}
                </div>
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

// Inicialización
document.addEventListener('DOMContentLoaded', renderServicios);