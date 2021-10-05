import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  function handleYearSelection(selectedYear) {
    setFilteredYear(selectedYear);
  }

  let filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearSelection={handleYearSelection}
        />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
