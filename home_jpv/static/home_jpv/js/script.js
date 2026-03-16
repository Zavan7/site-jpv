
/* ================= ANIMAÇÃO AO ROLAR ================= */

const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
    })
})

elements.forEach(el=>observer.observe(el))


/* ================= DARK MODE ================= */

const button = document.getElementById("theme-toggle")

button.onclick = () => {

document.body.classList.toggle("dark")

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark")
button.innerText="☀️"

}else{

localStorage.setItem("theme","light")
button.innerText="🌙"

}

}

/* ================= SALVAR TEMA ================= */

const savedTheme = localStorage.getItem("theme")

if(savedTheme === "dark"){

document.body.classList.add("dark")
button.innerText="☀️"

}