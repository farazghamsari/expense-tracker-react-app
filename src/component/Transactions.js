import { useEffect, useState } from "react";

const Transactions = ({transactions}) => {
    const [searchItem,setSearchItem] = useState("")
    const [filterTrs,setFilterTrs] = useState(transactions)
    useEffect(()=>{
        filterTransactions(searchItem)
    },[transactions])

    const filterTransactions = (search)=>{
        if(!search || search === ''){
            setFilterTrs(transactions)
        }else{
            const searchFilter = filterTrs.filter((t)=>t.describe.toLowerCase().includes(searchItem.toLowerCase()))
            setFilterTrs(searchFilter)            
        }
    }
    const changeHandler =(e)=>{
        setSearchItem(e.target.value)
        filterTransactions(e.target.value)
    }

    return ( 
        <div className="transactions">
            <h3>transactions</h3>
            <input type='text' placeholder="search..." value={searchItem} onChange={changeHandler} />
            {filterTrs.map((transaction)=>(
                <div key={transaction.id} className={`${transaction.type} transaction`}>
                    <h4>{transaction.describe}</h4>
                    <h4>{transaction.amount} $</h4>
                </div>
            ))}           
        </div>

     );
}
 
export default Transactions;