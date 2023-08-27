import React from 'react';

const MealPlan = ({ data }) => {
    console.log("##############",data)
  return (
    <>
    <div className="p-4 w-2/6">
      <h1 className="w-full text-2xl font-bold mb-4">Meal Plan</h1>
      {data.map((item) => (
        <div key={item.id} className="mb-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="mb-2">{item.description}</p>
            {item.meal_set.map((meal) => (
              <div key={meal.id} className="border p-3 mb-2 rounded-lg">
                <h3 className="text-md font-medium">{meal.type}</h3>
                <h4 className="text-md font-medium">{meal.name}</h4>
                <p>{meal.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
  );
};

export default MealPlan;
