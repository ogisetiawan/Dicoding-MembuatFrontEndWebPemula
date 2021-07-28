document.addEventListener("DOMContentLoaded", function () {
    const submitForm = document.getElementById("form");
    
    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addTodo(); //? call event addTodo in dom.js
    });
});