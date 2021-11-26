const { numberInput, textInput } = require("./textInput/textInput");
const { selectInput } = require("./selectInput/selectInput");
const { passwordInput } = require("./passwordInput/passwordInput");

const text = (title) => {
  return textInput(title);
};

const numeric = (title, errorMessage) => {
  return numberInput(title, errorMessage);
};

const select = (dataSelect = [], title = "") => {
  return selectInput(dataSelect, title);
};

const password = (title) => {
  return passwordInput(title);
};

module.exports = {
  text,
  numeric,
  select,
  password,
};
