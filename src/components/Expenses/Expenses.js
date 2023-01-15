import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expense.css';

function Expenses(props){
    return <Card className="expenses">
        <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
        >
        </ExpenseItem>
        <ExpenseItem className="expenses"
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
        >
        </ExpenseItem>
        <ExpenseItem className="expenses"
            key={props.items[2].id} 
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
        >
        </ExpenseItem>
    </Card>
}

export default Expenses;