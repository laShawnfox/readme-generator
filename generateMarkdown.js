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
        <heading><h1>${response.title} by ${response.name}</h1>![NPM](https://img.shields.io/npm/l/readme-generator?logo=bitcoin&style=for-the-badge)</heading>
        <p>${response.badge}</p>
  
        <hr>
        <h2>Table of Contents</h2>
        <p>
          <ul>
          <li><a href="#description">DESCRIPTION</a></li> 

          <li><a href="#installation">INSTALLATION</a></li>  
        
           <li><a href="#usage">USAGE</a></li>
        
           <li><a href="#contributing">CONTRIBUTING</a></li> 
         
           <li><a href="#tests">TESTS</a></li> 
         
           <li><a href="#questions">QUESTIONS</a></li>

           <li><a href="#license">LICENSE</a></li>

           </ul>
        </p>
        <hr>
        <h2> Description</h2>
          <p>${response.description}</p>
           <ul>
             <li>My github link:${response.githubLink}</li>
             <li>My Readme URL: ${response.githubURL}</li>
            </ul>
        <hr>
        <br>
        <h2>  Installation</h2>
        <p>${response.installation}</p>
        <hr>
      </br>
        <h2>  Usage</h2>
        <p>${response.usage}</p>
        </hr>
      </br>
        <h2> Contributing</h2>
        <p>${response.contributing}</p>
        <hr>
        <br>
        <h2>  Tests</h2>
        <p>${response.test}</p>
        <hr>
        <br>
        <h2> Questions</h2>
        <p>My github username is ${response.username} and I can be contacted by email: ${response.linkEmail} ${response.questions}</p>
        </br>
        <hr>
          <h2> License</h2>
          <p>${response.licence}</p>
      </body>
  </html>`;
  return `# ${data.title}
 
`;
}

module.exports = generateMarkdown;
