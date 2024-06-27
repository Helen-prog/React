function About({ text }) {
    return (
        <div className="wrap" style={{ padding: "0 20px", textAlign: "center" }}>
            <h2>{text.title}</h2>
            <p>{text.description}</p>
        </div>
    )
}

export default About;