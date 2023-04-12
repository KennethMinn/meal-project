import React, { useContext, useEffect } from 'react';
import { MealContext } from '../contexts/meal-context';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { meal, setMeal } = useContext(MealContext);

  useEffect(() => {
    getMeals();
  }, []);
  const getMeals = async () => {
    const res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
    );
    const { meals } = await res.json();
    setMeal(meals);
    console.log(meals);
  };

  const nav = useNavigate();

  // const clickHandler = e => {
  //   e.preventDefault();
  //   nav(`detail/${idMeal}`);
  // };

  return (
    <div className=" grid grid-cols-3 gap-4 gap-y-8 mt-7">
      {meal.map(({ strMeal, strMealThumb, idMeal }) => (
        <div
          className="card card-compact w-96 bg-base-100 shadow-xl h-[400px]"
          key={idMeal}
        >
          <figure>
            <img
              src={strMealThumb}
              className=" w-[100%] h-[100%] object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{strMeal}</h2>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => nav(`detail/${idMeal}`)}
              >
                Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
