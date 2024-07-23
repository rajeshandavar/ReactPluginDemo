
import {Suspense, lazy, useState, createRef} from 'react';
import ComponentProps from "./ComponentInterface.tsx";
import {TextField} from "@mui/material";
import Props from "./PluginInterface.tsx";

function CommunicationSettingsHost(props: ComponentProps){
    const componentRef = createRef<Props>()
    const Component = lazy(()=>
        import(props.component).catch((error)=> {console.error('Component failed to load:', error);
            return {default:() => <div>Error loading Component</div>}
        }
    ));
    const [StatusText, SetStatusText] = useState("")
    const [InputText, SetInputText] = useState("Hello from parent")
    const [TextToComponent, SetTextToComponent] = useState("Hello from parent")

    return <>
    <Suspense fallback = {<div>Loading...</div>}>
        <>
            <div>
                To Driver :
                <TextField id="filled-start-adornment" sx={{m: 1, width: '50ch'}} variant="filled" value={InputText}
                           onChange={(e) => {
                               SetInputText(e.target.value);
                           }}/>
                {/*<button onClick={() => componentRef.current?.log(InputText)}>Send</button>*/}
                <button onClick={() => SetTextToComponent(InputText)}>Send</button>
            </div>
            <div style={{border: "1px solid blue", flexDirection: "column" }}>
                <Component ref={componentRef} text={TextToComponent} onConfirmClick={(text: string) => SetStatusText(text)}/>
            </div>
            {StatusText}
        </>
    </Suspense>
    </>;
}


export default CommunicationSettingsHost;
