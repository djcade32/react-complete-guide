import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  function handleSavedExpenseData(savedExpenseData) {
    const expenseData = {
      ...savedExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);
    props.onAddExpenseData(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSavedExpenseData={handleSavedExpenseData} />
    </div>
  );
}

export default NewExpense;
