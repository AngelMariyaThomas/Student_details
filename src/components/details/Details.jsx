// import React, { useEffect } from "react";
// import './Details.scss'
// import { useSelector, useDispatch } from "react-redux";

// import { fetchStudents } from "../redux/DetailsSlice";
// import Navbar from "../navbar/Navbar";

// const Details = () => {
//   const students = useSelector((state) => state.Details.data);
  
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchStudents());
//   }, [dispatch]);


//   return (
    
//     <div className="container">
//       <Navbar/>

  

// <table>
//   <thead>
//     <tr>
//       <th>Name</th>
//       <th>Date of Birth</th>
//       <th>Grades</th>
//       <th>Years Old</th>
//     </tr>
//   </thead>
//   <tbody>
//     {students.map((student) => (
//       <tr key={student.id}>
//         <td>{student.name}</td>
//         <td>{student.dob}</td>
//         <td>{student.grades}</td>
//         <td>{student.yearsOld}</td>
//       </tr>
//     ))}
//   </tbody>
// </table>
// </div>
//   );
// };

// export default Details;
import React, { useEffect, useState } from "react";
import './Details.scss'
import { useSelector, useDispatch } from "react-redux";

import { fetchStudents } from "../redux/DetailsSlice";
import Navbar from "../navbar/Navbar";

const Details = () => {
  const students = useSelector((state) => state.Details.data);

  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  const handleSearch = () => {
    const filteredStudents = students.filter((student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredStudents);
  };

  return (
    <div className="container">
      <Navbar />

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name"
      />

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
          {(searchResults.length > 0 ? searchResults : students).map(
            (student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.dob}</td>
                <td>{student.grades}</td>
                <td>{student.yearsOld}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
