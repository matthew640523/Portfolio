gsap.from('.namecontainer', {duration: 1.2, x: '-300px', opacity: '0', ease: 'power'})



let app = document.getElementById('words');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 70,
});

typewriter.pauseFor(1500)    
    .typeString('<span>I Make </span><span style="color: rgb(0, 255, 128);">Beautiful Websites.</span>')
    .pauseFor(2000)
    .deleteAll(45)
    .pauseFor(500)
    .typeString('<span>I Love </span><span style="color: rgb(0, 255, 128);">Coding.</span>')
    .pauseFor(2000)
    .deleteAll(45)
    .pauseFor(500)
    .typeString('<span>Feel free to </span><span style="color: rgb(0, 255, 128);">Reach out!</span>')
    .pauseFor(2000)
    .deleteAll(45)
    .pauseFor(500)
    .start();

    let chk = document.getElementById('chk')
    
    chk.addEventListener('change', () => {
        document.body.classList.toggle('dark');
    });






    //SMOOTH SCROLL

    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true,
        easing: 'easeinquad'
    });
    

    //FOR THE MOBILE MENU
    const navslide = () => {
        const ham = document.querySelector('.ham');
        const navbar = document.querySelector('.topnav');
        ham.addEventListener('click', function() {
            navbar.classList.toggle('topnavactive');
            ham.classList.toggle('toggle');
            
        })
    }
    navslide();
    

    //AOS SCROLL ANIMATION EFFECT
    AOS.init({
        offset: 300, 
        duration: 1000,
    });
    




