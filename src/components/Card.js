import React from 'react'

const Card = ({title,number}) => {
    let arr = String(number).split("").reverse();

    arr.forEach((item,index)=>{
        if((index) % 3 === 0){
            arr[index] = item + ","
        }
    })
    return (
        <div className={title}>
            <h1>{title}</h1>
            <p>{arr.reverse().join("")}</p>
        </div>
    )
}

export default Card
