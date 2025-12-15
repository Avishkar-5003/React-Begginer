import React, { useState } from 'react'

function Student() {
  const [student,setStudent] =useState({
    roll:0,
    firstName:"",
    lastName:"",
    marks:0,
    
  });
   
  const [studentData,setStudentData] =useState([])

  const inputHandler = (e) => {
    const{ name , value } =e.target;
    setStudent((oldStudent) => ({ ...oldStudent, [name]: value}))
  };
    
    const register =() =>{
      setStudentData((oldData) => ([...oldData , student]))
      console.log(setStudentData);
      reset();
      
    }
    const reset = () =>{
      setStudent({
         roll:0,
         firstName:"",
         lastName:"",
         marks:0,

      })
    };
    const deleteStudent = (index) =>{
      let remaningStudents = studentData.filter((std , i) => i != index);
      setStudentData(remaningStudents);
      alert('student deleted...')
    }
    const showStudent = (std) => {
      setStudent(std);
      
    }

  return (
   <>
        <h1>Student Registration</h1>
        <from>
          <label>Roll No</label>
          <input type='number' name='roll' value={student.roll} onChange={inputHandler}/>

          <label>First name</label>
          <input type='text' name='firstName' value={student.firstName} onChange={inputHandler}/>
          
          <label>Last Name</label>
          <input type='text' name='lastName' value={student.lastName} onChange={inputHandler}/>

          <label>Marks</label>
          <input type='number' name='marks' value={student.marks} onChange={inputHandler}/>

          <br/>
          <button onClick={register}>Register</button>
        </from>
        <br/>
        {
          studentData.length>0?
          (
            <table>
          <tr>
            <th>#</th>
            <th>Roll No </th>
            <th>First Name </th>
            <th>Last Name </th>
            <th>Marks </th>
            <th>Action </th>
            <th>Action </th>
           
          </tr>
          
          <tbody>
            {
              studentData.map ((std,index) => (
                <tr index ={index}>
                  <td> {index+1}</td>
                  <td> {std.roll}</td>
                  <td> {std.firstName}</td>
                  <td> {std.lastName}</td>
                  <td> {std.marks}</td>
                  <td><button type='button' onClick={() => deleteStudent(index)}>Delete</button></td>
                  <td><button type='button' onClick={() => showStudent(std)}>Show</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>

          ):(<h1>Student not Registered</h1>
          )
        }

        
     </>   
  )
}

export default Student