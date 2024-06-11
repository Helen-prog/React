import React from 'react';

class Footer extends React.Component {
    render() {
        let {text} = this.props;
        return (
            <footer style={{
                background: "#CCFF00",
                padding: "10px 0",
                fontWeight: "bold"
            }}>
                <p>{text}</p>
            </footer>
        )
    }
}

export default Footer;