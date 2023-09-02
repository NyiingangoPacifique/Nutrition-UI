import React from 'react';

const PrescriptionPage = ({ data }) => {
  console.log("##############",data);
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"
          >
            <img
              src="https://res.cloudinary.com/basha18/image/upload/v1693474095/prescription-removebg-preview_ju8mn4.png"
              className="w-1/2 mb-3"
              alt=""
            />
            <div className="p-4 pt-2">
              <div className="mb-8">
                <a
                  href="#"
                  className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
                >
                  {item.title}
                </a>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrint}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Print
      </button>
    </div>
  );
};

export default PrescriptionPage;
