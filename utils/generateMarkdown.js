// function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  
  


     # ${data.title} by ${data.name}
     ![NPM](https://img.shields.io/npm/l/readme-generator?logo=bitcoin&style=for-the-badge)
      
  
        
        ## Table of Contents
        *[Description](#description)
        *[Installation](#installation)
        *[Usage](#usage)
        *[Contributing](#contributing)
        *[Test](#test)
        *[Questions](#questions)
        *[Licence](#license)
        
        
        ##  Description
          ${data.description}
          
          My github link:  ${data.githubLink}
          My Readme URL:   ${data.githubURL}
            
        
        ## Installation
        ${data.installation}
       
        ## Usage
        ${data.usage}
        
        ## Contributing
        ${data.contributing}
        
        ##  Tests
        ${data.test}
        
        ## Questions
        My github username is ${data.username} and I can be contacted by email: ${data.linkEmail} ${data.questions}
        
        ##License
         ${data.licence}
         Copyright (c) 2020.
   `;
  
 

}

module.exports = generateMarkdown;
