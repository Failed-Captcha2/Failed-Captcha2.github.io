// links 

const github = document.getElementById("github");
showwave(github);
github.addEventListener("mouseenter", () => showlink(github, "https://github.com/Failed-Captcha2"));
github.addEventListener("mouseleave", () => showwave(github));

const linkedin = document.getElementById("linkedin");
showwave(linkedin);
linkedin.addEventListener("mouseenter", () => showlink(linkedin, "https://www.linkedin.com/in/h-corey-elshobary-718864360/"));
linkedin.addEventListener("mouseleave", () => showwave(linkedin));

const email = document.getElementById("email");
showwave(email);
email.addEventListener("mouseenter", () => showlink(email, "mailto:crowe.elshobary@gmail.com"));
email.addEventListener("mouseleave", () => showwave(email));

function showlink(link, url){
    link.innerHTML = "<a href='" + url + "'>" + url + "</a>";
}

function showwave(link) {
    link.innerHTML = "<p>~~~~~~~~~~~~~~~~~~~~~</p>";
}