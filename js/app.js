/* ==========================================================
   ACUÁTICA MAY — Animaciones de desplazamiento
   ========================================================== */

// 1. Revelar elementos al hacer scroll (IntersectionObserver)
//    Cuando un elemento .revelar / .revelar-izq / .revelar-der
//    entra en pantalla, se le agrega la clase .visible y el CSS
//    hace la animación de entrada.
const elementosOcultos = document.querySelectorAll('.revelar, .revelar-izq, .revelar-der');

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
            observador.unobserve(entrada.target); // solo anima la primera vez
        }
    });
}, {
    threshold: 0.15 // se dispara cuando se ve el 15% del elemento
});

elementosOcultos.forEach((elemento) => observador.observe(elemento));

// 2. Botón "volver arriba": aparece después de bajar 400px
const botonArriba = document.getElementById('irArriba');

window.addEventListener('scroll', () => {
    botonArriba.classList.toggle('mostrar', window.scrollY > 400);
}, { passive: true });

// 3. Formulario de contacto: arma el mensaje y lo envía por WhatsApp
//    (la página no tiene servidor, así que el mensaje llega directo
//    al WhatsApp de la escuela ya redactado)
const NUMERO_WHATSAPP = '529991436984';

const formulario = document.querySelector('.formulario');
const campoNombre = document.getElementById('nombre');
const campoCorreo = document.getElementById('correo');
const campoMensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // evita que la página se recargue

    const nombre = campoNombre.value.trim();
    const correo = campoCorreo.value.trim();
    const mensaje = campoMensaje.value.trim();

    // Validación extra a la de HTML (por si mandan puros espacios)
    if (!nombre || !mensaje) {
        mostrarAviso('Por favor completa tu nombre y el mensaje.', 'error');
        return;
    }

    const texto =
        `Hola, soy ${nombre}.\n` +
        `${mensaje}\n\n` +
        `Mi correo es: ${correo}`;

    // Abre WhatsApp (app o web) con el mensaje ya escrito
    const enlace = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(texto)}`;
    window.open(enlace, '_blank', 'noopener');

    mostrarAviso('Abriendo WhatsApp con tu mensaje listo para enviar...', 'exito');
    formulario.reset();
});

// Muestra un avisito debajo del botón del formulario
function mostrarAviso(texto, tipo) {
    let aviso = formulario.querySelector('.formulario-aviso');
    if (!aviso) {
        aviso = document.createElement('p');
        aviso.className = 'formulario-aviso';
        formulario.appendChild(aviso);
    }
    aviso.textContent = texto;
    aviso.classList.remove('error', 'exito', 'animar');
    // truco para reiniciar la animación si el aviso ya existía
    void aviso.offsetWidth;
    aviso.classList.add(tipo, 'animar');
}

