import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import StudentInfo from "./StudentInfo";
import ProjectInfo from "./ProjectInfo";

function Home() {
  const [data, setData] = useState([]);
  const [deleted, setDeleted] = useState(true);
  const [search, setSearch] = useState("");
  const [genderFilter, setGenderFilter] = useState("All");

  useEffect(() => {
    if (deleted) {
      setDeleted(false);

      axios
        .get("/students")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [deleted]);

  function handleDelete(id) {
    if (window.confirm("Delete this student?")) {
      axios
        .delete(`/delete/${id}`)
        .then(() => {
          setDeleted(true);
        })
        .catch((err) => console.log(err));
    }
  }

  const filteredStudents = data.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGender =
      genderFilter === "All" || student.gender === genderFilter;

    return matchesSearch && matchesGender;
  });

  return (
    <div className="container-fluid bg-light min-vh-100 p-4">
      <div className="container">

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Student Management System</h2>

          <Link className="btn btn-success" to="/create">
            + Add Student
          </Link>
        </div>

        {/* CLASS COMPONENT */}
        <ProjectInfo />

        {/* CHILD COMPONENT + PROPS */}
        <StudentInfo totalStudents={data.length} />

        {/* SEARCH AND FILTER */}
        <div className="card p-3 mb-4 shadow-sm">
          <div className="row">

            <div className="col-md-8 mb-3 mb-md-0">
              <label className="form-label">
                Search Student
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Search by student name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">
                Filter by Gender
              </label>

              <select
                className="form-select"
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

          </div>
        </div>

        {/* STUDENT TABLE */}
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover">

            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id}>

                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.age}</td>
                    <td>{student.gender}</td>

                    <td>
                      <Link
                        className="btn btn-info btn-sm mx-1"
                        to={`/read/${student.id}`}
                      >
                        Read
                      </Link>

                      <Link
                        className="btn btn-warning btn-sm mx-1"
                        to={`/edit/${student.id}`}
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => handleDelete(student.id)}
                        className="btn btn-danger btn-sm mx-1"
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No students found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}

export default Home;