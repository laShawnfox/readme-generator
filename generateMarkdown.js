// function to generate markdown for README
function generateMarkdown(data) {
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
  
  
           <li><a href="https://github.com/laShawnfox/readme-generator/blob/main/README.md">INSTALLATION</a></li> 
        
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
  return `# ${data.title}
 
  //[Description](#description)
  // [Installation](#installation)
  // [Usage](#usage)
  //[Contributing](#contributing)
  //[Tests](#tests)
  //[Questions](#questions)
  //[License](#license)
`;
}

module.exports = generateMarkdown;
