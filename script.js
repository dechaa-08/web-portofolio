/* ==========================
   LOADING SCREEN
========================== */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 800);
});


/* ==========================
   STICKY NAVBAR
========================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 80);

});


/* ==========================
   ACTIVE MENU
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================
   MENU MOBILE
========================== */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* ==========================
   TYPING EFFECT
========================== */

const typing = document.querySelector(".typing");

const words = [

    "Frontend Developer",
    "Web Developer",
    "UI / UX Designer",
    "JavaScript Programmer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


/* ==========================
   BACK TO TOP
========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================
   SCROLL REVEAL ANIMATION
========================== */

const revealElements = document.querySelectorAll(

".title, .about-container, .skill-card, .project-card, .box, form"

);

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(60px)";

    element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();


/* ==========================
   RIPPLE EFFECT BUTTON
========================== */

const buttons = document.querySelectorAll(".btn, .btn-outline");

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const diameter = Math.max(

            this.clientWidth,

            this.clientHeight

        );

        const radius = diameter / 2;

        circle.style.width = circle.style.height = diameter + "px";

        circle.style.left =

            e.clientX -

            this.getBoundingClientRect().left -

            radius +

            "px";

        circle.style.top =

            e.clientY -

            this.getBoundingClientRect().top -

            radius +

            "px";

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

/*==========================
CARD CLICK EFFECT
==========================*/

const cards = document.querySelectorAll(
    ".skill-card,.project-card,.box"
    );
    
    const emojis = ["💖","❤️","🌸","✨","⭐","💕"];
    
    cards.forEach(card=>{
    
        card.addEventListener("click",()=>{
    
            // Animasi card
            card.animate([
                {transform:"scale(1)"},
                {transform:"scale(.95)"},
                {transform:"scale(1)"}
            ],{
                duration:250
            });
    
            // Emoji
            for(let i=0;i<8;i++){
    
                const emoji=document.createElement("span");
    
                emoji.className="click-emoji";
    
                emoji.innerHTML=
                emojis[Math.floor(Math.random()*emojis.length)];
    
                emoji.style.left=
                Math.random()*80+10+"%";
    
                emoji.style.top=
                Math.random()*80+10+"%";
    
                card.appendChild(emoji);
    
                setTimeout(()=>{
                    emoji.remove();
                },1000);
    
            }
    
        });
    
    });

/*==========================
 SCROLL PROGRESS BAR
==========================*/

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

const progress=(scrollTop/height)*100;

document.getElementById("progress-bar").style.width=progress+"%";

});

/*==========================
 PARTICLES BACKGROUND
==========================*/

const canvas=document.getElementById("particles");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*3+1,

dx:(Math.random()-0.5),

dy:(Math.random()-0.5)

});

}

function animateParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fillStyle="rgba(255,255,255,.5)";

ctx.fill();

p.x+=p.dx;

p.y+=p.dy;

if(p.x<0||p.x>canvas.width)p.dx*=-1;

if(p.y<0||p.y>canvas.height)p.dy*=-1;

});

requestAnimationFrame(animateParticles);

}

animateParticles();

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});

function animateParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let i=0;i<particles.length;i++){

let p=particles[i];

ctx.beginPath();

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fillStyle="rgba(255,255,255,.6)";

ctx.fill();

p.x+=p.dx;

p.y+=p.dy;

if(p.x<0||p.x>canvas.width)p.dx*=-1;

if(p.y<0||p.y>canvas.height)p.dy*=-1;

for(let j=i+1;j<particles.length;j++){

let p2=particles[j];

let dist=Math.hypot(p.x-p2.x,p.y-p2.y);

if(dist<120){

ctx.beginPath();

ctx.moveTo(p.x,p.y);

ctx.lineTo(p2.x,p2.y);

ctx.strokeStyle="rgba(170,120,255,.15)";

ctx.stroke();

}

}

}

requestAnimationFrame(animateParticles);

}

/*==========================
SKILL COUNTER
==========================*/

const counters = document.querySelectorAll(".counter");

function startCounter() {

    counters.forEach(counter => {

        counter.innerText = "0";

        const target = +counter.dataset.target;

        const update = () => {

            const current = +counter.innerText;

            const increment = Math.ceil(target / 50);

            if(current < target){

                counter.innerText = Math.min(current + increment, target);

                setTimeout(update,30);

            }

        };

        update();

    });

}

window.addEventListener("load", startCounter);

/*==========================
PROJECT POPUP
==========================*/

const popup = document.getElementById("projectPopup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

if (popup && popupTitle && popupText && closePopup) {

    document.querySelectorAll(".lihat-btn").forEach((btn, index) => {

        btn.addEventListener("click", function(e){

            e.preventDefault();

            const card = document.querySelectorAll(".project-card")[index];

            popup.style.display = "flex";

            popupTitle.innerHTML = card.querySelector("h3").innerHTML;

            popupText.innerHTML = card.querySelector("p").innerHTML;

        });

    });

    closePopup.addEventListener("click", () => {

        popup.style.display = "none";

    });

    window.addEventListener("click", (e) => {

        if (e.target === popup) {

            popup.style.display = "none";

        }

    });

}

/*==========================
CLICK SOUND
==========================*/

const clickSound=new Audio(

"audio/click.mp3"

);

document.querySelectorAll(

"a,button,.project-card,.skill-card,.box"

).forEach(item=>{

item.addEventListener("click",()=>{

clickSound.currentTime=0;

clickSound.play();

});

});

/*==========================
SAKURA CURSOR EFFECT
==========================*/

document.addEventListener("mousemove", function(e){

    if(Math.random() > 0.45) return;

    const flower = document.createElement("span");

    flower.className = "flower";

    flower.innerHTML = "🌸";

    flower.style.left = e.clientX + "px";
    flower.style.top = e.clientY + "px";

    flower.style.transform =
        `translate(-50%,-50%) rotate(${Math.random()*360}deg)`;

    document.body.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    },1500);

});