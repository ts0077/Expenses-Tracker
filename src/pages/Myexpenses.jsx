import React from 'react'
import { useState, useEffect } from 'react'

const Myexpenses = () => {

    const [titleText, setTitleText] = useState("")
    const [amount, setAmount] = useState("")
    const [saveTransactions, setSaveTransactions] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const localSavedTransactions = JSON.parse(localStorage.getItem("MY Transactions"))
        if (localSavedTransactions) {
            setSaveTransactions(localSavedTransactions)
        }
        setIsLoaded(true)

    }, [])


    useEffect(() => {
        if (isLoaded)
            localStorage.setItem("MY Transactions", JSON.stringify(saveTransactions))

    }, [isLoaded, saveTransactions])


    const addTransaction = () => {
        if (titleText.trim() === "" || amount.trim() === "") {
            return
        }

        setSaveTransactions([...saveTransactions, { title: titleText, Amount: parseFloat(amount) }])
        setTitleText("")
        setAmount("")
    }


    const income = saveTransactions
    .filter(tx=> tx.Amount>0)
    .reduce((acc, tx) => acc + Math.abs(tx.Amount),0)

    const expense = saveTransactions 
    .filter(tx=>tx.Amount<0)
    .reduce((acc,tx)=> acc + Math.abs(tx.Amount) ,0)

    const balance = income - expense


    return (
        <>
            <div className='bg-purple-50 min-h-[80vh] max-w-3xl mx-auto my-8 p-5'>


                <h2 className='text-center text-2xl text-purple-600 font-bold'>MY EXPENSES</h2>
                <div className='mt-5 border p-5'>
                    <div className='mb-3'>
                        <p className='text-xl font-semibold'>Add New Transaction</p>

                    </div>

                    <div>

                        <input type="text"
                            placeholder='Title'
                            value={titleText}
                            onChange={(e) => setTitleText(e.target.value)}
                            className='bg-white border-none outline-none ring ring-purple-300 focus:ring-purple-500 rounded p-2 h-8 placeholder:text-sm' />

                        <input type="text"
                            placeholder='Amount'
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className='bg-white border-none outline-none ring ring-purple-300 focus:ring-purple-500 rounded p-2 h-8 placeholder:text-sm ml-4' />

                        <button onClick={addTransaction} className='ml-5 bg-purple-600 px-2 py-1.5 text-white rounded font-bold cursor-pointer'>ADD Transaction</button>
                    </div>
                </div>

                <div className='flex gap-5 mt-5'>

                    <div className='border p-5 w-[80vh] h-[42vh] overflow-y-auto bg-purple-50'>
                        <h3 className='text-center font-semibold mb-5 tracking-wider'>HISTORY</h3>

                        {
                            saveTransactions.length === 0 ? (
                            
                                <p className='text-gray-300 text-center mt-20'>No Transactions History</p>
                            ) :

                                <ul className="space-y-6">
                                    {
                                        saveTransactions.map((tx, index) => (
                                            <li
                                                key={index}
                                                className={`flex justify-between items-center p-2 rounded-md shadow-sm ${tx.Amount > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                                    }`}
                                            >
                                                <span className="font-medium">{tx.title}</span>
                                                <span className="font-semibold">{tx.Amount}</span>
                                            </li>

                                        ))}

                                </ul>


                        }




                    </div>

                    <div className='p-3 border w-[50vh] text-center h-[42vh] grid'>
                        <div className='grid '>
                              
                        <div className='font-bold text-xl mt-3'>Your Balance
                        </div>
                            <span className=''>{balance}</span>
                        </div> 

                        <div className='grid'>

                        <div className='font-bold text-xl'>Income</div>
                             <span className='text-green-500'>{income}</span>
                        </div>
<div className='grid'>

                        <div className='font-bold text-xl'>Expense
                        </div>
                            <span className='text-red-500'>{expense}</span>
                    </div>
</div>

                </div>


            </div>
        </>
    )
}

export default Myexpenses
