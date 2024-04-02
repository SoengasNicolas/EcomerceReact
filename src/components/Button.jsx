function Button (props){
    return (
        <button style={{backgroundColor: props.color}} onClick={props.clicEvent}>{props.label}</button>
    )
}

export default Button