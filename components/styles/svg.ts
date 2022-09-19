import {styled} from '@nextui-org/react';

const UnstyledSvg = styled('svg', {});
const UnstyledPath = styled('path', {});

export const Svg = Object.assign(UnstyledSvg, {
   Path: UnstyledPath,
});
