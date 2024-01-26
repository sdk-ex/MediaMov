/* error.js : assists the index with error messages */

const msg = require("./messages.json");
const err = msg["err-msg"];

fetch(msg)
 .then(response => response.json())
 .then(data => {
    // Now you can access your strings using the keys
    var addressErr = console.log(err["missing-addr"]);
    var typeErr = console.log(err["invalid-type"]);
    var urlErr = console.log(err["invalid-url"]);
});
