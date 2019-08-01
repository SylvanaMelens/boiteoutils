/**
 * @author Sylvana
 * Modèle de composant avec state
 */

import React, { Component } from 'react'
import './StateCompo.css'


export default class StateCompo extends Component {
    constructor(props){
        super(props)
        this.state = {nom : 'composant contrôlé'}
    }

    handleChange = (e) => {
        const nom = e.target.value
        this.setState({ nom })
        console.log('val State ' + e.target.value)
        this.props.onInputChange(e.target.value)
    }

    render(){
        const { label } = this.props
        const { nom } = this.state
        return (
            <div>
                <p className='state-p'>Composant avec {label}, nom: {nom}</p>
                <input onChange={this.handleChange} value={nom} type="text"/>
            </div>

        )
    }
}
