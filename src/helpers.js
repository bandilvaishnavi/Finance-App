export const wait = () => new Promise(res => setTimeout(res, Math.random() * 2000))


//Local Storage
const generateRandomColor = () => {
    const existingBudgetLength = fetchData("budgets")?.length ?? 0;
    return `${existingBudgetLength * 34} 65% 50%`
  }
  

export const fetchData=(key)=>{
    return JSON.parse(localStorage.getItem(key));
}


export const createBudget=({name,amount})=>{
    const newItem={
        id:crypto.randomUUID(),
        name:name,
        createdAt: Date.now(),
        amount: +amount,
        color:generateRandomColor()
    }
    const existingBudgets=fetchData("budgets") ?? [];
    return localStorage.setItem("budgets",JSON.stringify([...existingBudgets,newItem]))
}
//create expense
export const createExpense=({name,amount,budgetId})=>{
    const newItem={
        id:crypto.randomUUID(),
        name:name,
        createdAt: Date.now(),
        amount: +amount,
        budgetId:budgetId,
    }
    const existingExpenses=fetchData("expenses") ?? [];
    return localStorage.setItem("expenses",JSON.stringify([...existingExpenses,newItem]))
}
// delete item from local storage
export const deleteItem = ({ key, id }) => {
    const existingData = fetchData(key);
    if (id) {
      const newData = existingData.filter((item) => item.id !== id);
      return localStorage.setItem(key, JSON.stringify(newData));
    }
    return localStorage.removeItem(key);
  };
  

// total spent by budget
export const calculateSpentByBudget = (budgetId) => {
    const expenses = fetchData("expenses") ?? [];
    const budgetSpent = expenses.reduce((acc, expense) => {
      // check if expense.id === budgetId  passed 
      if (expense.budgetId !== budgetId) return acc
  
      // add the current amount to my total
      return acc += expense.amount
    }, 0)
    return budgetSpent;
  }
  
export const getAllMatchingItems=({category,key,value})=>{
    const Data=fetchData(category) ?? [];
    return Data.filter((item)=>item[key]===value);
}
//format

export const formatDateToLocaleString = (epoch) => new Date(epoch).toLocaleDateString();


export const formatPercentage = (amt) => {
    return amt.toLocaleString(undefined, {
      style: "percent",
      minimumFractionDigits: 0,
    })
  }
  

export const formatCurrency = (amt) => {
    return amt.toLocaleString(undefined, {
      style: "currency",
      currency: "USD"
    })
}

