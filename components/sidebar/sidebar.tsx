import React, {useReducer, useState} from 'react';
import {Box} from '../styles/box';
import {Sidebar} from './sidebar.styles';
import {Avatar, Tooltip} from '@nextui-org/react';
import {Flex} from '../styles/flex';
import {AcmeIcon} from '../icons/acme-icon';
import {CompaniesDropdown} from './companies-dropdown';
import {HomeIcon} from '../icons/sidebar/home-icon';
import {PaymentsIcon} from '../icons/sidebar/payments-icon';
import {BalanceIcon} from '../icons/sidebar/balance-icon';
import {AccountsIcon} from '../icons/sidebar/accounts-icon';
import {CustomersIcon} from '../icons/sidebar/customers-icon';
import {ProductsIcon} from '../icons/sidebar/products-icon';
import {ReportsIcon} from '../icons/sidebar/reports-icon';
import {DevIcon} from '../icons/sidebar/dev-icon';
import {ViewIcon} from '../icons/sidebar/view-icon';
import {SettingsIcon} from '../icons/sidebar/settings-icon';
import {CollapseItems} from './collapse-items';
import {SidebarItem} from './sidebar-item';
import {SidebarMenu} from './sidebar-menu';
import {FilterIcon} from '../icons/sidebar/filter-icon';
import {useSidebarContext} from '../layout/layout-context';

export const SidebarWrapper = () => {
   const {collapsed, setCollapsed} = useSidebarContext();
   const [activeElement, setActiveElement] = useState(0);

   const updateActiveElement = (id: number) => {
      if (activeElement !== id) {
         setActiveElement(activeElement !== id ? id : -1);
      }
   };
   return (
      <Box
         as="aside"
         css={{
            height: '100vh',
            zIndex: 202,
            position: 'sticky',
            top: '0',
         }}
      >
         {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}

         <Sidebar collapsed={collapsed}>
            <Sidebar.Header>
               <AcmeIcon />
               <CompaniesDropdown />
            </Sidebar.Header>
            <Flex
               direction={'column'}
               justify={'between'}
               css={{height: '100%'}}
            >
               <Sidebar.Body className="body sidebar">
                  <SidebarItem
                     title="Home"
                     icon={<HomeIcon />}
                     isActive={0 === activeElement}
                     onClick={() => updateActiveElement(0)}
                     href="/"
                  />
                  <SidebarMenu title="Main Menu">
                     <SidebarItem
                        isActive={1 === activeElement}
                        onClick={() => updateActiveElement(1)}
                        title="Payments"
                        icon={<PaymentsIcon />}
                     />
                     <CollapseItems
                        icon={<BalanceIcon />}
                        items={['Banks Accounts', 'Credit Cards', 'Loans']}
                        title="Balances"
                     />
                     <SidebarItem
                        isActive={2 === activeElement}
                        onClick={() => updateActiveElement(2)}
                        title="Accounts"
                        icon={<AccountsIcon />}
                        href="accounts"
                     />
                     <SidebarItem
                        isActive={3 === activeElement}
                        onClick={() => updateActiveElement(3)}
                        title="Customers"
                        icon={<CustomersIcon />}
                     />
                     <SidebarItem
                        isActive={4 === activeElement}
                        onClick={() => updateActiveElement(4)}
                        title="Products"
                        icon={<ProductsIcon />}
                     />
                     <SidebarItem
                        isActive={5 === activeElement}
                        onClick={() => updateActiveElement(5)}
                        title="Reports"
                        icon={<ReportsIcon />}
                     />
                  </SidebarMenu>

                  <SidebarMenu title="General">
                     <SidebarItem
                        isActive={6 === activeElement}
                        onClick={() => updateActiveElement(6)}
                        title="Developers"
                        icon={<DevIcon />}
                     />
                     <SidebarItem
                        isActive={7 === activeElement}
                        onClick={() => updateActiveElement(7)}
                        title="View Test Data"
                        icon={<ViewIcon />}
                     />
                     <SidebarItem
                        isActive={8 === activeElement}
                        onClick={() => updateActiveElement(8)}
                        title="Settings"
                        icon={<SettingsIcon />}
                     />
                  </SidebarMenu>
               </Sidebar.Body>
               <Sidebar.Footer>
                  <Tooltip content={'Settings'} rounded color="primary">
                     <SettingsIcon />
                  </Tooltip>
                  <Tooltip content={'Adjustments'} rounded color="primary">
                     <FilterIcon />
                  </Tooltip>
                  <Tooltip content={'Profile'} rounded color="primary">
                     <Avatar
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        size={'sm'}
                     />
                  </Tooltip>
               </Sidebar.Footer>
            </Flex>
         </Sidebar>
      </Box>
   );
};
