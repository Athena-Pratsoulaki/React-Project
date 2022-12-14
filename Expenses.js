import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //const filteredExpenses = props.items.filter(expense => {

  //  return expense.date.getFullYear().toString() === filteredYear;
  // });
  const filteredExpenses = props.items.filter(checkDate);

  function checkDate(expense) {
    return expense.date.getFullYear().toString() === filteredYear;
  }
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          defaultSelection={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items = {filteredExpenses}/>
      </Card>
    </li>
  );
}

export default Expenses;
