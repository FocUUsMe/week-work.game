    const mainMenu = document.querySelector('.main-menu');
    const startBtn = document.getElementById('start_btn');
    
    const mainGame = document.querySelector('.main-game');

    let btn = document.querySelector('.btn')
    let btn1 = document.querySelector('.btn-1')
    let btn2 = document.querySelector('.btn-2')
    let bot = document.querySelector('#bot')
    let bot1 = document.querySelector('#bot1')
    let bot2 = document.querySelector('#bot2')

    //События

let something = ['./assets/paper.png','./assets/rock.png','./assets/scissors.png',]

    startBtn.addEventListener('click', ()=>{
        mainMenu.style.opacity = '0';
        mainMenu.style.display = 'none';
        mainGame.style.opacity = '1';
    });