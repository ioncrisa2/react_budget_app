import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget} = useContext(AppContext);
    return (
        <div className="alert alert-secondary">
            <span>Budget : Rp.{budget}</span>
        </div>
    )
}

export default Budget;