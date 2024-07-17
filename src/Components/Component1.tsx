import Props from "./PluginInterface";

function Component1(props: Props) {
    return <>
        <h1>I am component 1</h1>
        <button onClick={() => props.onConfirmClick("From Component 1")}>Component 1 Button</button>
        <h2>{props.text}</h2>
    </>;
}

export default Component1;