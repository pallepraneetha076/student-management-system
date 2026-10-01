import React, { Component } from "react";

class StudentInfo extends Component {
  render() {
    return (
      <div className="alert alert-primary">
        <h5>Student Management System</h5>
        <p className="mb-0">
          Total Students: <strong>{this.props.totalStudents}</strong>
        </p>
      </div>
    );
  }
}

export default StudentInfo;