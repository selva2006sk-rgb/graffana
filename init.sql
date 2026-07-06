CREATE DATABASE company;

USE company;

CREATE TABLE employee(

id INT PRIMARY KEY AUTO_INCREMENT,

name VARCHAR(50)

);

INSERT INTO employee(name)

VALUES

('John'),

('David'),

('Steve');
