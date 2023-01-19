const menuToggle = document.querySelector('.check input');
const nav = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('show');
});

document.addEventListener("mousemove", parallax);

function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
}

ScrollReveal({
    distance: '50px',
    duration: 2000,
    reset: true
});

ScrollReveal().reveal('.main_container .home .home_title, .main_container .home .sub-home_title',{delay: 100, origin: 'left'});

ScrollReveal().reveal('.main_container .home .foto',{delay: 100, origin: 'right'});

ScrollReveal().reveal('.main_container .about .about_title',{delay: 200, origin: 'top'});

ScrollReveal().reveal('.main_container .about .sub-about_title',{delay: 200, origin: 'right'});

ScrollReveal().reveal('.main_container .about .foto',{delay: 400, origin: 'top'});

ScrollReveal().reveal('.main_container .skills .skills_title',{delay: 200, origin: 'top'});

ScrollReveal().reveal('.main_container .skills .skills_container1',{delay: 400, origin: 'left'});

ScrollReveal().reveal('.main_container .skills .skills_container2',{delay: 400, origin: 'right'});

ScrollReveal().reveal('.main_container .skills .sub-skills_name',{delay: 600, origin: 'top'});

ScrollReveal().reveal('.main_container .portofolio .portofolio_title',{delay: 100, origin: 'top'});

ScrollReveal().reveal('.main_container .portofolio .wrapper_slide',{delay: 400, origin: 'top'});

ScrollReveal().reveal('.main_container .portofolio .download',{delay: 700, origin: 'top'});