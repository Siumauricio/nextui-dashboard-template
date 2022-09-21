import {styled} from '@nextui-org/react';

const UnstyledSvg = styled('svg', {});
const UnstyledPath = styled('path', {});
const UnstyledRect = styled('rect', {});

export const Svg = Object.assign(UnstyledSvg, {
   Path: UnstyledPath,
   Rect: UnstyledRect,
});
