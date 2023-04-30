// Packages
const inquirer = require("inquirer");
const mysql = require("mysql2");
const { Department, viewDept } = require("./lib/department");
const { Employee, viewEmployees } = require("./lib/employee");
const { Role, viewRoles } = require("./lib/role");
const { db } = require("./db/connection.js");

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
  console.log("MAIN MENU");
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
      switch (mainMenuSelect.action) {
        case "View All Employees":
          console.clear();
          // Function to view employees
          viewEmployees();
          inquirer
            .prompt([
              {
                type: "list",
                name: "choice",
                message: "What would you like to do?",
                choices: ["Return to Main Menu", "Quit"],
              },
            ])
            .then((answers) => {
              if (answers.choice === "Return to Main Menu") {
                mainMenu();
              } else {
                process.exit();
              }
            });
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
          viewRoles();
          inquirer
            .prompt([
              {
                type: "list",
                name: "choice",
                message: "What would you like to do?",
                choices: ["Return to Main Menu", "Quit"],
              },
            ])
            .then((answers) => {
              if (answers.choice === "Return to Main Menu") {
                mainMenu();
              } else {
                process.exit();
              }
            });
          break;
        case "Add Role":
          console.clear();
          // Function to add role
          break;
        case "View All Departments":
          console.clear();
          // Function to view departments
          viewDept();
          inquirer
            .prompt([
              {
                type: "list",
                name: "choice",
                message: "What would you like to do?",
                choices: ["Return to Main Menu", "Quit"],
              },
            ])
            .then((answers) => {
              if (answers.choice === "Return to Main Menu") {
                mainMenu();
              } else {
                process.exit();
              }
            });
          break;
        case "Add Department":
          console.clear();
          // Function to add department
          break;
        case "Quit":
          console.clear();
          // Function to quit
          process.exit();
          break;
      }
    });
};

mainMenu();

module.exports = { mainMenu };
