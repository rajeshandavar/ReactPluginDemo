import { TextField } from "@mui/material";
import CommunicationSettings from "./Components/CommunicationSettings";
import { useState } from "react";

function App(){
  const [ComponentName, SetComponentName] = useState("./Component1")
  return <>
          <TextField id="filled-basic" variant="filled" color="success" defaultValue={ComponentName} onChange={(e)=> {
              SetComponentName(e.target.value);
          }}/>          
          <CommunicationSettings component={ComponentName}/>
        </>;
}

export default App;