// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


     # ${response.title} by ${response.name}
     ![NPM](https://img.shields.io/npm/l/readme-generator?logo=bitcoin&style=for-the-badge)</heading>
        ${response.badge}
  
        
        ## Table of Contents
        *[Description](#description)
        *[Installation](#installation)
        *[Usage](#usage)
        *[Contributing](#contributing)
        *[Test](#test)
        *[Questions](#questions)
        *[Licence](#license)
        
        
        ##  Description
          ${response.description}
          
          My github link:  ${response.githubLink}
          My Readme URL:   ${response.githubURL}
            
        
        ## Installation
        ${response.installation}
       
        ## Usage
        ${response.usage}
        
        ## Contributing
        ${response.contributing}
        
        ##  Tests
        ${response.test}
        
        ## Questions
        My github username is ${response.username} and I can be contacted by email: ${response.linkEmail} ${response.questions}
        
        ##License
         ${response.licence}
   `;
  
 

}

module.exports = generateMarkdown;
