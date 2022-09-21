import React from 'react';
import {NavbarWrapper} from '../navbar/navbar';
import {SidebarWrapper} from '../sidebar/sidebar';
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
            <NavbarWrapper>{children}</NavbarWrapper>
         </WrapperLayout>
      </SidebarContext.Provider>
   );
};
