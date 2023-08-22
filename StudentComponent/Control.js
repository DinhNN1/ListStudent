import React, { useState } from 'react';

const Control = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        handleSearch(searchTerm);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Nhập tên để tìm kiếm"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearchClick}>Tìm</button>
        </div>
    );
};

export default Control;
