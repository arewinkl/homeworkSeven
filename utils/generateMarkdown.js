// function to generate markdown for README
function generateMarkdown(data) {
  return `
  

# ${data.title}\n
![readmeGen](https://img.shields.io/github/languages/top/arewinkl/readmeGen?color=green&label=JavaScript)

---

## Description
${data.description}\n

---

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)
* [Contact](#contact)

---

## Installation\n
${data.installation}\n

---

## Usage\n
${data.usage}\n

---

## License\n
${data.license}\n

Licensed under the [MIT License](LICENSE).

---

## Contributors\n
${data.contributors}\n

---

## Test\n
${data.test}\n

---

## Questions\n
${data.questions}\n

---

## Contact\n
If you would like to contact me:\n
GitHub: ${data.github}\n
Email: ${data.email}\n

`;
}

module.exports = generateMarkdown;
