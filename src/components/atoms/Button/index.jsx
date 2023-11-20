import "./Button.css"

export default function Button(props) {

    const type = props.type ? props.type : "button-default"

    return (<button className={"button "+type}>
        {props.children}
    </button>)
}