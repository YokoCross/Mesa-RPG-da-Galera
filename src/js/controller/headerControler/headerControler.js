import React, { Component } from 'react'
import { Header } from '../../view/header/header'

export default class HeaderControler extends Component {

    state={
        navbarVisible: 'display-none'
    }

    toggleNavbarVisible = () =>{
        if(this.state.navbarVisible === 'display-none') 
        this.setState({navbarVisible:''})
        else
        this.setState({navbarVisible:'display-none'})
    }

    render() {
        return (
            <Header navbarVisible={this.state.navbarVisible} toggleNavbarVisible={this.toggleNavbarVisible}/>
        )
    }
}
