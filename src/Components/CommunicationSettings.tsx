
import {Suspense, lazy, useState} from 'react';
import ComponentProps from "./ComponentInterface.tsx";
import {TextField} from "@mui/material";

function CommunicationSettings(props: ComponentProps){
    const Component = lazy(()=> 
        import(props.component).catch((error)=> {console.error('Component failed to load:', error);
            return {default:() => <div>Error loading Component</div>}
        }
    ));
    const [StatusText, SetStatusText] = useState("Hello")
    const [InputText, SetInputText] = useState("Hello from parent")

    return <>
    <Suspense fallback = {<div>Loading...</div>}>
        <>
            <div>
                Message To Component
            <TextField id="filled-basic" variant="filled" color="success" defaultValue={InputText} onChange={(e)=> {
                SetInputText(e.target.value);
            }}/>
            </div>
            <div style={{ border: "1px solid red", flexDirection: "column" }}>
                <Component text={InputText} onConfirmClick={(text: string) => SetStatusText(text)}/>
            </div>
            <h1>{StatusText}</h1>
        </>
    </Suspense>
    </>;
}


export default CommunicationSettings;
