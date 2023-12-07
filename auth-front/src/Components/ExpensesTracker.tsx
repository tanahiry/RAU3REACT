import React from 'react';
import useExpenses from '../Hooks/useExpenses';

const ExpensesTracker: React.FC = () => {
  const { expenses, description, amount, setDescription, setAmount, addExpense } = useExpenses();
  // Declara el componente de tipo ExpensesTracker como una función componente de React

  // Usa el hook useExpenses y desestructura los valores devueltos
  const inputStyle = {
    margin: '0.5rem',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #3498db',
    fontSize: '1rem',
    color: '#3498db',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#2980b9',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
  };

  const listItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem',
    borderBottom: '1px solid #3498db',
    color: 'black',
  };
  // Retorna el JSX que representa la interfaz del componente
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Monto"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          style={inputStyle}
        />
        <button onClick={addExpense} style={buttonStyle}>Agregar Gasto</button>
      </div>
      <div>
        <h3 style={{ marginBottom: '0.5rem', color: '#2980b9' }}>Lista de Gastos</h3>
        <ul style={listStyle}>
          {expenses.map((expense) => (
            <li key={expense.id} style={listItemStyle}>
              <span>{expense.description}</span>
              <span>{expense.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpensesTracker;
