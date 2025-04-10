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
    
    function handlePick(){
     let random = Math.floor(Math.random() * something.length )   
     console.log(random)
    bot.src = something[random];
    }
    function handlePick1(){
        let random = Math.floor(Math.random() * something.length )   
        console.log(random)
       bot1.src = something[random];
    }
    function handlePick2(){
        let random = Math.floor(Math.random() * something.length )   
        console.log(random)
       bot2.src = something[random];
    }


    btn.addEventListener('click', handlePick)
    btn1.addEventListener('click', handlePick1)
    btn2.addEventListener('click', handlePick2)
    