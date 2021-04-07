import React from "react";
import Button from "../comps/Button";


export default {
    title: "Example/Button",
    component:<Button />
}

export const DefaultButton = () => <Button />

export const ButtonWithText = () => <Button text="Bystander" color="pink"/>

export const ButtonWithColor= () => <Button text="Victim" color="lightblue" />