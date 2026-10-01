# Student Management System

A full-stack Student Management System developed using React.js, Express.js, Node.js and MySQL.

## Project Description

This project allows users to manage student information through a simple web application. Users can add, view, edit and delete student records. The application also provides student search and gender filtering features.

The project was developed as part of the CS3301 – Full Stack Development CIE-2 React Mini Project.

## Technologies Used

### Frontend

* React.js
* React Router
* Axios
* Bootstrap
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js
* CORS

### Database

* MySQL

## Main Features

* Add a new student
* View all students
* View individual student details
* Edit student information
* Delete student records
* Search students by name
* Filter students by gender
* Display total number of students
* Responsive user interface
* React Router navigation
* REST API communication between frontend and backend

## Project Structure

```text
react_express_mysql_full_stack_application
│
├── client
│   ├── public
│   ├── src
│   │   ├── elements
│   │   │   ├── Home.jsx
│   │   │   ├── Create.jsx
│   │   │   ├── Edit.jsx
│   │   │   ├── Read.jsx
│   │   │   ├── StudentInfo.jsx
│   │   │   └── ProjectInfo.jsx
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## React Concepts Implemented

The project demonstrates the following React concepts:

* Functional components
* Class component
* Parent-child component relationship
* Props
* `useState`
* `useEffect`
* Event handling
* Form handling
* React Router
* Axios API calls
* Conditional rendering
* List rendering using `map()`

## Application Routes

| Route       | Purpose                    |
| ----------- | -------------------------- |
| `/`         | Student list and dashboard |
| `/create`   | Add a new student          |
| `/read/:id` | View student details       |
| `/edit/:id` | Edit student details       |

## Backend API

| Method | Endpoint           | Purpose          |
| ------ | ------------------ | ---------------- |
| POST   | `/add_user`        | Add a student    |
| GET    | `/students`        | Get all students |
| GET    | `/get_student/:id` | Get one student  |
| POST   | `/edit_user/:id`   | Update a student |
| DELETE | `/delete/:id`      | Delete a student |

## Database Setup

Create the database and table in MySQL:

```sql
CREATE DATABASE students;

USE students;

CREATE TABLE student_details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    age INT,
    gender VARCHAR(20)
);
```

## How to Run the Project

### 1. Start MySQL

Make sure the MySQL server is running.

The project uses the `students` database and `student_details` table.

### 2. Start the Backend

Open Command Prompt and run:

```cmd
cd C:\Users\Mahendra\STUDCRUD\react_express_mysql_full_stack_application\server
npm install
npm start
```

The backend runs on:

```text
http://localhost:5000
```

Expected server output:

```text
listening on port 5000
MySQL connected successfully
```

### 3. Start the Frontend

Open another Command Prompt window:

```cmd
cd C:\Users\Mahendra\STUDCRUD\react_express_mysql_full_stack_application\client
npm install
npm start
```

The React application runs on:

```text
http://localhost:3000
```

## Application Flow

```text
User
  ↓
React Frontend
  ↓
Axios
  ↓
Express.js API
  ↓
MySQL Database
  ↓
Express.js API
  ↓
React Frontend
```

## Modifications and Enhancements

The project was enhanced with additional features beyond the basic student CRUD functionality.

### 1. Gender Filter

A gender filter was added to the student list. Users can select:

* All
* Male
* Female

The displayed student list updates according to the selected gender.

### 2. Student Count Component

A separate `StudentInfo` component was created to display the total number of students.

This demonstrates parent-to-child communication using props.

### 3. Class Component

A `ProjectInfo` class component was added to demonstrate the use of a React class component along with functional components.

### 4. Responsive Interface

Bootstrap classes were used to make the application easier to use on different screen sizes.

## Learning Outcomes

Through this project, I learned how a React frontend communicates with an Express.js backend and how the backend interacts with a MySQL database.

I also gained practical understanding of React components, props, state, hooks, routing, forms, API calls and CRUD operations.

## Tutorial Reference

The project was developed with reference to a full-stack React, Express.js, Node.js and MySQL tutorial and was modified to include additional functionality.

## GitHub Repository

GitHub repository:

https://github.com/pallepraneetha076/student-management-system

## Author

**Praneetha**

CS3301 – Full Stack Development