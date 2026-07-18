// ----------------------------------LINKS -------------------------------------------------------------------------
const github = document.getElementById("github");
const waveScale = github.style.backgroundSize;
console.log(waveScale);

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
    link.innerHTML = "<a class='link' href='" + url + "'>" + url.replace("https://", "").replace("www.","").replace("mailto:", "") + "</a>";
    
}

function showwave(link) {
    link.innerHTML = "";
    link.style.backgroundImage = "url(images/sine.png)";
}

//------------------------------PROJECTS-------------------------------------------------------------------------

//project types: [hardware, software, research]
var projectTypes = [[], ["software"], ["hardware","software"]];
var projectNum = 0;

function scrollProjects(direction) {

    if (direction == 1) {
        for (i = projectNum + 1; i < projectTypes.length; i++) {
            if (checkTypes(projectTypes[i])) {
                projectNum = i;
                break;
            }
        }
    } else{
        for (i = projectNum - 1; i >= 0; i--) {
            if (i==0 ||checkTypes(projectTypes[i])) {
                projectNum = i;
                break;
            }
        }
    }

    console.log(projectNum);

    displayProject(projectNum);
}

function checkTypes(types) {
    for (let j = 0; j < types.length; j++) {
        if (!document.getElementsByName("filter-" + types[j])[0].checked) {
            return true;
        }
    }
    return false;
}

function displayProject(projectNum) {
    if (projectNum == 0) {
        document.getElementById("project-name").innerHTML = "PROJECTS";

        document.getElementById("project-description").innerHTML =
            `project navigation -------- >
        <br> scroll through projects with up/down arrows
        <br> filter by hardware, software, or research
        <br> click [ ] to view projects in new window`;
    }

    if (projectNum == 1) {
        document.getElementById("project-name").innerHTML = "WEBSITE";
        document.getElementById("project-description").innerHTML =
            `work in progress
            <br>
            <br> this website was built using HTML, CSS, and JavaScript
            <br> design concept was made by the talented <a href="https://torn-shorts.github.io//">torn shorts</a>.`;
    }

    if (projectNum == 2) {
        document.getElementById("project-name").innerHTML = "DIRECTIONAL PASSWORD STORAGE";
        document.getElementById("project-description").innerHTML =
            `March 2026
            <br> Digital Logic Design Course Project
            <br>
            <br> This project utilizes an FPGA board (DE10 LITE) programmed with Verilog to store passwords in physical space.
            Source code from Intel is used to implement GSensor functionality and modified. It has two main modes which can be toggled between using the right-most switch.
            <br>
            <br>
            In password set mode (SW[0] == 1), the next 4 switches are used to set the value of each digit/led in the password, pressing the top button increases the index of the password digit/led being set. Once all digits are set, the leds display radial position, clicking the top button in the desired position twice saves the password and its storage position.
            <br>
            <br>
            In position view mode, the 4 left-most leds display y and x radial position. Pressing the bottom button “normalizes” the position by setting the current position to 0,0. Pressing the top button displays the stored password only if the position is that of the storage position set in password set mode.
 `
    }
}
