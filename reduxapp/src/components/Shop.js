import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreator } from '../State/index';
export default function Shop(){
  const dispatch = useDispatch();
  const { withDrawMoney,depositMoney } = bindActionCreators(actionCreator ,dispatch)
  const balance = useSelector(state=>state.amount)
  return (
    <div>
        <h1>Deposit/Withdraw Money</h1>
        <button className="btn btn-primary mx-3 my-3" onClick={()=>{withDrawMoney(200)}}>-</button>
         Update Balance ({balance})
        <button className="btn btn-primary mx-3 my-3" onClick={()=>{depositMoney(200)}}>+</button>
    </div>
  )
}