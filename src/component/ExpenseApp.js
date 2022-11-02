import { useEffect, useState } from "react";
import '../App.css'
import Transactions from "./Transactions";
import ExpenseTracker from "./ExpenseTracker";
const ExpenseApp = () => {
    const [expense,setExpense] = useState(0)
    const [income,setIncome] = useState(0)
    const [transactions,setTransactions] = useState([])
    
    const addTransaction = (formValue) => {
        setTransactions([...transactions,{...formValue , id: Date.now() }])
    }

    useEffect(()=>{
        let inc = 0
        let exp = 0
        transactions.forEach((transaction)=>{
           transaction.type === 'expense' ? (exp = exp + parseFloat(transaction.amount) ):(inc = inc + parseFloat(transaction.amount) )
        })
        setExpense(exp)
        setIncome(inc)
    },[transactions])
    return ( 
        <>
            <ExpenseTracker income={income} expense={expense} addTransaction={addTransaction} />  
            <Transactions transactions={transactions}/>  
        </>
    

     );
}
 
export default ExpenseApp;