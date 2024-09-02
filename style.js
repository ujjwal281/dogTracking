let playerState = 'fall';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change',function(e){
    playerState = e.target.value;
})

const  canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
console.log(ctx);
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;

const background = new Image();
background.src = 'background.jpg';


let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name:'idle',
        frames:7,
    },
    {
        name :'jump',
        frames : 7,

    },
    {
        name :'fall',
        frames : 7,

    },
    {
        name :'run',
        frames : 9,

    },
    {
        name :'dizzy',
        frames : 11,

    },
    {
        name :'sit',
        frames : 5,

    },
    {
        name :'roll',
        frames : 7,

    },
    {
        name :'bite',
        frames : 7,

    },
    {
        name :'ko',
        frames : 21,

    },
    {
        name :'getHit',
        frames : 4,

    },
]

animationStates.forEach((state,index)=>{

    let frames = {
        loc : [],
    }

    for(let j = 0 ; j < state.frames ; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x:positionX , y:positionY});
    }

    spriteAnimations[state.name] = frames;

})

console.log(spriteAnimations)
const a = 0;
function animate(){

    ctx.clearRect(0,0, CANVAS_WIDTH , CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;


    // ctx.fillRect(100,50,100,100);
    // ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh);
    // drawImage(image, dx, dy)
    // drawImage(image, dx, dy, dWidth, dHeight)
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)


    // ctx.drawImage(background,1000,600,1050,800,120,202,1280,840)

    ctx.drawImage(playerImage, frameX , frameY,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);

    gameFrame++;

    requestAnimationFrame(animate);
};

animate();