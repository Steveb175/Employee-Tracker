// Packages
const db = require("../db/connection.js");
const consoleTable = require("console.table");
const inquirer = require("inquirer");

// Department Class
class Department {
  constructor(id, dept_name) {
    (this.id = id), (this.dept_name = dept_name);
  }
  getAll() {
    const sql = `SELECT * FROM department`;
    return db
      .promise()
      .query(sql)
      .then(([rows]) => {
        return rows;
      });
  }
  // Add Department function
  addDept() {
    const sql = `INSERT INTO department (dept_name) VALUES (?)`;
    return db.promise().execute(sql, [this.dept_name]);
  }
}

// View Department Main Menu function
const viewDept = () => {
  const department = new Department();
  department.getAll().then((rows) => {
    console.log(" ~ ~ ALL DEPARTMENTS ~ ~");
    console.table(rows);
  });
};

module.exports = { Department, viewDept };
