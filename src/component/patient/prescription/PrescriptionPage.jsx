import React from 'react';

const PrescriptionPage = ({ data }) => {
    console.log("##############",data)
  return (
    <>
    <div className="p-4 w-2/6">
      <h1 className="w-full text-2xl font-bold mb-4">Prescription</h1>
      {data.map((item) => (
        <div key={item.id} className="mb-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="mb-2">{item.description}</p>
            <p className="mb-2">{item.status}</p>
          </div>
        </div>
      ))}
    </div>
  </>
  );
};

export default PrescriptionPage;
