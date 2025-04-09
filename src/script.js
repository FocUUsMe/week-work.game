    const mainMenu = document.querySelector('.main-menu');
    const startBtn = document.getElementById('start_btn');

    //События

    startBtn.addEventListener('click', ()=>{
        mainMenu.style.opacity = '0';
    });