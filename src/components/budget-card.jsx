import React from "react";

function BudgetCard({
  name,
  amount,
  max,
  hideButtons,
  onAddExpenseClick,
  onViewExpensesClick,
}) {
  return (
    <div className="card bg-base-100 w-64 shadow-xl">
      <div className="card-body">
        <div className="flex-row">
          <h2 className="card-title">{name}</h2>
          <span>{amount}</span>
          {max && <span>/ {max}</span>}
        </div>
        <p>test content</p>
        <div className="card-actions justify-end">
          <button
            onClick={onAddExpenseClick}
            className="px-6 py-2 min-w-[150px] justify-items-center bg-transparent border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Add Expense
          </button>
          <button
            onClick={onViewExpensesClick}
            className="px-6 py-2 min-w-[150px] bg-transparent border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
          >
            View Expense
          </button>
        </div>
        {/* {!hideButtons && (
          <div className="flex gap-2 mt-4">
            <button
              className="ml-auto px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
              onClick={onAddExpenseClick}
            >
              Add Expense
            </button>
            <button
              className="px-4 py-2 border border-gray-500 text-gray-500 rounded hover:bg-gray-500 hover:text-white transition"
              onClick={onViewExpensesClick}
            >
              View Expenses
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default BudgetCard;
