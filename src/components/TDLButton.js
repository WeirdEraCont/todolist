function TDLButton(props) {
    return (
        <div className="Button">
            <button onClick={props.onClick}>{props.txt}</button>
        </div>
    );
}

export default TDLButton