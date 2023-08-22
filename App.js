import React, { useState } from 'react';
import Control from './StudentComponent/Control';
import ListStudent from './StudentComponent/listStudentt';
const App = () => {
  const [studentData, setStudentData] = useState([
    { id: 1, maSV: 'SV001', tenSV: 'Nguyen Van A', tuoi: 20, gioiTinh: 'Nam' },
    { id: 2, maSV: 'SV002', tenSV: 'Nguyen Van B', tuoi: 21, gioiTinh: 'Nữ' },
    { id: 3, maSV: 'SV003', tenSV: 'Nguyen Van C', tuoi: 19, gioiTinh: 'Nam' },
    { id: 4, maSV: 'SV004', tenSV: 'Nguyen Van C', tuoi: 19, gioiTinh: 'Nữ' },
    // ...Thêm dữ liệu cho các sinh viên khác
  ]); // Danh sách sinh viên ban đầu
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    const filteredStudents = studentData.filter(student =>
      student.tenSV.includes(searchTerm)
    );
    setSearchResults(filteredStudents);
  };
  return (
    <><div>
      <Control handleSearch={handleSearch} />
      <ListStudent studentData={searchResults.length > 0 ? searchResults : studentData}
      />
    </div>

    </>

  );
};

export default App;
