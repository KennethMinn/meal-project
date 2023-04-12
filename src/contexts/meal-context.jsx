import { createContext, useState } from 'react';

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [meal, setMeal] = useState([]);
  const [mealDetails, setMealDetails] = useState({});
  const value = { meal, setMeal, mealDetails, setMealDetails };
  return <MealContext.Provider value={value}>{children}</MealContext.Provider>;
};
