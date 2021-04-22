import Head from 'next/head'
import Button from "../../comps/Button/index.js";
import Circle from "../../comps/Circlelogo/index.js";
import Box from "../../comps/Textbox/index.js";
import AvatarV from "../../comps/Avatar_V/index.js";
import AvatarW from "....//comps/Avatar_W/index.js";
import Back from "../../comps/Backbutton/index.js";
import Step from "../../comps/Step/index.js";
import styled from "styled-components";
import {useRouter} from 'next/router';


export default function Pages2(){
    const router = useRouter();

    const {routing} = router.query;

    var big = "big text box"
    var sub = "small text box"
    return <></>
}