    const mainMenu = document.querySelector('.main-menu');
    const startBtn = document.getElementById('start_btn');

    const mainGame = document.querySelector('.main-game');

    //События

    startBtn.addEventListener('click', ()=>{
        mainMenu.style.opacity = '0';
        mainMenu.style.display = 'none';
        mainGame.style.opacity = '1';
    });