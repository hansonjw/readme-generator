// function to generate markdown for README

const licenses = {
  'GNU AGPLv3': '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]',
  'GNU GPLv3':'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  // 'GNU LGPLv3':,
  'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  // 'Apache License 2.0':,
  'MIT License':'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  // 'Boost Software License 1.0':,
  'The Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
  'No License': 'No license is applicable for this application'
  };


function generateMarkdown(data) {

  // get data.license and get icon from license object
  let licenseBadge = licenses[data.license];


  return `# ${data.title}  
  ${licenseBadge}

  ## Description:  
  ${data.description}

  ## Table of Contents:
  [Installation Instructions](#Installation:)
  [How to use This Application:](#How-To:)
  [How to Contibute:](#Contibute:)
  [License Information:](#License:)
  [Questions:](#Questions:)
  
  <a name="Installation:">## Installation:</a>
  
  ${data.installation}
  
  <a name="How-To:">## How-To: </a>
  ${data.usage}

  <a name="Contribute:">## Contribute:  </a>
  ${data.contributing}

  <a name="License:">## License:</a>
  This application is covered under the following license...
  ${data.license}  
  For more information on the license click on the badge below:
  ${licenses[data.license]}
  
  <a name="Questions:">## Questions: </a>
  For questions, comments, suggestions, I can be reached at the following  
  ${data.github}  
  ${data.email}
`;
}

module.exports = {generateMarkdown, licenses};
