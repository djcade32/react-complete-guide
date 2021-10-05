import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function handleChange(event) {
    switch (event.target.name) {
      case "title":
        setTitle(event.target.value);
        break;
      case "amount":
        setAmount(event.target.value);
        break;
      case "date":
        setDate(event.target.value);
        break;

      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    setTitle("");
    setAmount("");
    setDate("");

    props.onSavedExpenseData(expenseData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title"
            type="text"
            onChange={handleChange}
            value={title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="amount"
            type="text"
            min="0.01"
            step="0.01"
            onChange={handleChange}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleChange}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
