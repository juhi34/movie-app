import React from 'react'

const MyCode = (props) => {

    // 1) Array destrtucturing
    // const myArray = ['bds', 55, 'priya didi', 'juhi gdhi']
    // console.log(myArray.length)

    // const [myVar, myvar2] = myArray;
    // console.log(myVar)
    // console.log(myvar2)
    

    // 2) destructuring
    const { contact, abc } = props;

    return (
        <>
            <div>{contact}</div>
            <div>{abc}</div>
        </>
    )
}

export default MyCode



// 1) props
// 2) JSON
// 3) destructuring(array and object)