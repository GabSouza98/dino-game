const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let position = 0;
let isJumping = false;

function handleKeyUp(event) {
    if(event.keyCode === 32) {
        if(!isJumping){
            jump();
        }
    }
}

function jump() {
   
    let isJumping = true;

    let upInterval = setInterval( () => {

        if(position >= 180) {
            clearInterval(upInterval);

            let downInterval = setInterval( () => {
                if(position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 15;
                    dino.style.bottom = position + 'px';
                }
            }, 20)

        } else {
            position += 15;
            dino.style.bottom = position + 'px';
        }        
    }, 20);

}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1300;
    let randomTime = Math.random() * 6000;
    

    cactus.classList.add('cactus');
  background.appendChild(cactus);
  cactus.style.left = cactusPosition + 'px';

  let leftInterval = setInterval(() => {
    

        if(cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            //game over 
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over"> Game Over !!! </h1>'; 
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
        
    },20);



  setTimeout(createCactus, randomTime);

}

createCactus();
document.addEventListener('keydown', handleKeyUp)