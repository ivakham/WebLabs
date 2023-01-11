const telInput = document.querySelector("footer input");
const popup = document.querySelector(".links");

function showTelNumber(){
    let number = telInput.value;
    alert(number);
}

function togglePopup(){
    popup.classList.toggle("active");
}

document.querySelector("footer input").addEventListener('keyup',(event)=>{
    if (event.key === 'Enter'){
        showTelNumber()
    }
});
