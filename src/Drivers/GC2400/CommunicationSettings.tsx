import Props from "../../Components/PluginInterface";

function CommunicationSettings(props: Props) {
    return <>
        <h1>GC2400 Communication Settings</h1>
        <button onClick={() => props.onConfirmClick("GC2400 Driver says Hello")}>Oven</button>
        <h2>{props.text}</h2>
    </>;
}

export default CommunicationSettings;