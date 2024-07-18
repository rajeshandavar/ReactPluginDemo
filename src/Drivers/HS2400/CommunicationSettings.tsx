import Props from "../../Components/PluginInterface";
function CommunicationSettings(props: Props){
    return <>
        <h1>HS 2400 Communication Settings</h1>
        <h2>{props.text}</h2>
        <button onClick={() => props.onConfirmClick("Hi from HS2400")}>Tray</button>
    </>
}

export default CommunicationSettings