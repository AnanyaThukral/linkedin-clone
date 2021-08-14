import React from 'react'
import "./InputOption.css"

const InputOption = ({title,Icon,color}) => {
    return (
        <div className="input-option">
           <Icon style = {{color:color}}/>
           <h4>{title}</h4>
        </div>
    )
}

export default InputOption
