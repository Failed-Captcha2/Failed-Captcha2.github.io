// ----------------------------------LINKS -------------------------------------------------------------------------
const github = document.getElementById("github");
const waveScale = github.style.backgroundSize;
// console.log(waveScale);

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

//projects = NAME, types(research,hardware,software)
var projects = [["PROJECTS"],
                        ["WEBSITE", "software"],
                        ["RF POWER SENSOR & MATCHED NETWORK BOARD","hardware"],
                        ["DIRECTIONAL PASSWORD STORAGE", "hardware", "software"],
                        ["SMES RESEARCH", "research"],
                        ["CUSTOM CPU DESIGN","software"]];
var projectNum = 0;

function scrollProjects(direction) {

    //scroll to next valid project; dont scroll if at end of list
    if (direction == 1) {
        for (i = projectNum + 1; i < projects.length; i++) {
            if (checkTypes(projects[i])) {
                projectNum = i;
                break;
            }
        }
    } else{
        for (i = projectNum - 1; i >= 0; i--) {
            if (i==0 ||checkTypes(projects[i])) {
                projectNum = i;
                break;
            }
        }
    }

    // console.log(projects[projectNum][0]);

    //show project name
    document.getElementById("project-name").innerHTML = projects[projectNum][0];
    //show project description
    displayProject(projects[projectNum][0]);
}

function checkTypes(project) {
    //checks types in given projects at index 1+ (because index 0 is used for project name)
    for (let j = 1; j < project.length; j++) {
        //return true if any type within the project is NOT being filtered out
        if (!document.getElementsByName("filter-" + project[j])[0].checked) {
            return true;
        }
    }
    return false;
}

function displayProject(project) {
    if (project == "PROJECTS") {

        document.getElementById("project-description").innerHTML =
            `project navigation -------- >
        <br> scroll through projects with up/down arrows
        <br> filter by hardware, software, or research
        <br> click [ ] to view projects in new window`;
    }

    if (project == "WEBSITE") {
        document.getElementById("project-description").innerHTML =
            `present
            <br> personal project
            <br>
            <br> this website was built using HTML, CSS, and JavaScript
            <br> design concept was made by the talented <a href="https://torn-shorts.github.io//">torn shorts</a>.`;
    }

    if (project == "DIRECTIONAL PASSWORD STORAGE") {
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
            <br>
            <br>
            <a href="https://drive.google.com/file/d/11zxhwW6TINa2DT7RK2FR4h-nHS9iVlN7/view">Video Demonstration</a>
            <br>
            <a href=https://drive.google.com/file/d/1Da8RKR-INKUIdCeaMTy8vhf3X1jBhPkm/view?usp=sharing">Original/Modified Verilog code</a>
            <br>
            <a href="https://www.intel.com/content/www/us/en/design-example/714719/intel-max-10-fpga-g-sensor-de10-lite-board-design-example.html">Sources</a>

            `
    }

    if (project =="RF POWER SENSOR & MATCHED NETWORK BOARD") {
        document.getElementById("project-description").innerHTML =
            `March 2026
            <br> Applied Electromagnetism Course Project
            <br>
            <br> calculated stub and quarter wave matching network parameters
            <br> designed schematic and PCB board on KiCad
            <br> Assembled board and tested functionality with VNA

            `
    }

    if (project =="SMES RESEARCH") {
        document.getElementById("project-description").innerHTML =
            `March 2025
            <br>
            Effective Engineering Communication Course Project
            <br>
            <br>
            This report explores the prospects of SMES technology as a solution for addressing the challenges associated with large scale renewable energy usage, more specifically it covers how the properties of SMES make it a promising solution for regulating the fluctuations in energy supply and demand. As the use of renewable energy sources become more prevalent the demand for a more effective energy storage solution, is becoming more prevalent. The purpose of this report is to propose integration of SMES as a solution to this demand. This study was conducted through compiling the most up-to-date research on the subject available. Information is collected from credible sources written in 2022 or more recently and analyzed through thorough review and cross-referencing of details. The analysis indicates that although the benefits of SMES make it a promising solution, there are still challenges involved that require more research that needs to be made before the widespread integration of SMES can be accomplished. Based on the findings, I propose more focus be made on the integration of hybrid energy storage methods involving the use of SMES technology.
            <br>
            <br>
            <a href="https://docs.google.com/document/d/1mhISlZ6ep3tjYi_Aj1pMZklAzQQ5cwhITCqdLG56I4E/edit?usp=sharing">Full Report</a>
            `
    }

    if (project=="CUSTOM CPU DESIGN") {
        document.getElementById("project-description").innerHTML =
            `February 2025
            <br>Embedded Systems Course Project
            <br>
            <br>Developed a 5-stage pipelined CPU in Verilog based on RISC-V instruction set
            <br>Implemented instruction decoding, hazard detection, and memory I/O
            `
    }
}
