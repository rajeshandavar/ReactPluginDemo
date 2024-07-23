import Props from "../../Components/PluginInterface";

function CommunicationSettings(props: Props) {
    //props.log = (message: string) => false;
    return <>
        <img
            src="https://resources.perkinelmer.com/lab-solutions/resources/images/220X220/732106-n6480043-gc-mc-500x500.jpg"
            alt="car"
        />
        <h1>GC2400 Communication Settings</h1>
        <button onClick={() => props.onConfirmClick("GC2400 Driver says Hello")}>Oven</button>
        <h2>{props.text}</h2>
    </>;
}

export default CommunicationSettings;