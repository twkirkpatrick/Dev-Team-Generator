const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");  
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");  
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
 
const render = require("./lib/htmlRenderer");

const teamArray = [];


init();

function init(){
    console.log("Welcome to the Dev Team Generator!");
    console.log("This application will help you create an HTML webpage containing information about your development team")
    console.log("Answer the following questions to begin building your team profile");
    console.log("--------------------------------------------------------------------");

    initManager();

    function initManager(){

        console.log("First, let's gather some information about your manager")
        inquirer.prompt([
            {
                type: "input",
                message: "What is your manager's name?",
                name: "managerName"
            },
            {
                type: "input",
                message: "What is your managers ID #?",
                name:"managerId"
            },
            {
                type: "input",
                message: "What is your manager's email?",
                name: "managerEmail"
            },
            {
                type: "input",
                message: "What is your manager's office number?",
                name: "managerOfficeNum"
            }
    
        ]).then(answers => {
            const managerObj = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
            teamArray.push(managerObj);
            console.log("Okay!  Now that we have information for your manager, let's add the rest of the team");
            addTeam();
        })
    }

    function addTeam(){
       

        inquirer.prompt([
            {
                type: "list",
                message: "Would you like to add an Engineer or an Intern?",
                choices: ["Engineer", "Intern", "I am finished - build my file"],
                name: "positionChoice"
            }
        ]).then(userPick => {
            if (userPick.positionChoice === "Engineer"){
                initEngineer();
            } else if (userPick.positionChoice === "Intern"){
                initIntern();
            } else{
                /* buildHTML(); */
            }
        })
    }

    function initEngineer(){
        console.log("Cool, let's add some information for your Software Engineer!");

        inquirer.prompt([
            {
                type: "input",
                message: "What is the Engineer's name?",
                name: "engineerName"
            },
            {
                type: "input",
                message: "What is the Engineer's ID?",
                name: "engineerId"
            },
            {
                type: "input",
                message: "What is the Engineer's email?",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "What is the Engineer's GitHub username?",
                name: "engineerGithub"
            }
        ]).then(answers =>{
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);

            console.log("Engineer added!");
            addTeam();
        })

    }

    function initIntern(){
        console.log("Cool, let's add some information for your Intern!");

        inquirer.prompt([
            {
                type: "input",
                message: "What is the Intern's name?",
                name: "internName"
            },
            {
                type: "input",
                message: "What is the Intern's ID?",
                name: "internId"
            },
            {
                type: "input",
                message: "What is the Intern's email?",
                name: "internEmail"
            },
            {
                type: "input",
                message: "What school does your Intern attend?",
                name: "internSchool"
            }
        ]).then(answers =>{
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArray.push(intern);

            console.log("Intern added!");
            addTeam();
        })

    }
}





// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
