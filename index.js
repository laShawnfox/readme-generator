const fs = require("fs");
const inquirer = require("inquirer");
const license = ["MIT", "Apache", "GPL", "No License"]

const generateMarkdown = require("./utils/generateMarkdown");
const utils = require("util");
//console.log("hello world!");
  


//array of questions for user
const questionsPrompt = () =>

inquirer.prompt([
  {
     type: "input",
     message: "What is your name?",
     name: "name"
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "username"
 },
  {
    type: "input",
    message: "What is the Title?",
    name: "title"
 },
 {
  type: "input",
  message: "What is the link?",
  name: "githubLink"
},
{
  type: "input",
  message: "What is your URL?",
  name: "githubURL"
},
{
  type: "input",
  message: "What is your email?",
  name: "linkEmail"
},
{
type: "input",
  message: "Enter Description of Project.",
  name: "description"
},
{
type: "input",
  message: "Enter you Installation Process.",
  name: "installation"
},
{
type: "input",
  message: "Enter Usage information.",
  name: "usage"
},
{
type: "input",
  message: "Enter Contributing.",
  name: "contributing"
},
{
type: "input",
  message: "How was this tested?",
  name: "tests"
},
{
  type: "checkbox",
  message: "Choose a license.",
  choices: license,
  name: "license"
},
]);




//function to write README file

 const writeFileAsync = utils.promisify(fs.writeFile);




 

//function to initialize program

  const init = async () => {
    try {
      const questions = await questionsPrompt();
      const data = generateMarkdown(questions);
      await writeFileAsync("README.md", data);
      //console.log(response);
      console.log("This is the README.md");
    } catch (err) {
      console.log(err);
    }

  };
  


// function call to initialize program 
init();