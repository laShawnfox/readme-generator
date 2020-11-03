const fs = require("fs");
const inquirer = require("inquirer");
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
}
]).then(response =>{
    console.log(response);
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
      <heading>#${response.title} by ${response.name} email: ${response.linkEmail}</heading>

      <h2># Description</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sapiente omnis deleniti harum architecto veritatis, adipisci ullam illo, explicabo aliquid voluptatum eos tempora cumque dignissimos at doloribus recusandae. Iste, saepe.</p>
         <ul>
           <li><a href="https://github.com/laShawnfox/readme-generator${response.githubLink}>Github</a></li>
           <li><a href="https://lashawnfox.github.io/readme-generator/${response.githubURL}></a>Github Link</li>
          </ul>
        <br>
      <h2>#Table of Contents</h2>
      <p>
        <ul>
         <li><a href="https://github.com/laShawnfox/readme-generator/blob/main/README.md">INSTALLATION</a></li> 
      
         <li><a href="https://github.com/laShawnfox/readme-generator/blob/main/README.md">USAGE</a></li> 
       
         <li><a href="https://github.com/laShawnfox/readme-generator/blob/main/README.md">LICENSE</a></li> 
      
         <li><a href="https://github.com/laShawnfox/readme-generator/blob/main/README.md">CONTRIBUTING</a></li> 
       
         <li><a href="https://github.com/laShawnfox/readme-generator/blob/main/README.md">TESTS</a></li> 
       
         <li><a href="https://github.com/laShawnfox/readme-generator/blob/main/README.md">QUESTIONS</a> </li>              
         </ul>
       </p>
      <br>
      <h2> # Installation</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sapiente omnis deleniti harum architecto veritatis, adipisci ullam illo, explicabo aliquid voluptatum eos tempora cumque dignissimos at doloribus recusandae. Iste, saepe.</p>
    </br>
      <h2> # Usage</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sapiente omnis deleniti harum architecto veritatis, adipisci ullam illo, explicabo aliquid voluptatum eos tempora cumque dignissimos at doloribus recusandae. Iste, saepe.</p>
    </br>
      <h2> # License</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sapiente omnis deleniti harum architecto veritatis, adipisci ullam illo, explicabo aliquid voluptatum eos tempora cumque dignissimos at doloribus recusandae. Iste, saepe.</p>
    </br>
      <h2> # Contributing</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sapiente omnis deleniti harum architecto veritatis, adipisci ullam illo, explicabo aliquid voluptatum eos tempora cumque dignissimos at doloribus recusandae. Iste, saepe.</p>
      <br>
      <h2> # Tests</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sapiente omnis deleniti harum architecto veritatis, adipisci ullam illo, explicabo aliquid voluptatum eos tempora cumque dignissimos at doloribus recusandae. Iste, saepe.</p>
      <br>
      <h2> # Questions</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sapiente omnis deleniti harum architecto veritatis, adipisci ullam illo, explicabo aliquid voluptatum eos tempora cumque dignissimos at doloribus recusandae. Iste, saepe.</p>
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

// }

// function to initialize program
function init() {

}

// function call to initialize program 
init(); 