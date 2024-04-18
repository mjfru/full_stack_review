//? After npm i bcrypt:
const bcrypt = require('bcrypt');
//? Generating a salt:
const hashPassword = async (password) => {
  // Number of 'rounds' is passed as an argument
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);
  console.log(salt);
  console.log(hash);
}


//? What happens when we actually want to login? -- .compare()!
const login = async (password, hashedPassword) => {
  const result = await bcrypt.compare(password, hashedPassword);
  if (result) {
    console.log("Accepted! Welcome.")
  } else {
    console.log("Something went wrong.")
  }
}

// hashPassword('monkey');
//? Success
login('monkey', '$2b$12$9r.YaYw4WiFoeg9o3lBywOZAxA2WDiaHYEpIHR3L1Uay3N4oDWs5i')
//? Failure (one character missing from above)
login('monkey', '$2b$12$9r.YaYw4WiFoeg9o3lBywOZAxA2WDiaHYEpIHR3L1Uay3N4oDWsi')

//? A shorter way to do all of the above:
// brcypt.hash(plainPW, saltRounds, function(err, hash)) {};
const hashPassword2 = async (password) => {
  const hash = await bcrypt.hash(password, 12);
  console.log(hash);
}

hashPassword2('monkey')