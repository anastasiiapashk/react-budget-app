import React, { useContext, useState } from "react";

const BudgetsContext = React.createContext();

export function useBudgets() {
  return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  function getBudgetExpenses(budgetId: number) {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }
  function addExpense() {}
  function deleteBudget() {}
  function deleteExpense() {}

  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
};
