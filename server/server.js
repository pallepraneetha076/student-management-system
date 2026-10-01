const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 5000;

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Student@123",
  database: "students",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.log("MySQL connection failed:", err.message);
  } else {
    console.log("MySQL connected successfully");
  }
});

// ADD STUDENT
app.post("/add_user", (req, res) => {
  const sql =
    'INSERT INTO student_details (name, email, age, gender) VALUES (?, ?, ?, ?)';

  const values = [
    req.body.name,
    req.body.email,
    req.body.age,
    req.body.gender,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log("Add student error:", err.message);
      return res.status(500).json({
        message: "Unable to add student",
        error: err.message,
      });
    }

    return res.json({
      success: "Student added successfully",
      id: result.insertId,
    });
  });
});

// GET ALL STUDENTS
app.get("/students", (req, res) => {
  const sql = "SELECT * FROM student_details";

  db.query(sql, (err, result) => {
    if (err) {
      console.log("Get students error:", err.message);
      return res.status(500).json({
        message: "Server error",
        error: err.message,
      });
    }

    return res.json(result);
  });
});

// GET ONE STUDENT
app.get("/get_student/:id", (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM student_details WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log("Get student error:", err.message);
      return res.status(500).json({
        message: "Server error",
        error: err.message,
      });
    }

    return res.json(result);
  });
});

// EDIT STUDENT
app.post("/edit_user/:id", (req, res) => {
  const id = req.params.id;

  const sql =
    "UPDATE student_details SET name=?, email=?, age=?, gender=? WHERE id=?";

  const values = [
    req.body.name,
    req.body.email,
    req.body.age,
    req.body.gender,
    id,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log("Edit student error:", err.message);
      return res.status(500).json({
        message: "Unable to update student",
        error: err.message,
      });
    }

    return res.json({
      success: "Student updated successfully",
    });
  });
});

// DELETE STUDENT
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM student_details WHERE id=?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log("Delete student error:", err.message);
      return res.status(500).json({
        message: "Unable to delete student",
        error: err.message,
      });
    }

    return res.json({
      success: "Student deleted successfully",
    });
  });
});

// START SERVER
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});