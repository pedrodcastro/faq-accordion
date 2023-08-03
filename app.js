const accordion = document.querySelectorAll(".accordion");

accordion.forEach(element => {
    element.addEventListener("click", (event) => {

        event.preventDefault();
        
        element.classList.toggle("active")

        let panel= element.nextElementSibling;

        if(panel.style.display === "block") {
            panel.style.display = "none";

        } else {
            panel.style.display = "block";
        }
    })
    
});

