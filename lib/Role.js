// Packages
const db = require("../db/connection.js");
const consoleTable = require("console.table");

// Role class
class Role {
  constructor(id, title, salary, dept_id) {
    (this.id = id),
      (this.title = title),
      (this.salary = salary),
      (this.dept_id = dept_id);
  }

  getAll() {
    const sql = `SELECT * FROM role`;
    return db
      .promise()
      .query(sql)
      .then(([rows]) => {
        return rows;
      });
  }

  // Add Role Function
  addRole() {
    const sql = `INSERT INTO role (title, salary, dept_id) VALUES (?, ?, ?)`;
    const params = [this.title, this.salary, this.dept_id];
    return db.promise().query(sql, params);
  }

  // Get Role by id function
  getRoleById() {
    const sql = `SELECT * FROM role WHERE id = ?`;
    return db
      .promise()
      .query(sql, this.id)
      .then(([rows]) => {
        return rows;
      });
  }

  // Update Role function
  updateRole() {
    const sql = `UPDATE role SET title = ?, salary = ?, dept_id = ? WHERE id = ?`;
    const params = [this.title, this.salary, this.dept_id, this.id];
    return db
      .promise()
      .query(sql, params)
      .then(([rows]) => {
        return rows;
      });
  }

  // Delete Role function
  deleteRole() {
    const sql = `DELETE FROM role WHERE id = ?`;
    return db
      .promise()
      .query(sql, this.id)
      .then(([rows]) => {
        return rows;
      });
  }
}

const viewRoles = () => {
  const role = new Role();
  role.getAll().then((rows) => {
    console.log(" ~ ~ ALL ROLES ~ ~");
    console.table(rows);
  });
};

module.exports = { Role, viewRoles };
