document.getElementById("regForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop page refresh

    // Get form values
    document.getElementById("outName").innerText = document.getElementById("name").value;
    document.getElementById("outEmail").innerText = document.getElementById("email").value;
    document.getElementById("outPhone").innerText = document.getElementById("phone").value;
    document.getElementById("outGender").innerText = document.getElementById("gender").value;
    document.getElementById("outCourse").innerText = document.getElementById("course").value;

    // Hide form and show output box
    document.querySelector(".container").style.display = "none";
    document.getElementById("output").style.display = "block";
});
