const btn = document.getElementById("btn")
const btnp = document.getElementById("p")
let rN = ()=>{
    return Math.floor(Math.random()*256);
};
let n=0;
let i = 1;
let j=1;


let changeColor=()=>{
    rC = `rgb(${rN()},${rN()},${rN()})`
    rCb = `rgb(${rN()},${rN()},${rN()})`
    console.log(rC)
    console.log(rCb)
    document.body.style.background=rC;
    btn.style.background=rCb;
    btn.style.color=rC;
    btn.style.transform= `scale(${i}.${n})`;
    console.log(i + "." + n);
    if(i<5){
        n++;
        if (n==10){
            n=0;
            i++;
            j++;
        }
        if(i==0){
            j=0;
        }
    }
    if(j==5&&i>0){
        i--;
    }
    
}
btn.addEventListener("click",changeColor);
