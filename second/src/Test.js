import React from 'react';

class Test extends React.Component{
    constructor(props){
        console.clear();
        console.log("constructor");
        super(props);
        this.state = {
            s1: 0
        }
    }

    buttonHandler = () => {
        let val = this.state.s1;
        val++;
        this.setState({s1: val})
    }

    componentDidMount(){
        console.log("component Did Mount")
    }

    componentDidUpdate(){
        console.log("component Did Update")
    }

    render(){
        console.log("render 1");
        return (
            <>
                {
                    console.log("render 2")
                }
                <div>
                    <button onClick={this.buttonHandler}>Push</button>
                </div>
                <div>
                    {
                        this.state.s1
                    }
                </div>
            </>
        )
    }
}

export default Test;