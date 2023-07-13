import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteStudent, fetchStudents } from "../redux/DetailsSlice";




const useDetails = () => {
  const allStudents = useSelector((state) => state.Details.data);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); 



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortOrder = (e) => {
    setSortOrder(e.target.value);
  };

const handleDeleteStudent=(studentId)=>{
    dispatch(deleteStudent(studentId))
}


  const sortedStudents = [...allStudents].sort((a, b) => {
    const dateA = new Date(a.dob);
    const dateB = new Date(b.dob);

    if (sortOrder === "asc") {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });

  const filteredStudents = sortedStudents.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    searchTerm,
    handleSearch,
    sortOrder,
    handleSortOrder,
    filteredStudents,
    handleDeleteStudent
 
  };
};

export default useDetails;
