const header = document.querySelector(".header");
const burger = document.querySelector(".burger");


burger.addEventListener("click", () => {
    header.classList.toggle("mobile-header");
    if (header.classList.contains("mobile-header")) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
})

// --------------------------------------------------------------------------------------------------------------
const link = document.querySelector("a[disabled]");
const btn = link.querySelector("button");
console.log(link)
if(btn){
    btn.disabled = true;
}

