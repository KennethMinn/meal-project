import React, { useContext, useEffect } from 'react';
import { MealContext } from '../contexts/meal-context';
import { useParams } from 'react-router-dom';
import { ImYoutube } from 'react-icons/im';

const Details = () => {
  const { id } = useParams();

  const { mealDetails, setMealDetails } = useContext(MealContext);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await res.json();
    setMealDetails(meals[0]);
  };
  console.log(mealDetails);

  return (
    <div className=" min-h-screen">
      <div className="card lg:card-side bg-base-100 shadow-xl h-[500px]">
        <figure>
          <img
            src={mealDetails.strMealThumb}
            className=" w-[5000px] object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{mealDetails?.strMeal}</h2>
          <p>{mealDetails?.strInstructions}</p>
          <div className="card-actions justify-end">
            <a href={mealDetails?.strYoutube}>
              <ImYoutube className=" cursor-pointer text-6xl text-red-600" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
