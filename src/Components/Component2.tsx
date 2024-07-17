import Props from "./PluginInterface";
function Component2(props: Props){
    return <>
        <h1> I am component 2</h1>
        <h2>{props.text}</h2>
        <button onClick={() => props.onConfirmClick("From Component 2")}>Component 2 Button</button>
    </>
}

export default Component2