
// import React, { useEffect, useState } from "react";
// import "./Details.scss";
// import { useSelector, useDispatch } from "react-redux";

// import { fetchStudents } from "../redux/DetailsSlice";
// import Navbar from "../navbar/Navbar";

// const Details = () => {
//   const allStudents = useSelector((state) => state.Details.data);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc"); // Default sort order is ascending

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchStudents());
//   }, [dispatch]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSortOrder = (e) => {
//     setSortOrder(e.target.value);
//   };

//   const sortedStudents = [...allStudents].sort((a, b) => {

//     const dateA = new Date(a.dob);
//     const dateB = new Date(b.dob);

//     if (sortOrder === "asc") {
//       return dateA - dateB;
//     } else {
//       return dateB - dateA;
//     }
//   });

//   const filteredStudents = sortedStudents.filter((student) =>
//     student.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="main">
//       <Navbar/>
//     <div className="container">
     

//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search by name"
//           value={searchTerm}
//           onChange={handleSearch}
//         />

//         <select value={sortOrder} onChange={handleSortOrder}>
//           <option value="asc">DOB IN Ascending</option>
//           <option value="desc">DOB IN Descending</option>
//         </select>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Date of Birth</th>
//             <th>Grades</th>
//             <th>Years Old</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredStudents.map((student) => (
//             <tr key={student.id}>
//               <td>{student.name}</td>
//               <td>{student.dob}</td>
//               <td>{student.grades}</td>
//               <td>{student.yearsOld}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//     </div>
//   );
// };

// export default Details;


import React from "react";
import "./Details.scss";
import useDetails from "../hooks/useDetails";
import Navbar from "../navbar/Navbar";

const Details = () => {
  const {
    searchTerm,
    handleSearch,
    sortOrder,
    handleSortOrder,
    filteredStudents,
  } = useDetails();

  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearch}
          />

          <select value={sortOrder} onChange={handleSortOrder}>
            <option value="asc">DOB IN Ascending</option>
            <option value="desc">DOB IN Descending</option>
          </select>
        </div>

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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
