import { useState } from 'react';
import { Expense } from '../interfaces/Expense';

const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
//addExpense: Esta función valida que tanto description como amount sean válidos y, si lo son, crea un nuevo objeto Expense con un ID incrementado en función del tamaño actual de expenses. 
//Luego, agrega este nuevo gasto al array expenses usando setExpenses, limpia description y establece amount en cero.
  const addExpense = () => {
    if (description.trim() !== '' && amount > 0) {
      const newExpense: Expense = {
        id: expenses.length + 1,
        description,
        amount,
      };
      setExpenses([...expenses, newExpense]);
      setDescription('');
      setAmount(0);
    }
  };

  return {
    expenses,
    description,
    amount,
    setDescription,
    setAmount,
    addExpense,
  };
};

export default useExpenses;
