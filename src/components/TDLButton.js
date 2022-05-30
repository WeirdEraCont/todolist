function TDLButton(props) {
    return (
        <div>
            <button id={props.id} onClick={props.onClick}>{props.txt}</button>
        </div>
    );
}

export default TDLButton