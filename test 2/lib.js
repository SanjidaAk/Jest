// Get user input fields
const getUserInputs = function () {
  const useridInput = document.querySelector("input#userid");
  const titleInput = document.querySelector("input#title");
  const articleInput = document.querySelector("textarea#article");

  return {
    useridInput,
    titleInput,
    articleInput,
  };
};

// Validate input
const validateInput = function (value, required, isNumber) {
  if (!value) {
    return false;
  }

  if (required && value.toString().trim().length === 0) {
    return false;
  }

  if (isNumber && isNaN(+value)) {
    return false;
  }

  return true;
};

// Generate final result
const generateResult = function (userid, title) {
  return `User ID: ${userid} created an article titled ${title}`;
};

// Check and generate
const checkAndGenerate = async function(userIdValue, titleValue, articleValue) {
  // Check validation
  if (
    !validateInput(userIdValue, true, true) ||
    !validateInput(titleValue, true, false) ||
    !validateInput(articleValue, true, false)
  ) {
    return false;
  }

  // Post to server
  const postedResponse = await postToServer({
    title: titleValue,
    body: articleValue,
    userId: userIdValue,
  });

  const {userId, title} = postedResponse;
  
  // Generate output
  const resultText = generateResult(userId, title);
  return resultText;
};

// Create a new DOM element and return it
const createElement = function (type, text, className = null) {
  const newElement = document.createElement(type);
  if (className) newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

module.exports = { getUserInputs, validateInput, generateResult, createElement, checkAndGenerate };
