import {Text} from '@nextui-org/react';
import React from 'react';
import {NavbarWrapper} from '../navbar/navbar';
import {SidebarWrapper} from '../sidebar/sidebar';
import {Box} from '../styles/box';
import {SidebarContext} from './layout-context';
import {WrapperLayout} from './layout.styles';

interface Props {
   children: React.ReactNode;
}

export const Layout = ({children}: Props) => {
   const [sidebarOpen, setSidebarOpen] = React.useState(false);

   const handleToggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
   };

   return (
      <SidebarContext.Provider
         value={{
            collapsed: sidebarOpen,
            setCollapsed: handleToggleSidebar,
         }}
      >
         <WrapperLayout>
            <SidebarWrapper />
            {/* <Box
               css={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
               }}
            > */}
            <NavbarWrapper>{children}</NavbarWrapper>
            {/* </Box> */}
         </WrapperLayout>
      </SidebarContext.Provider>
   );
};
