import { useState } from 'react';
import Budget from '../interfaces/Budget';

const useBudget = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
// agregar más presupuesto
  const addBudget = (newBudget: Budget) => {
    setBudgets([...budgets, newBudget]);
  };

  return { budgets, addBudget };
};

export default useBudget;
