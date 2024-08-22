// import { useRef } from "react";
// import {
//   useBudgets,
//   UNCATEGORIZED_BUDGET_ID,
// } from "../contexts/BudgetsContext";

// export default function AddExpenseModal({
//   show,
//   handleClose,
//   defaultBudgetId,
// }) {
//   const descriptionRef = useRef();
//   const amountRef = useRef();
//   const budgetIdRef = useRef();
//   const { addExpense, budgets } = useBudgets();

//   function handleSubmit(e) {
//     e.preventDefault();
//     addExpense({
//       descriptionRef: descriptionRef.current.value,
//       amount: parseFloat(amountRef.current.value),
//       budgetId: budgetIdRef.current.value,
//     });
//     handleClose();
//   }

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-lg w-96 p-6">
//         <div className="flex justify-between items-center border-b pb-2 mb-4">
//           <h2 className="text-xl font-bold">New Expense</h2>
//           <button
//             onClick={handleClose}
//             className="text-gray-500 hover:text-black"
//           >
//             &times;
//           </button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Description
//             </label>
//             <input
//               ref={descriptionRef}
//               type="text"
//               id="description"
//               required
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="max"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Amount
//             </label>
//             <input
//               ref={amountRef}
//               type="number"
//               id="amount"
//               required
//               min={0}
//               step={0.01}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="budgetId"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Budget
//             </label>
//             <select
//               id="budgetId"
//               ref={budgetIdRef}
//               defaultValue={defaultBudgetId}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//             >
//               <option id={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
//               {budgets.map((budget) => (
//                 <option key={budget.id} value={budget.id}>
//                   {budget.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="flex justify-end">
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               Add
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
