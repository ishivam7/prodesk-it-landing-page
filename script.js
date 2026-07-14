
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }else{
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    else{

        themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

});

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 30){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";

    }

    else{

        header.style.boxShadow="none";

    }

});


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll(".feature,.card,.about,.contact")
.forEach((el)=>observer.observe(el));


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});