import React, { Component } from 'react'


class CyclesDeVie extends Component {
    constructor(props){
        super(props)
        console.log("constructor")
    }

    componentWillMount(){
        console.log("componentWillMount")
    }

    render(){
        console.log("render")
        return (
            <div className='pur-p'>Cycles de vies</div>
        )
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps")
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
    }

    componentWillUpdate(){
        console.log("componentWillUpdate")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
}

export default CyclesDeVie