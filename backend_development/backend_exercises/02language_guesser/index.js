const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const input = process.argv[2];
const langCode = franc(input);

if (langCode === 'und') {
  console.log("Sorry, no matches found. Please try again.".red)
} else {
  const language = langs.where("3", langCode);
  if (language) {
    console.log(`Our best guess is ${language.name}.`.green);
  } else {
    console.log(`Sorry, couldn't find a language for: ${langCode}`.red)
  }
}

