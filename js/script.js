let btn = document.getElementById("btn");
let inputField = document.getElementById("inputField");



btn.addEventListener("click", () =>{
    inputField.classList.toggle("inputFieldActive");

    btn.classList.toggle("btn-active");
});
