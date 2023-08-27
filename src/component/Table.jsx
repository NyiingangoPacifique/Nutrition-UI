import React, { useState } from 'react';

const Table = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});
  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  const filteredData = data.filter(row => {
    return Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (column, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [column]: value
    }));
  };

  const applyFilters = row => {
    return Object.entries(filters).every(([column, value]) => {
      const cellValue = row[column];
      return (
        cellValue &&
        cellValue.toString().toLowerCase().includes(value.toLowerCase())
      );
    });
  };

  const filteredAndSortedData = filteredData
    .filter(row => applyFilters(row))
    .sort((a, b) => {
      const sortColumn = Object.keys(filters)[0]; // Assuming sorting is applied to the first filtered column
      const valueA = a[sortColumn];
      const valueB = b[sortColumn];

      if (valueA && valueB) {
        return valueA.localeCompare(valueB);
      } else {
        return 0;
      }
    });

  return (
    <div className="w-full mx-auto">
      
    </div>
  );
};

export default Table;
