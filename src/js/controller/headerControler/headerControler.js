import React, { Component, useState } from 'react'
import { Header } from '../../view/header/header'

export default class HeaderControler extends Component {

    state={
        navbarVisible: 'none'
    }

    toggleNavbarVisible = () =>{
        console.log('foi');
        if(this.state.navbarVisible === 'none') 
        this.setState({navbarVisible:'flex'})
        else
        this.setState({navbarVisible:'none'})
    }

    render() {
        return (
            <Header navbarVisible={this.state.navbarVisible} toggleNavbarVisible={this.toggleNavbarVisible}/>
        )
    }
}
