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
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-1/2 p-2 border border-gray-300 rounded-md mb-4"
      />
      {filteredAndSortedData.length === 0 ? (
        <p className="text-center text-gray-500">No data found.</p>
      ) : (
        <table className="w-1/2">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index} className="p-1 border-b border-gray-300">
                  {column}
                  <input
                    type="text"
                    placeholder="Filter..."
                    value={filters[column] || ''}
                    onChange={e =>
                      handleFilterChange(column, e.target.value)
                    }
                    className="mt-2 p-1 text-sm border border-gray-300 rounded-md"
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, columnIndex) => (
                  <td
                    key={columnIndex}
                    className="p-1 border-b border-gray-300"
                  >
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
