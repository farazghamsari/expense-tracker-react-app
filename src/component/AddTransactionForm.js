import React, { useState } from 'react';

const AddTransaction = ({addTransaction,setIsShow}) => {
    const [formValue, setFormValue] = useState({
        type:'expense',
        amount:0,
        describe:'',
    })
    const changeHandler =(e) => {
        setFormValue({...formValue,[e.target.name]:e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault()
        addTransaction(formValue)
        setIsShow(false)
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="add-transaction">
                <input type='text'
                       name='describe'
                       onChange={changeHandler} 
                       value={formValue.describe}
                       placeholder='as ... ' 
                />
                <input type='number' 
                       name='amount' 
                       onChange={changeHandler} 
                       value={formValue.amount} 
                />
            </div>
            <div>
                <input type='radio'
                       value='expense'
                       name='type'
                       onChange={changeHandler}
                       checked = {formValue.type === 'expense'}
                 />
                <label>Expense</label>
                <input type='radio'
                       value='income'
                       name='type'
                       onChange={changeHandler} 
                       checked={formValue.type === 'income'}
                        />
                <label>Income</label>
            </div>
            <button>ADD Transaction</button>
        </form>
     );
}
 
export default AddTransaction;