# 🚀 Personal Portfolio (React)

Welcome to my personal portfolio project!
This app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and built with React.
It's completely open-source — feel free to use, customize, or contribute!

---

## 📸 Overview

This portfolio showcases my skills and projects as a Frontend Developer. It includes a dynamic layout, interactive navigation, and a modular component-based structure using **React** and **Context API**.

---

## 🧽 Page Navigation with React Context

Instead of using external routing libraries, this project implements page navigation with **React Context**.
When a user clicks a navigation item, the active page is updated through a shared context and re-rendered automatically — no prop drilling involved.

> ⚠️ **Note**:
> This is an **experimental feature**. For production, it's better to use:
>
> * [React Router](https://reactrouter.com/)
> * [Next.js Routing](https://nextjs.org/docs/routing/introduction)

---

## 🛠 Tech Stack

* React
* React Context API
* JavaScript (ES6+)
* Tailwind CSS
* Create React App

---

## 📁 Project Structure

```
src/
├── components/       # Shared UI components
├── context/          # Page navigation context
├── data/             # Static data
├── App.js
└── index.js
```

---

## 📦 Installation

To run this project locally:

```bash
# Clone the repo
git clone https://github.com/JosMigue/portfolio-react.git
cd portfolio-react

# Install dependencies
npm install

# Start the development server
npm start
```

Visit `http://localhost:3000` in your browser.

---

## 🧹 Customization

Feel free to modify any part of this project to suit your needs. You can update content, styles, and components to make it your own.

---

## 🧪 Available Scripts

In the project directory, you can run:

* `npm start` – Runs the app in development mode.
* `npm test` – Launches the test runner in interactive watch mode.
* `npm run build` – Builds the app for production.
* `npm run eject` – Copies CRA config files into your project (**irreversible**).

---

## 📚 Learn More

* [React Documentation](https://reactjs.org/)
* [Create React App Docs](https://facebook.github.io/create-react-app/docs/getting-started)

---

## ⚖️ License

This project is open source and free to use or modify for any purpose.

---

## 🤝 Contributing

Pull requests are welcome!
If you have suggestions or ideas, feel free to open an issue or contribute to this repository.
