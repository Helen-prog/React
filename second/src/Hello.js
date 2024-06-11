import React from 'react';

class Hello extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: false
        }
    }

    changeText = () => {
        this.setState({ text: !this.state.text })
    }
   
    render(){
        return(
            <div>
                <button onClick={this.changeText}>Заменить</button>               
                <p>{this.state.text ? "Привет" : "Hello"}</p>
            </div>
        )
    }
}

// class Hello extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             text: "Hello"
//         }
//     }

//     changeText = () => {
//         this.setState({ text: "Привет" })
//     }

//     resetText = () => {
//         this.setState({ text: "Hello" })
//     }

//     render(){
//         return(
//             <div>
//                 <button onClick={this.changeText}>Заменить</button>
//                 <button onClick={this.resetText}>Сбросить</button>
//                 <p>{this.state.text}</p>
//             </div>
//         )
//     }
// }

export default Hello;