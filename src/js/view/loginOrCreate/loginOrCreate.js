import React, { Component } from 'react'
import { connect } from 'react-redux'

export class LoginOrCreate extends Component {
    render() {
        return (
            <section>
                login or create
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginOrCreate)
