# MOD7 Trivia Quiz App

A responsive single-page trivia quiz built with React, using the Open Trivia Database API.

## 🚀 Features

- Home form to enter name, select category and difficulty
- Dynamically fetches questions based on form input
- Randomized multiple choice answers
- Result screen with feedback and replay option
- State-driven conditional rendering

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- Open Trivia DB API (https://opentdb.com/)
- Vite / Create React App (depending on setup)

## 🖥️ How to Run

```bash
npm install
npm start

📦 API Example
https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple

✍️ Author
James Jennings
@slackerhacker21


---

## 🎯 **`.gitignore` File (React App)**

Make sure this exists in your project root as `.gitignore`:

```gitignore
# dependencies
/node_modules

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDEs
.vscode
.idea

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

git add .gitignore README.md
git commit -m "Add project summary and .gitignore"
git push

