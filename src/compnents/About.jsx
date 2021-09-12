import React from 'react'

export default function About(props) {
    let myStyle ={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'gray':'white'
    }
    return (
        <div className="container" >
            <p style={myStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sed iste laudantium perferendis repudiandae velit, asperiores blanditiis earum enim nam recusandae at vel unde dolores quia est. Consequatur, accusantium saepe.</p>
        </div>
    )
}
