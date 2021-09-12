const Scratch = require("scratch3-api");

async function main() {
  let session = await Scratch.UserSession.create(window.prompt("Enter username:", ""), window.prompt("Enter password:", ""));
}

main();


localStorage.setItem("sessionid", session);
