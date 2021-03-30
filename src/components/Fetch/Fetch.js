import React from 'react';
import DisplayFetch from './DisplayFetch/DisplayFetch';

export default class Fetch extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            img: ''
        }
    }

    componentWillMount() {
        console.log("I'm about to say Hello!")
    }

    componentDidMount() {
        console.log("Component Mounted")

        fetch('https://random.dog/woof.json')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({
                    img: json.url
                })
                console.log(this.state.img);
            })
    }

    render() {
        return(
            <div>
                <h1>Display Random Image</h1>
                <DisplayFetch url={this.state.img} />
            </div>
        )
    }
}