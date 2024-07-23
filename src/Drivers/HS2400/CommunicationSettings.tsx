import Props from "../../Components/PluginInterface";
function CommunicationSettings(props: Props){
    //props.log = (message: string) => false;
    return <>
        <img
            src="https://resources.perkinelmer.com/lab-solutions/resources/images/220X220/732106-n6410001-gc-hs-500x500.jpg"
            alt="car"
        />
        <h1>HS 2400 Communication Settings</h1>
        <h2>{props.text}</h2>
        <button onClick={() => props.onConfirmClick("Hi from HS2400")}>Tray</button>
    </>
}

export default CommunicationSettings