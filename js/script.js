// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
           // active navbar links
           navLinks.forEach(links => {
            links.classList.remove('active');
    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
           });
          // active sections for animation on scroll
          sec.classList.add('show-animate');
        }
       // if want to use animation that repeats on scroll use this
       else {
        sec.classList.remove('show-animate');
       }
    });

    // mix it up projetos section 
    var mixer = mixitup('.projetos-gallery');

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

    // animation projetos on scroll
    let projetos = document.querySelector('projetos');

    projetos.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
    
    // animation contato on scroll 
    let contato = document.querySelector('contato');
    
    contato.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

    // animation sobremim on scroll
    let isScrolling = false;

function handleScroll() {
    let sobremim = document.querySelector('.sobremim');
    let elementRect = sobremim.getBoundingClientRect();
    let isElementVisible = elementRect.top <= window.innerHeight * 0.9 && elementRect.bottom >= 0;

    console.log('Element Visible:', isElementVisible); // Adicione esta linha para depurar

    sobremim.classList.toggle('show-animate', isElementVisible);
}

function throttle(func, wait) {
    let lastTime = 0;

    return function() {
        const currentTime = new Date().getTime();

        if (currentTime - lastTime >= wait) {
            func();
            lastTime = currentTime;
        }
    };
}

window.addEventListener('scroll', function() {
    if (!isScrolling) {
        isScrolling = true;

        requestAnimationFrame(function() {
            handleScroll();
            isScrolling = false;
        });
    }
});

    
    

