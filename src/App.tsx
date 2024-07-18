import {MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import CommunicationSettingsHost from "./Components/CommunicationSettingsHost.tsx";
import React, { useState } from "react";

function App(){
  const [DriverPath, SetDriverPath] = useState("../Drivers/GC2400/CommunicationSettings");
    return <>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={DriverPath}
            label="Driver"
            onChange={(event: SelectChangeEvent) => SetDriverPath(event.target.value as string)}
        >
            <MenuItem value={"../Drivers/GC2400/CommunicationSettings"}>GC2400</MenuItem>
            <MenuItem value={"../Drivers/HS2400/CommunicationSettings"}>HS2400</MenuItem>
        </Select>
        <CommunicationSettingsHost component={DriverPath}/>
    </>;
}

export default App;