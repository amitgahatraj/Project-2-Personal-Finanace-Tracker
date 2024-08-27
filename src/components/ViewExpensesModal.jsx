import React from "react";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetsContext";

export default function ViewExpensesModal({ budgetId, handleClose }) {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } =
    useBudgets();

  const expenses = getBudgetExpenses(budgetId);
  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
      : budgets.find((b) => b.id === budgetId);

  if (budgetId == null) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <h2 className="text-lg font-medium">Expenses - {budget?.name}</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition duration-150"
          >
            &times;
          </button>
        </div>
        <div className="p-4">
          <div className="space-y-3">
            {expenses.map((expense) => (
              <div
                key={expense.id}
                className="flex items-center justify-between"
              >
                <div className="text-lg">{expense.description}</div>
                <div className="text-md text-gray-500">${expense.amount}</div>

                <button
                  onClick={() => deleteExpense(expense)}
                  className="text-red-500 hover:text-red-700 transition duration-150"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
        {budgetId !== UNCATEGORIZED_BUDGET_ID && (
          <div className="px-4 py-2 border-t">
            <button
              onClick={() => {
                deleteBudget(budget);
                handleClose();
              }}
              className="w-full px-4 py-2 text-red-500 border border-red-500 rounded hover:bg-red-500 hover:text-white transition duration-150"
            >
              Delete Budget
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
