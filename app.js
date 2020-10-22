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
            buildTeam();
        })
    }

    function buildTeam(){
        console.log("Okay!  Now that we have information for your manager, let's add the rest of the team");

        inquirer.prompt([
            {
                type: "list",
                message: "Would you like to add an Engineer or an Intern?",
                choices: ["Engineer", "Intern", "I don't want to add any additional team members"],
                name: "positionChoice"
            }
        ]).then(userPick => {
            if (userPick.positionChoice === "Engineer"){
                //run engineer funciton here
            } else if (userPick.positionChoice === "Intern"){
                //run intern function here
            } else{
                //write html function here
            }
        })
    }

    function initEngineer(){
        console.log("Cool, let's add some information for your Software Engineer!")

        //remember to run buildteam function at end of function so the user is presented with the option of adding another team member
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
