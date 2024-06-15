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

function ready(){
    const inputs = document.querySelectorAll(".input-file");
    Array.prototype.forEach.call(inputs, function(input){
        const label = input.nextElementSibling;
        const fileNameSpan = label.nextElementSibling;
        let labelVal = fileNameSpan.innerHTML;

        input.addEventListener("change", function(e){
            let fileName = "";
            if(this.files && this.files.length > 1)
                fileName = (this.getAttribute("data-multiple-caption") || "").replace("{count}", this.files.length);
            else
                fileName = e.target.value.split("\\").pop();

            if(fileName)
                fileNameSpan.innerHTML = fileName;
            else
                fileNameSpan.innerHTML = labelVal;
            
    })
})
}

ready();


// ----------------------------------popup--------------------------------
const popup = document.querySelector('.popup')
const popupShowBtns = document.querySelectorAll('.show-popup')
const closeFormBtn = document.querySelector('.close-form')

popupShowBtns.forEach(item => {
    item.addEventListener('click', () => {
        popup.classList.add('show-popup')
        document.body.classList.add('no-scroll')
    })
})

closeFormBtn.addEventListener('click', () => {
    popup.classList.remove('show-popup')
    document.body.classList.remove('no-scroll')
})

document.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('show-popup')
        document.body.classList.remove('no-scroll')
    }
});

// ------------------------------------------------------------------------------------------------
const serchBlock = document.querySelector(".search-block");
const serchIcon = document.querySelector(".serch-icon");
const searchInp = document.querySelector(".search-block input");
const searchClear = document.querySelector(".search-block .clear");
const headerContact = document.querySelector('.header-contact')

if(window.innerWidth > 1010){
    serchIcon.addEventListener("click", () => {
        serchBlock.classList.toggle("active-search");
        if(serchBlock.classList.contains("active-search")){
            searchInp.focus();
            serchBlock.previousElementSibling.style.display = 'none';
        }else{
            searchInp.value = "";
            serchBlock.previousElementSibling.style.display = 'flex'
        }
        
    })
}

searchClear.addEventListener("click", () => {
    searchInp.value = "";
    serchBlock.classList.remove("active-search");
    serchBlock.previousElementSibling.style.display = 'flex'
})



