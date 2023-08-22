import React from 'react';

function ListStudent({ studentData }) {

    const handleViewClick = (studentId) => {
        // Xử lý sự kiện khi nút "Xem" được nhấn
        console.log(`Xem sinh viên có ID: ${studentId}`);
    };

    const handleEditClick = (studentId) => {
        // Xử lý sự kiện khi nút "Sửa" được nhấn
        console.log(`Sửa sinh viên có ID: ${studentId}`);
    };

    const handleDeleteClick = (studentId) => {
        // Xử lý sự kiện khi nút "Xóa" được nhấn
        console.log(`Xóa sinh viên có ID: ${studentId}`);
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: 50 }}>Danh sách sinh viên</h1>
            <table className='container'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã Sinh Viên</th>
                        <th>Tên Sinh Viên</th>
                        <th>Tuổi</th>
                        <th>Giới Tính</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {studentData.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.maSV}</td>
                            <td>{student.tenSV}</td>
                            <td>{student.tuoi}</td>
                            <td>{student.gioiTinh}</td>
                            <td>
                                <button onClick={() => handleViewClick(student.id)}>Xem</button>
                                <button onClick={() => handleEditClick(student.id)}>Sửa</button>
                                <button onClick={() => handleDeleteClick(student.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListStudent;