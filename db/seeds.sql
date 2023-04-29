-- Department seeds
INSERT INTO department (dept_name)
VALUES
('Sales'),
('Marketing'),
('Engineering'),
('Finance'),
('Human Resources');

-- Role seeds
INSERT INTO role (title, salary, dept_id)
VALUES
('Sales Representative', 50000, 1),
('Marketing Manager', 80000, 2),
('Lead Software Engineer', 150000, 3),
('Software Engineer', 100000, 3),
('Lead Financial Analyst', 125000, 4),
('Financial Analyst', 75000, 4),
('HR Manager', 100000, 5),
('HR Coordinator', 60000, 5);

-- Employee seeds
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Luke', 'Skywalker', 1, 4),
('Leia', 'Organa', 2, NULL),
('Han', 'Solo', 3, NULL),
('R2', 'D2', 4, NULL),
('Obi-Wan', 'Kenobi', 5, NULL),
('Anakin', 'Skywalker', 1, 5),
('Padmé', 'Amidala', 2, 5),
('Lando', 'Calrissian', 3, NULL),
('Wedge', 'Antilles', 4, 3),
('Boba', 'Fett', 5, NULL),
('Mara', 'Jade', 6, 5),
('Mon', 'Mothma', 7, NULL),
('Jan', 'Dodonna', 8, 7),
('Admiral', 'Ackbar', 8, 7);