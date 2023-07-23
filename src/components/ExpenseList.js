import React, {useContext} from 'react';
import { ExpenseItem } from './ExpenseItem';
import { AppContext } from '../context/AppContext';

export const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    
    return (
        <table className='table'>
            <thead className='thead-light'>
                <tr>
                    <th scope="col">Departement</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 100.000</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => <ExpenseItem id={expense.id} key={expense.key} name={expense.name} cost={expense.cost}/>)}
            </tbody>
        </table>
    );
}
