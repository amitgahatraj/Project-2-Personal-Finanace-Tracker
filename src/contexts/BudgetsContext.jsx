import React, { createContext, useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";

const BudgetsContext = createContext();

export function useBudgets() {
  return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = [useState([])];
  const [expenses, setExpense] = [useState([])];

  function getBudgetExpenses(budgetId) {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }
  function addExpense() {}
  function addBudget() {}
  function deleteBudget() {}
  function deleteExpense() {}
  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
};
