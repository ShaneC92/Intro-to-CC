import React from 'react';
import CounterDisplay from './CounterDisplay/CounterDisplay';

export default class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count: (this.state.count + 1)
        })
    }

    decrement = () => {
        this.setState({
            count: (this.state.count - 1)
        })
    }

    render() {
        return(
            <div>
                <CounterDisplay 
                    increment={this.increment} 
                    decrement={this.decrement}
                    count={this.state.count}
                />
            </div>
        )
    }
}