// Packages
const db = require("../db/connection.js");
const consoleTable = require("console.table");

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
    const sql = `INSERT INTO department (dept_name) VALUES ("${this.dept_name}")`;
    return db.promise().query(sql);
  }
}

module.exports = Department;
