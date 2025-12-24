// checkPassword.cjs
const bcrypt = require("bcryptjs");

// The hash you copied from the previous step
const hashedPassword = "$2b$10$ZXAArai1UzPU6LX6PRHnA.vJVU1OCGsv8jSVn3BnLcNuA7EnyLoGC";

// The password you want to check
const inputPassword = "789456123";

bcrypt.compare(inputPassword, hashedPassword, (err, result) => {
  if (err) throw err;

  if (result) {
    console.log("✅ Password matches!");
  } else {
    console.log("❌ Password does NOT match!");
  }
});
