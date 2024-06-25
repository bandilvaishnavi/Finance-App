import { toast } from "react-toastify";
import { calculateSpentByBudget, deleteItem, formatCurrency, formatPercentage } from "../helpers";


const BudgetItem = ({budget}) => {
  const {id,name,amount,color}=budget;  
  const spent=calculateSpentByBudget(id);
  return (
    <div
    className="budget"
    style={{
      "--accent": color
    }} >

    <div className="budget">
        <div className="progress-text">
            <h3>{name}</h3>
            <p>{formatCurrency(amount)} Budgeted</p>
        </div>
        <progress max={amount} value={spent}>
          {formatPercentage(spent / amount)}
        </progress>
        <div className="progress-text">
            <small>{formatCurrency(spent)}</small>
            <small>{formatCurrency(amount-spent)}remaining</small>
        </div>
    </div>
    </div>
  )
}

export default BudgetItem