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

const viewTotalSalariesByDepartment = () => {
  const sql = `
      SELECT 
        department.dept_name,
        SUM(role.salary) AS total_salary
      FROM 
        employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.dept_id = department.id
      GROUP BY
        department.dept_name;
      `;
  return db
    .promise()
    .query(sql)
    .then(([rows]) => {
      console.log(" ~ ~ TOTAL SALARIES BY DEPARTMENT ~ ~");
      console.table(rows);
    });
};

module.exports = { Department, viewDept, viewTotalSalariesByDepartment };
