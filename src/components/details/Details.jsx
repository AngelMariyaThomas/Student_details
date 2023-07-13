import React from "react";
import "./Details.scss";
import useDetails from "../hooks/useDetails";
import Search from "../search/Search";
import Sort from "../sort/Sort";
import Navbar from "../navbar/Navbar";


const Details = () => {
  const {
    searchTerm,
    handleSearch,   
    sortOrder,
    handleSortOrder,
    filteredStudents,
    handleDeleteStudent
    
  } = useDetails();

  return (
    <>
  
      <Navbar/>
      <br/>

  <Search searchTerm={searchTerm} handleSearch={handleSearch}/>
       <Sort sortOrder={sortOrder} handleSortOrder={handleSortOrder}/>
       
     <br/>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Grades</th>
              <th>Years Old</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.dob}</td>
                <td>{student.grades}</td>
                <td>{student.yearsOld}</td>
                <td>
                <button onClick={() => handleDeleteStudent(student.id)}>
                  Delete
                </button>
              </td>
             
              </tr>
            ))}
          </tbody>
        </table>
        <br/><br/>
      </>

  );
};

export default Details;