import Props from "./PluginInterface";

function Component1(props: Props) {
    return <>
        <h1>I am component 1</h1>
        <h2>{props.text}</h2>
        <button onClick={()=> console.info("Button Clicked")}> My Button</button>
    </>;
}

export default Component1;