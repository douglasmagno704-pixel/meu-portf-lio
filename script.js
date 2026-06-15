// ==========================
// LENIS - SMOOTH SCROLL
// ==========================

const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 0.8,
    touchMultiplier: 1.5,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// ==========================
// MENU COM SCROLL SUAVE
// ==========================

document.querySelectorAll('.menu-link').forEach(link => {

    link.addEventListener('click', (e) => {

        e.preventDefault();

        const target = document.querySelector(
            link.getAttribute('href')
        );

        if (target) {
            lenis.scrollTo(target, {
                offset: -100,
                duration: 1.5
            });
        }

    });

});


// ==========================
// BARRA DE PROGRESSO
// ==========================

const progressBar = document.querySelector('.progress-bar');

lenis.on('scroll', ({ scroll }) => {

    const alturaPagina =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progresso = (scroll / alturaPagina) * 100;

    if (progressBar) {
        progressBar.style.width = progresso + '%';
    }

});


// ==========================
// MENU ATIVO
// ==========================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu-link');

function atualizarMenuAtivo() {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute('id');
        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (
            current &&
            link.getAttribute('href') === `#${current}`
        ) {
            link.classList.add('active');
        }

    });

}

lenis.on('scroll', atualizarMenuAtivo);


// ==========================
// REVEAL AO ROLAR
// ==========================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }

        });

    },

    {
        threshold: 0.15
    }

);

document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});

document.querySelectorAll('.reveal-top').forEach(element => {
    observer.observe(element);
});

document.querySelectorAll('.reveal-mobile')
.forEach(element => {
    observer.observe(element);
});

document.querySelectorAll(
'.foto-card, .sobre-texto'
).forEach(element => {

    observer.observe(element);

});



// ==========================
// FORMULÁRIO WHATSAPP
// ==========================

function enviarWhatsApp(event) {

    event.preventDefault();

    const nome = document.getElementById('nome');
    const mensagem = document.getElementById('mensagem');

    const whatsapp = '5583986038606';

    const texto =
        `Olá, meu nome é ${nome.value}. ${mensagem.value}`;

    const msgFormatada =
        encodeURIComponent(texto);

    const url =
        `https://wa.me/${whatsapp}?text=${msgFormatada}`;

    window.open(url, '_blank');

}

const btnTopo = document.getElementById('btn-topo');

window.addEventListener('scroll', () => {

    if (window.scrollY > 400) {
        btnTopo.classList.add('show');
    } else {
        btnTopo.classList.remove('show');
    }

});

btnTopo.addEventListener('click', () => {

    const startPosition = window.pageYOffset;
    const duration = 1500;
    let start = null;

    function easeInOutQuart(t) {
        return t < 0.5
            ? 8 * t * t * t * t
            : 1 - Math.pow(-2 * t + 2, 4) / 2;
    }

    function animate(currentTime) {

        if (!start) start = currentTime;

        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(
            0,
            startPosition * (1 - easeInOutQuart(progress))
        );

        if (elapsed < duration) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);

});

document.addEventListener("DOMContentLoaded", () => {

    const texto = "Desenvolvedor criativo focado em construir experiências digitais excepcionais e interfaces intuitivas.";
    const elemento = document.getElementById("digitando");

    if (!elemento) return;

    let i = 0;

    function escrever() {

        if (i < texto.length) {

            elemento.textContent += texto.charAt(i);

            i++;

            setTimeout(escrever, 80);
        }

    }

    escrever();

});

document.querySelectorAll('.projeto-card').forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 20;
        const rotateX = ((y / rect.height) - 0.5) * -20;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =
            'perspective(1000px) rotateX(0) rotateY(0)';

    });

});

document.querySelectorAll('.projeto-card')
.forEach(card => {

    card.addEventListener('mousemove', e => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.setProperty(
            '--x',
            `${x}px`
        );

        card.style.setProperty(
            '--y',
            `${y}px`
        );

    });

});

const glow = document.querySelector('.cursor-glow');

if (glow) {

    document.addEventListener('mousemove', (e) => {

        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';

    });

}

window.addEventListener('scroll', () => {

    const nav =
    document.querySelector('.navegacao');

    if(window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

});


for(let i = 0; i < 30; i++) {

    const particula =
    document.createElement('div');

    particula.classList.add('particula');

    particula.style.left =
    Math.random() * 100 + '%';

    particula.style.animationDuration =
    (Math.random() * 10 + 5) + 's';

    document.body.appendChild(particula);

}

const contadores = document.querySelectorAll('.contador');

const observerContador = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const contador = entry.target;
            const alvo = +contador.dataset.target;

            let atual = 0;

            const incremento = alvo / 100;

            const atualizar = () => {

                atual += incremento;

                if (atual < alvo) {

                    contador.textContent =
                        '+' + Math.floor(atual);

                    requestAnimationFrame(atualizar);

                } else {

                    contador.textContent = '+' + alvo;
                }

                contador.parentElement.classList.add('active');

            };

            atualizar();

            observerContador.unobserve(contador);

        }

    });

}, {
    threshold: 0.5
});

contadores.forEach(contador => {
    observerContador.observe(contador);
});

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

menuToggle.addEventListener('click', () => {

    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    overlay.classList.toggle('active');

});

document.querySelectorAll('.menu-link').forEach(link => {

    link.addEventListener('click', (e) => {

        e.preventDefault();

        const target = document.querySelector(
            link.getAttribute('href')
        );

        if (target) {

            lenis.scrollTo(target, {
                offset: -80,
                duration: 1.5
            });

            setTimeout(() => {

                menu.classList.remove('active');
                menuToggle.classList.remove('active');
                overlay.classList.remove('active');

            }, 300);

        }

    });

});

overlay.addEventListener('click', () => {

    menu.classList.remove('active');
    menuToggle.classList.remove('active');
    overlay.classList.remove('active');

});