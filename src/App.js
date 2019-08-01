import React, { Component } from 'react'
import './App.css'

import { PurCompo } from './components/PurCompo'
import StateCompo from './components/StateCompo'
import CyclesDeVie from './components/CyclesDeVie'

export default class App extends Component {
  constructor(props){
    super(props)
    // mettre un constructeur pour définir les valeurs par défaut
    this.state = {stateApp : "state"}
  }

  onInputChange = (val) => {
    console.log('val App ' + val)
    this.setState({ stateApp: val })
  }

  render(){
    let labels=['pur', 'fonctionnel']
    return (
      <div className='App'>
        {labels.map(label=> <PurCompo key={label} label={label} />)}
        
        <StateCompo label={this.state.stateApp} onInputChange={this.onInputChange}/>

        <CyclesDeVie /> 
      </div>
    )
  }
    
}




