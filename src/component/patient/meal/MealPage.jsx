import React from 'react';
import {MdFreeBreakfast} from 'react-icons/md'
import {MdLunchDining} from 'react-icons/md'
import {MdDinnerDining} from 'react-icons/md'
import {GiFullPizza} from 'react-icons/gi'

const MealPlan = ({ data }) => {
    console.log("##############",data)
    const handlePrint = () => {
        window.print();
      };
    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="grid grid-cols md:grid-cols-1 sm:grid-cols-2 gap-10">
            <button onClick={handlePrint} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Print
            </button>
            {data.map((item) => (
              <div
                key={item.id}
                className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"
              >
                <div className="p-4 pt-2">
                  <div className="h-fit">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-10 pt-28">
                      {item.meal_set.map((meal) => (
                        <div
                          key={meal.id}
                          className="block rounded-xl border border-gray-800 p-4 mb-4"
                        >
                          <div className="inline-flex align-middle justify-center items-center select-none text-black">
                            {meal.type === "breakfast" && <MdFreeBreakfast />}
                            {meal.type === "lunch" && <MdLunchDining />}
                            {meal.type === "dinner" && <MdDinnerDining />}
                            {meal.type === "snack" && <GiFullPizza />}
                          </div>
                          <div className="border p-3 mb-2 rounded-lg">
                            <h2 className="mt-2 font-semibold text-base sm:text-lg text-black uppercase">
                              {meal.type}
                            </h2>
                            <p className="sm:mt-1 block text-sm sm:text-base text-black capitalize">
                              {meal.name}
                            </p>
                            <ul className="list-disc list-inside">
                              <li>{meal.description}</li>
                            </ul>
                          </div>
                        </div>
                      ))}
                      <div className="">
                        <h2 className="mt-2 font-semibold text-black sm:text-lg text-black">
                          Dietitian name: {item.chef.first_name}
                        </h2>
                        <p className="sm:mt-1 block text-sm sm:text-base text-black">
                          Dietitian Phone: {item.chef.phone_number}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
};

export default MealPlan;
