import React from 'react';
import {useBodyScroll} from '@nextui-org/react';

import {useSidebarContext} from '../layout/layout-context';
import {StyledBurgerButton} from './navbar.styles';

export const BurguerButton = () => {
   const {collapsed, setCollapsed} = useSidebarContext();

   const handleToggle = () => {
      setCollapsed();
   };
   return (
      <StyledBurgerButton open={collapsed} onClick={handleToggle}>
         <div />
         <div />
      </StyledBurgerButton>
   );
};
