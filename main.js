
const first=document.querySelector(".first");
console.log(first);
const sec=document.querySelector(".sec");
console.log(sec);
const third=document.querySelector(".third");
console.log(third);
const fourth=document.querySelector(".fourth");
console.log(fourth);

const firstPlus=document.querySelector(".first-plus");
const firstRepeat=document.querySelector(".first-repeat");

const secPlus=document.querySelector(".sec-plus");
const secRepeat=document.querySelector(".sec-repeat");

const thirdPlus=document.querySelector(".third-plus");
const thirdRepeat=document.querySelector(".third-repeat");

const fourthPlus=document.querySelector(".fourth-plus");
const fourthRepeat=document.querySelector(".fourth-repeat");


let firstCounter=0;let secCounter=0;let thirdCounter=0;let fourthCounter=0;


firstPlus.onclick=()=>{
    firstCounter +=1;
    first.innerHTML=firstCounter;
}
firstRepeat.onclick=()=>{
    firstCounter =0;
    first.innerHTML=firstCounter;
}

secPlus.onclick=()=>{
    secCounter +=1;
    sec.innerHTML=secCounter;
}
secRepeat.onclick=()=>{
    secCounter =0;
    sec.innerHTML=secCounter;
}

thirdPlus.onclick=()=>{
    thirdCounter +=1;
    third.innerHTML=thirdCounter;
}
thirdRepeat.onclick=()=>{
    thirdCounter =0;
    third.innerHTML=thirdCounter;
}

fourthPlus.onclick=()=>{
    fourthCounter +=1;
    fourth.innerHTML=fourthCounter;
}
fourthRepeat.onclick=()=>{
    fourthCounter =0;
    fourth.innerHTML=fourthCounter;
}