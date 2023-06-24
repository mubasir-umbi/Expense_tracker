import Card from '../UI/Card';
import ExpenceDate from './ExpenceDate';
import './ExpenceItem.css';


function ExpenceItem(props){
    

    return(
        <li>
          <Card className="expense-item">
             <ExpenceDate date={props.date}/>
             <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
          </Card>
        </li>
    )
}

export default ExpenceItem