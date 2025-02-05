var button = document.getElementById("action-btn")

button.addEventListener("click", function() {

    var container = document.getElementById("boxlongT");

    if(container.style.display === "none") {
        container.style.display= "block";
    } else {
        container.style.display = "none";
    }
});