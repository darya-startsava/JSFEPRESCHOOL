const scroller = document.querySelector ('.scroller');
const imagesContainer = document.querySelector('.container-explorer-section-image');
let moving = false;

scroller.addEventListener('mousedown', startMoveScroller);

function startMoveScroller(){
  moving = true;
  scroller.classList.add('scrolling');
};

document.body.addEventListener('mouseup', startMoveImages);

function startMoveImages(){
  moving = false;
  scroller.classList.remove('scrolling');
};

document.body.addEventListener('mouseleave',stopMove);

function stopMove(){
  moving = false;
  scroller.classList.remove('scrolling');
};

document.body.addEventListener('mousemove', move);

function move(e){
  if (!moving) return;
 let x = e.pageX;
  x -= imagesContainer.getBoundingClientRect().left;
  scrollIt(x);
};

function scrollIt(x){
    let transform = Math.max(0,(Math.min(x,document.querySelector('.container-explorer-section-image').offsetWidth)));
    document.querySelector('.after').style.width = transform+"px";
    document.querySelector('.scroller').style.left = transform-25+"px";
}

scrollIt(440);
