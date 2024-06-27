function Item(props) {
    let { item, index, doneItem } = props;

    return (
        <div className="block" style={{ color: item.done ? 'blue' : "" }}>
            <div className="left">
                <label htmlFor={index}>
                    <input type="checkbox" id={index} onChange={() => doneItem(index)} />
                    {item.text}</label>
            </div>
            <div className="right">
                {item.done ? "+" : "-"}
            </div>
        </div>
    )
}

export default Item;