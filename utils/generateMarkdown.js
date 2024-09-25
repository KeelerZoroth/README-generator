const endOfLineSymbol = ";";

//  The badge and website links are from: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "Apache License 2.0":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
    break;
    case "GNU General Public License v3.0":
      return "![License](https://img.shields.io/badge/License-GPL_v3-blue.svg)"
    break;
    case "MIT License":
      return "![License](https://img.shields.io/badge/License-MIT-blue.svg)"
    break;
    case "BSD 2-Clause 'Simplified' License":
      return "![License](https://img.shields.io/badge/License-BSD_2--Clause-blue.svg)"
    break;
    case "BSD 3-Clause 'New' or 'Revised' License":
      return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)"
    break;
    case "Boost Software License 1.0":
      return "![License](https://img.shields.io/badge/License-Boost_1.0-blue.svg)"
    break;
    case "Creative Commons Zero v1.0 Universal":
      return "![License](https://img.shields.io/badge/License-CC0_1.0-blue.svg)"
    break;
    case "Eclipse Public License 2.0":
      return "![License](https://img.shields.io/badge/License-EPL_1.0-blue.svg)"
    break;
    case "GNU Affero General Public License v3.0":
      return "![License](https://img.shields.io/badge/License-AGPL_v3-blue.svg)"
    break;
    case "GNU General Public License v2.0":
      return "![License](https://img.shields.io/badge/License-GPL_v2-blue.svg)"
    break;
    case "GNU Lesser General Public License v2.1":
      return "![License](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)"
    break;
    case "Mozilla Public License 2.0":
      return "![License](https://img.shields.io/badge/License-MPL_2.0-blue.svg)"
    break;
    case "The Unlicense":
      return "![License](https://img.shields.io/badge/License-Unlicense-blue.svg)"
    break;
    default:
      return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "Apache License 2.0":
      return "https://opensource.org/licenses/Apache-2.0"
    break;
    case "GNU General Public License v3.0":
      return "https://www.gnu.org/licenses/gpl-3.0"
    break;
    case "MIT License":
      return "https://opensource.org/licenses/MIT"
    break;
    case "BSD 2-Clause 'Simplified' License":
      return "https://opensource.org/licenses/BSD-2-Clause"
    break;
    case "BSD 3-Clause 'New' or 'Revised' License":
      return "https://opensource.org/licenses/BSD-3-Clause"
    break;
    case "Boost Software License 1.0":
      return "https://www.boost.org/LICENSE_1_0.txt"
    break;
    case "Creative Commons Zero v1.0 Universal":
      return "http://creativecommons.org/publicdomain/zero/1.0/"
    break;
    case "Eclipse Public License 2.0":
      return "https://opensource.org/licenses/EPL-1.0"
    break;
    case "GNU Affero General Public License v3.0":
      return "https://www.gnu.org/licenses/agpl-3.0"
    break;
    case "GNU General Public License v2.0":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
    break;
    case "GNU Lesser General Public License v2.1":
      return "https://www.gnu.org/licenses/lgpl-3.0"
    break;
    case "Mozilla Public License 2.0":
      return "https://opensource.org/licenses/MPL-2.0"
    break;
    case "The Unlicense":
      return "http://unlicense.org/"
    break;
    default:
      return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  [${renderLicenseBadge(license)}](${renderLicenseLink(license)})
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
  ${data.description}
## Table of Contents
  [Description](#description)  
  [Installation](#installation)  
  [Usage](#usage)  
  [License](#license)  
  [Contributing](#contributing)  
  [Tests](#tests)  
  [Questions](#questions)  
## Installation
  Prerequisites: ${data.installPrerequisites}  \n\n
  ${data.installation.split(endOfLineSymbol).map(element => element.trim()).join("  \n\n")}
## Usage
  ${data.usage.split(endOfLineSymbol).map(element => element.trim()).join("  \n\n")}
${renderLicenseSection(data.license)}
## Contributing
  1. Fork the repository.  
  2. Create a new branch: ${"```"} git checkout -b feature/branch-name ${"```"}  
  3. Make your changes.  
  4. Submit a pull request.
## Tests
  ${data.testSteps.split(endOfLineSymbol).map(element => element.trim()).join("  \n\n")}
## Questions
  For any questions, contact here:  
  ${data.autherName}: ${data.email}  
  GitHub: [${data.GHUsername}](https://github.com/${data.GHUsername})  
`;
}

export default generateMarkdown;
