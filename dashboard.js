import React from 'react';
import './App.css';

function App() {
  const employees = [
    { rank: 1, name: 'Rakesh Sharma', designation: 'UI/UX Designer', hoursWorked: '7(42)', changes: '▲ 1.5 hrs' },
    { rank: 2, name: 'Ankita Thakur', designation: 'HR Recruiter', hoursWorked: '7(41)', changes: '▼ 1.5 hrs' },
    { rank: 3, name: 'Sarah Yadav', designation: 'Product Manager', hoursWorked: '7(40)', changes: '▲ 1.5 hrs' },
    { rank: 4, name: 'Harsha Shivhare', designation: 'Designer', hoursWorked: '7(37)', changes: '▲ 1.5 hrs' },
    { rank: 5, name: 'Vanhi Rai', designation: 'Video Editor', hoursWorked: '7(37)', changes: '▼ 1.5 hrs' },
    { rank: 6, name: 'Bhanu Sharma', designation: 'Business Analyst', hoursWorked: '7(32)', changes: '▼ 1.5 hrs' },
    { rank: 8, name: 'Sunil Yadav', designation: 'Developer', hoursWorked: '7(24)', changes: '▲ 1.5 hrs' },
    { rank: 9, name: 'Akash Roy', designation: 'Business Analyst', hoursWorked: '7(21)', changes: '▼ 1.5 hrs' },
    { rank: 10, name: 'Rohit Soni', designation: 'Developer', hoursWorked: '7(20)', changes: '▼ 1.5 hrs' },
    { rank: 11, name: 'Suraj Chauhan', designation: 'Developer', hoursWorked: '7(18)', changes: '▼ 1.5 hrs' },
  ];

  return (
    <div className="container">
      <h1>Employees Activity Dashboard</h1>
      <div className="dashboard">
        <table className="table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Designation</th>
              <th>No. of hours worked</th>
              <th>Changes</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.rank}>
                <td>{employee.rank}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.hoursWorked}</td>
                <td>{employee.changes}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="employee-of-the-month">
          <h2>Employee of the Month</h2>
          <div className="employee-info">
            <img src="employee.png" alt="Employee" />  
            <h3>Rakesh Sharma</h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </div>
      <p className="date">March 30, 2024 09:36 AM</p>
    </div>
  );
}

export default App;