// Packages
const db = require("../db/connection.js");
const consoleTable = require("console.table");

// Employee class
class Employee {
  constructor(id, first_name, last_name, role_id, manager_id) {
    (this.id = id),
      (this.first_name = first_name),
      (this.last_name = last_name),
      (this.role_id = role_id),
      (this.manager_id = manager_id);
  }
  getAll() {
    const sql = `SELECT * FROM employee`;
    return db
      .promise()
      .query(sql)
      .then(([row]) => {
        return row;
      });
  }
  // Add Employee Function
  addEmployee() {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
    const params = [
      this.first_name,
      this.last_name,
      this.role_id,
      this.manager_id,
    ];
    return db.promise().query(sql, params);
  }
  // Get Employee by id function
  getEmployeeById() {
    const sql = `SELECT * FROM employee WHERE id = ?`;
    return db
      .promise()
      .query(sql)
      .then(([rows]) => {
        return rows;
      });
  }
  // Update Employee function
  updateEmployee() {
    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
    const params = [this.role_id, this.id];
    return db
      .promise()
      .query(sql, params)
      .then(([rows]) => {
        return rows;
      });
  }
}

const viewEmployees = () => {
  const employee = new Employee();
  employee.getAll().then((rows) => {
    console.log(" ~ ~ ALL EMPLOYEES ~ ~");
    console.table(rows);
  });
};

module.exports = { Employee, viewEmployees };
