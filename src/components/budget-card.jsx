import React from "react";

function BudgetCard({ title, amount, max }) {
  return (
    <div className="card bg-base-100 w-64 shadow-xl">
      <div className="card-body">
        <div className="flex-row">
          <h2 className="card-title">{title}</h2>
          <h2>
            {amount} / {max}
          </h2>
        </div>
        <p>test content</p>
        <div className="card-actions justify-end">
          <button className="px-6 py-2 min-w-[150px] justify-items-center bg-transparent border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">
            Add Expense
          </button>
          <button className="px-6 py-2 min-w-[150px] bg-transparent border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition duration-300">
            View Expense
          </button>
        </div>
      </div>
    </div>
  );
}

export default BudgetCard;
