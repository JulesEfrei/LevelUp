import React, { useState } from "react";

import { Switch } from "react-native";

export default function ToggleButton({style = {}}) {

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  
    return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={[style]} />;

}