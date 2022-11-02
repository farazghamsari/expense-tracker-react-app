import { useState } from "react";
import AddTransactionForm from "./AddTransactionForm";

const ExpenseTracker = ({income,expense,addTransaction}) => {
    const [isShow,setIsShow] = useState(false)
    return ( 
        <div className="expense-tracker">
            <div className="header">
                <h3>Balance : {income - expense}</h3>
                <button onClick={() => setIsShow((prevState) => !prevState) }>
                    {isShow ? 'CANCEL' : 'ADD'}
                </button>
            </div>
            {isShow && <AddTransactionForm addTransaction={addTransaction} setIsShow={setIsShow}/>} 
            <div className="expense-income">
                <div>
                    <h3>Expense :</h3>
                    <h3 className="expense">{expense} $</h3>
                </div>
                <div>
                    <h3>income :</h3>
                    <h3 className="income">{income} $</h3>
                </div>                
            </div>   
        </div>
     );
}
 
export default ExpenseTracker;