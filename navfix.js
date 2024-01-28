function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Cerrar el modal haciendo clic fuera de la imagen
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
};

// Script para permitir navegar entre artículos con flechas
const projectsContainer = document.getElementById('projects');

function navigateProjects(direction) {
    const projectWidth = projectsContainer.clientWidth;
    const scrollAmount = direction === 'next' ? projectWidth : -projectWidth;
    projectsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

// Event listeners para las flechas del teclado
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        navigateProjects('next');
    } else if (event.key === 'ArrowLeft') {
        navigateProjects('prev');
    }
});

// Script para agregar/quitar la clase 'fixed' al nav al hacer scroll
window.onscroll = function() {
    var nav = document.querySelector('nav');
    var scrollHeight = window.scrollY;

    // Altura inicial antes de aplicar la clase 'fixed'
    var initialHeight = 100;

    if (scrollHeight > initialHeight) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
};