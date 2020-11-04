const fs = require("fs");
const inquirer = require("inquirer");
const license = ["MIT", "Apache", "GPL"]
//const generateMarkdown = require("./generateMarkdown");
console.log("hello world!");
  

//array of questions for user
inquirer.prompt ([
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
  message: "What are the links?",
  name: "githubLinks"
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
  message: "Enter Description of Project",
  name: "description"
},
{
type: "input",
  message: "Enter you Installation Process.",
  name: "installation"
},
{
type: "input",
  message: "Enter Usage information",
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
]).then(response =>{
    console.log(response);
   // const generateMarkdown = generateMarkdown(response);
    const questions = [
      "What is your name?", "What is the title?", "What are the links?", "What is your URL?", "What is your email?"
];
 
const htmlTemplate = `<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>README</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body>
      <heading><h1>${response.title} by ${response.name}</h1></heading>
      <h2>Table of Contents</h2>
      <p>
        <ul>
        <li>[Description]:https://github.com/laShawnfox/readme-generator/blob/main/README.md</li> 


         <li>[INSTALLATION](<a href="https://github.com/laShawnfox/readme-generator/blob/main/README.md"></a>)</li> 
      
         <li><a href="https://github.com/laShawnfox/readme-generator/blob/main/README.md">USAGE</a></li> 
       
         <li><a href="https://github.com/laShawnfox/readme-generator/blob/main/README.md">LICENSE</a></li> 
      
         <li><a href="https://github.com/laShawnfox/readme-generator/blob/main/README.md">CONTRIBUTING</a></li> 
       
         <li><a href="https://github.com/laShawnfox/readme-generator/blob/main/README.md">TESTS</a></li> 
       
         <li><a href="https://github.com/laShawnfox/readme-generator/blob/main/README.md">QUESTIONS</a></li>              
         </ul>
      </p>
      <h2> Description</h2>
        <p>${response.description}</p>
         <ul>
           <li>My github link:${response.githubLink}</li>
           <li>My Readme URL: ${response.githubURL}</li>
          </ul>
      
      <br>
      <h2>  Installation</h2>
      <p>${response.installation}</p>
    </br>
      <h2>  Usage</h2>
      <p>${response.usage}</p>
    </br>
      <h2> Contributing</h2>
      <p>${response.contributing}</p>
      <br>
      <h2>  Tests</h2>
      <p>${response.test}</p>
      <br>
      <h2> Questions</h2>
      <p>My github username is ${response.username} and I can be contacted by email: ${response.linkEmail} ${response.questions}</p>
      </br>
        <h2> License</h2>
        <p>${response.licence}</p>
    </body>
</html>`;
// function to write README file
fs.writeFile("index.html",htmlTemplate, "utf8", (err) =>{
    if(err) throw(err);
    console.log("Success Readme!");
});
})
// const questions = [
//       "What is your name?", "What is the title?", "What are the links?", "What is your URL?", "What is your email?"

// ];
 


// function writeToFile(fileName, data) {
 // fs.writeToFile(generateMarkdown, data){

  //}
// }

// function to initialize program
function init() {

}

// function call to initialize program 
init(); 