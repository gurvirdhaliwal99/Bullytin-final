import React from 'react';
import AvatarW from '../comps/Avatar_W';
import AvatarV from '../comps/Avatar_V';

export default {
    title: "Avatars",
    component: <AvatarW />
}

export const AvatarWendy = () => <AvatarW />
export const AvatarVince = () => <AvatarV />

export const AvatarWendyE = () => (
    <AvatarW bgImg="AvatarW_Explaining.png"/>
);
export const AvatarVinceE = () => (
    <AvatarV bgImg="AvatarV_Explaining.png"/>
);