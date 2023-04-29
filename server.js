// Packages
const inquirer = require("inquirer");
const mysql = require("mysql2");

const mainMenu = () => {
  console.clear();
  console.log(
    "┏━━━┓━━━━━━━━┏┓━━━━━━━━━━━━━━━━━━━━━━┏━━━━┓━━━━━━━━━━━━┏┓━━━━━━━━━"
  );
  console.log(
    "┃┏━━┛━━━━━━━━┃┃━━━━━━━━━━━━━━━━━━━━━━┃┏┓┏┓┃━━━━━━━━━━━━┃┃━━━━━━━━━"
  );
  console.log(
    "┃┗━━┓┏┓┏┓┏━━┓┃┃━┏━━┓┏┓━┏┓┏━━┓┏━━┓━━━━┗┛┃┃┗┛┏━┓┏━━┓━┏━━┓┃┃┏┓┏━━┓┏━┓"
  );
  console.log(
    "┃┏━━┛┃┗┛┃┃┏┓┃┃┃━┃┏┓┃┃┃━┃┃┃┏┓┃┃┏┓┃━━━━━━┃┃━━┃┏┛┗━┓┃━┃┏━┛┃┗┛┛┃┏┓┃┃┏┛"
  );
  console.log(
    "┃┗━━┓┃┃┃┃┃┗┛┃┃┗┓┃┗┛┃┃┗━┛┃┃┃━┫┃┃━┫━━━━━┏┛┗┓━┃┃━┃┗┛┗┓┃┗━┓┃┏┓┓┃┃━┫┃┃━"
  );
  console.log(
    "┗━━━┛┗┻┻┛┃┏━┛┗━┛┗━━┛┗━┓┏┛┗━━┛┗━━┛━━━━━┗━━┛━┗┛━┗━━━┛┗━━┛┗┛┗┛┗━━┛┗┛━"
  );
  console.log(
    "━━━━━━━━━┃┃━━━━━━━━━┏━┛┃━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  );
  console.log(
    "━━━━━━━━━┗┛━━━━━━━━━┗━━┛━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  );
  console.log(".::MAIN MENU::.");
  return inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Quit",
        ],
      },
    ])
    .then((mainMenuSelect) => {
      switch (mainMenuSelect) {
        case "View All Employees":
          console.clear();
          // Function to view employees
          break;
        case "Add Employee":
          console.clear();
          // Function to add employee
          break;
        case "Update Employee Role":
          console.clear();
          // Function to update employee role
          break;
        case "View All Roles":
          console.clear();
          // Function to view roles
          break;
        case "Add Role":
          console.clear();
          // Function to add role
          break;
        case "View All Departments":
          console.clear();
          // Function to view departments
          break;
        case "Add Department":
          console.clear();
          // Function to add department
          break;
        case "Quit":
          console.clear();
          // Function to quit
          break;
      }
    });
};
