import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@material-ui/core'

const HeaderOption = ({avatar, title, Icon}) => {
    return (
        <div className='header-option'>
            {/*if only an icon is passed then render the icon*/}
            {Icon && <Icon className = "headerOption-icon"/>}
            {/*if avatar do the following*/}
            {avatar &&
                <Avatar className = "headerOption-icon" src={avatar}/>
            }
            <h3 className = "title">{title}</h3>
        </div>
    )
}

export default HeaderOption
