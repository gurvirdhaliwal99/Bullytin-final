import React from "react";
import Box from "../comps/Textbox";


export default {
    title: "Example/Box",
    component:<Box />
}

export const BlueTextBox = () => <Box />

export const PinkTextBox = () => <Box border="4px solid #E0B6D4"/>

export const SmallPinkTextBox = () => <Box border="4px solid #E0B6D4" height="20vh"/>

export const SmallBlueTextBox = () => <Box height="20vh"/>