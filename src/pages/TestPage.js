import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import getData from '../getData.json'

export const TestPage = () => {
    const [data, setData] = useState()
    const [period, setPeriod] = useState('D')
    const [count, setCount] = useState(0)
    const handlePeriod = (e, char) => {
        e.preventDefault();
        setPeriod(char)
    }
    useEffect(() => {
        setData(getData)
    }, [period])
    return(
        <>
            <div className='mb-4'>Test</div>
            <FormPeriod handlePeriod={handlePeriod}/>
            <FormInput/>
            <ItemComponent data={data}/>
           
        </>
    )
}


const Counter = (props) => {
    const {count, handleCount} = props;
    return (
        <>
            <div>{count}</div>
            <button onClick={(e) => handleCount(e)}>click</button>
        </>
    )
}

const FormInput = (props) => {
    return(
        <form className='form-control'>
            <label>Name</label>
            <input type='text'/>
        </form>
    )
}

const FormPeriod = (props) => {
    const {handlePeriod} = props;
    const charList = [
        {char: 'D', name: 'Day'},
        {char: 'W', name: 'Week'},
        {char: 'M', name: 'Month'},
    ];
    return(
        <>
            {charList.map((i, idx) => <div key={idx} char={i.char} onClick={(e) => handlePeriod(e, i.char)}>{i.name}</div>)}
        </>
    )
}

const ItemComponent = (props) => {

    const [data, setData] = useState(props.data)
    // useEffect(() => {

    // })
    return(
        <>
        No data
        {data && 
        data.data.map((i, idx) => {
            <div className='card' key={idx}>
                <div>{i.thailand_fund_code}</div>
                <div>{i.avg_return}</div>
            </div>
        })}
        </>
    )
}