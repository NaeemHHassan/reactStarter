import React, { Component } from "react";
import NavBar from "./NavBar";

class Students extends Component {
  state = {
    students: [
      {
        id: 10,
        name: "A"
      },
      {
        id: 11,
        name: "B"
      },
      {
        id: 12,
        name: "C"
      },
      {
        id: 13,
        name: "D"
      },
      {
        id: 10,
        name: "A"
      }
    ],
    totalStudent: ""
  };

  handleDelete = id => {
    const { students } = this.state;
    const index = students.indexOf(id);
    students.splice(index, 1);
    this.setState({ students });
  };
  render() {
    const { students } = this.state;
    return (
      <React.Fragment>
        <NavBar totalStudents={this.state.students.length}></NavBar>
        <table class="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map(std => (
              <tr>
                <td scope="row">{std.id}</td>
                <td>{std.name}</td>
                <td>
                  <button
                    onClick={() => {
                      this.handleDelete(std);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Students;
