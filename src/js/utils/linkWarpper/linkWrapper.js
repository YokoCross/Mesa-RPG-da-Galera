import React from 'react'
import { NavLink } from 'react-router-dom'

export const LinkWrapper = props => {
    return (
        <NavLink activeStyle={{fontWeight:"bold"}} exact {...props}/>
    )
}
