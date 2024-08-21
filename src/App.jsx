import "./App.css";
import BudgetCard from "./components/budget-card";

function App() {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="text-xl font-semibold text-gray-800">
        Project 2: Personal Finance Tracker
      </div>
      <div className="flex items-center justify-between mt-6 mb-4">
        <h2 className="text-2xl font-bold text-indigo-600">Budgets</h2>
        <div className="space-x-4">
          <button className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
            Add Budget
          </button>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Add Expense
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start">
        <BudgetCard title={"Entertainment"} amount={10} max={102} />
        <BudgetCard title={"Food"} amount={11} max={111} />
        <BudgetCard title={"Education"} amount={2000} max={3000} />
        <BudgetCard title={"Health"} amount={12} max={15} />
        <BudgetCard title={"Misc"} amount={100} max={150} />
      </div>
    </div>
  );
}

export default App;
