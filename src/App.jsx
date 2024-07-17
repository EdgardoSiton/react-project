import React from "react";
import Student from "./components/Student";

const students = [
  {
    name: "Edgardo A.Siton",
    department: "Science",
    finalGrade: 85,
    status: "Pass",
  },
  {
    name: "SweetVenice Casia",
    department: "Arts",
    finalGrade: 92,
    status: "Pass",
  },
  {
    name: "Rodel Celis",
    department: "Commerce",
    finalGrade: 76,
    status: "Pass",
  },
  {
    name: "Darla Kayla Mayono Ipon",
    department: "Science",
    finalGrade: 88,
    status: "Pass",
  },
  {
    name: "Aeron VillaFuerte",
    department: "Arts",
    finalGrade: 67,
    status: "Pass",
  },
  {
    name: "Chisler Uy",
    department: "Commerce",
    finalGrade: 90,
    status: "Pass",
  },
  {
    name: "Jie Navvarro",
    department: "Science",
    finalGrade: 83,
    status: "Pass",
  },
  {
    name: "David SalonPas",
    department: "Arts",
    finalGrade: 78,
    status: "Pass",
  },
  {
    name: "Sara Geronimos",
    department: "Commerce",
    finalGrade: null,
    status: "Fail",
  },
  {
    name: "Doctor Strange",
    department: "Science",
    finalGrade: null,
    status: "Fail",
  },
];

const Students = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Student Names</th>
          <th>Department</th>
          <th>Final Grade</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <Student key={index} student={student} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default Students;
