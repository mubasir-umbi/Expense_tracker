import React, {useState} from "react"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"
import "./expences.css" 


 function Expences(props){
    const [filteredYear, setFilteredYear] = useState('2020')
    
    const filterChangeHandler =(selectedYear)=> {
        setFilteredYear(selectedYear)
    }

  const filteredExpenses = props.expenses.filter(expenses => {
    return expenses.date.getFullYear().toString() === filteredYear
  })  
 
    return(
      <div>
            
        <Card className="expences">
          <ExpensesFilter 
            onChangeFilter={filterChangeHandler}
            selected = {filteredYear} 
          />
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList item={filteredExpenses} />
        </Card>
      </div>
    )
}

export default Expences