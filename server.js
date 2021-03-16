const express = require("express");

// const path = require("path");

// tells node we are creatin an express server
const app = express();

// port
const PORT = process.env.PORT || 3000;

// express handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// route
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listener
app.listen(PORT, () => {
  console.log(`APP LISTENING ON PORT ${PORT}`);
});
