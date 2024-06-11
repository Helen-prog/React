import React from 'react';

class Form extends React.Component {
    state = { 
        firstName: "",
        email: ""
    }

    update = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    render() {
        let {firstName, email} = this.state;
        return (
            <>
                <hr />
                <form>
                    Имя: <input value={firstName} name="firstName" onChange={this.update} /><br />
                    Email: <input value={email} name="email" onChange={this.update} />
                </form>
                <hr />
                <p>Имя: { firstName }</p>
                <p>Email: { email }</p>
            </>
        )
    }
}
// class Form extends React.Component {
//     state = { text: "" }

//     update = (event) => {
//         this.setState({ text: event.target.value})
//     }

//     render() {
//         return (
//             <>
//                 <hr />
//                 <form>
//                     <input value={this.state.text} onChange={this.update} />
//                 </form>
//                 <hr />
//                 <p>{ this.state.text }</p>
//             </>
//         )
//     }
// }

export default Form;