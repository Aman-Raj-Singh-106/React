import { useState } from "react";
import StudentArray from "./Array";

const Practice = () => {
  const[data]=useState(StudentArray);
  return (
    <>
      {/* <h1>Organized <b>By</b></h1>
      <div class="box">
        <h2>Indian Institute of Chemical Engineers, Annamalai Regional Center</h2>
        <p>at</p>
        <span style={{backgroundColor:"yellow"}}>DST-FIST Sponsored</span>
        <p>department Of Chemical Engineering</p>
        <p>Faculty of engineering & technology, Annamalai university Annamalainagar-608002,</p>
        <p>Tamilnadu, India</p>
      </div> */}



      {/* {StudentArray.map((student, index) => (
        <div key={index} className="student-card">
          <h2>{student.id}</h2>
          <h2>{student.name}</h2>
          <p>Age: {student.age}</p>
          <p>Grade: {student.grade}</p>
        </div>
      ))} */}

      <h1>Student Information</h1>
      <p>List of students with their details</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Father Name</th>
            <th>Mother Name</th>
            <th>Course</th>
            <th>Moblie No.</th>
            <th>Year</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.fatherName}</td>
              <td>{student.motherName}</td>
              <td>{student.course}</td>
              <td>{student.mobileNo}</td>
              <td>{student.year}</td>
              <td>{student.status === 0 ? <span style={{color:"green"}}>Active</span> : <span style={{color:"red"}}>Inactive</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>


      {/* <h1>BootStrap</h1> */}
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1 col-md-6 col-sm-12 first"></div>
        </div>
      </div> */}
    </>
  );
};
export default Practice;