const parallax_el = document.querySelectorAll('.parallax');
let xValue = 0 , yValue = 0;

window.addEventListener("mouseover",(e)=>{
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
    
    parallax_el.forEach((el) =>{
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let isInleft = parseFloat(getComputedStyle(el).left) < window.innerWidth /2 ? 1 : -1;
        let zValue = (e.clientX - parseFloat(getComputedStyle(el).left)) * isInleft * 0.1;

        el.style.transform = `translateX(calc(0% + ${xValue * speedx}px)) translateY(calc(0% + ${yValue * speedy}px)) perspective(2300px) translateZ(${zValue * speedz}px)`;
    });
});


let user ;
let userpass;
document.getElementById('logbtn').onclick = ()=>{
    user = document.getElementById('log').value;
    userpass = document.getElementById('passlog').value;
    console.log("username :"+user+"\n"+"userpass :"+userpass);
}

let swt1 = document.getElementById('switch1');
swt1.onclick = ()=>{
    document.getElementById('main1').style.display = 'none';
    document.getElementById('main4').style.display = ' none';
    document.getElementById('main2').style.visibility = 'visible';
    document.getElementById('main3').style.visibility = 'hidden';
    document.getElementById('sec3').style.display = 'block';
    document.getElementById('sec2').style.display= 'flex';
    document.getElementById('descrt').style.marginTop = '7%';
    document.getElementById('descrt').style.marginLeft = '70%';
    document.getElementById('vignette').style.visibility = 'visible';
}

let swt2 = document.getElementById('switch2');
swt2.onclick = ()=>{
    document.getElementById('main1').style.display = 'flex';
    document.getElementById('main4').style.display = ' none';
    document.getElementById('main2').style.visibility = 'hidden';
    document.getElementById('main3').style.visibility = 'hidden';
    document.getElementById('sec3').style.display = 'block';
    document.getElementById('sec2').style.display= 'flex';
    document.getElementById('descrt').style.marginTop = '7%';
    document.getElementById('descrt').style.marginLeft = '70%';
    document.getElementById('vignette').style.visibility = 'visible';
}

let swt3 = document.getElementById('switch3');
swt3.onclick = ()=>{
    document.getElementById('main3').style.visibility = 'visible';
    document.getElementById('main2').style.visibility = 'hidden';
    document.getElementById('main4').style.display = ' none';
    document.getElementById('main1').style.display = 'none';
    document.getElementById('sec2').style.display= 'none';
    document.getElementById('sec3').style.display = 'none';
    document.getElementById('descrt').style.marginTop = '60%';
    document.getElementById('descrt').style.marginLeft = '40%';
    document.getElementById('vignette').style.visibility = 'hidden';
}

let swt4 = document.getElementById('switch4');
swt4.onclick = ()=>{
    document.getElementById('main4').style.display = ' flex';
    document.getElementById('main3').style.visibility = 'hidden';
    document.getElementById('main2').style.visibility = 'hidden';
    document.getElementById('sec2').style.display= 'none';
    document.getElementById('sec3').style.display = 'block';
    document.getElementById('main1').style.display = 'none';
    document.getElementById('vignette').style.visibility = 'hidden';
    document.getElementById('descrt').style.marginTop = '7%';
    document.getElementById('descrt').style.marginLeft = '70%';
}