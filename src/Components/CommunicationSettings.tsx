
import Props from "./PluginInterface";
import {Suspense, lazy} from 'react';

function CommunicationSettings(props: Props){
    const Component = lazy(()=> 
        import(props.component).catch((error)=> {console.error('Component failed to load:', error);
            return {default:() => <div>Error loading Component</div>}
        }
    ));      

    return <>
    <Suspense fallback = {<div>Loading...</div>}>
        <>
        <Component text="Passed from Parent" component="component1" />
        </>
    </Suspense>
</>;
}


export default CommunicationSettings;
