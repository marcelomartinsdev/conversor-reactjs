import React, { Component } from 'react';


export default class Converter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            coinA_value: "",
            coinB_value: 0,
        }
        this.convert = this.convert.bind(this);
    }

    convert() {
        
        let from_to = `${this.props.coinA}_${this.props.coinB}`;
        let url = `https://free.currencyconverterapi.com/api/v5/convert?q=${from_to}&compact&apiKey=c8408749ad76680b6460`

        fetch(url)
            .then(res => {
            
            return res.json()

        })

        .then(json => {
            let cotation = json[from_to].value;
            let coinB_value = (parseFloat(this.state.coinA_value) * cotation).toFixed(2)
            this.setState({coinB_value})
        })
    }

    render() {
        return (
            <div className="converter">
            <h2>{this.props.coinA} to {this.props.coinB}</h2>
            <input type="text" onChange={(event)=>{this.setState({coinA_value:event.target.value})}}></input>
            <input type="button" value="Convert" onClick= {this.convert}></input>
            <h2>{this.state.coinB_value}</h2>
        </div>

    )
  }
}
