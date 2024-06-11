function Post(props){
    let {name, title, removePost, id} = props;

    return(
        <div>
            <fieldset>
                <legend style={{fontWeight: "bold"}}>{name}</legend>
                <p>{title}</p>
                <button onClick={() => removePost(id)}>delete</button>
            </fieldset>
        </div>
    )
}

export default Post;