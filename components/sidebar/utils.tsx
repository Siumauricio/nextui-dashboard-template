import {CalendarIcon} from '../icons/calendar-icon';
import {CampaignsIcons} from '../icons/campaigns-icon';
import {Community} from '../icons/community';
import {DashboardIcon} from '../icons/dashboard-icon';
import {FinancesIcon} from '../icons/finances-icon';
import {InboxIcon} from '../icons/inbox-icon';
import {JobIcon} from '../icons/job-icon';
import {MessageIcons} from '../icons/messages-icon';
import {SettingsIcons} from '../icons/settings-icon';
import {ShopIcon} from '../icons/shop-icon';
import {HomeIcon} from '../icons/sidebar/home-icon';
import {UtilityIcon} from '../icons/utility-icon';
import {Svg} from '../styles/svg';

export const sidebarItems = [
   {
      title: 'Home',
      icon: <HomeIcon />,
      items: [],
   },
   {
      TopTitle: 'Main Menu',
      title: 'Dashboard',
      icon: <DashboardIcon />,
      items: ['Main', 'Analytics', 'Sales'],
   },
   {
      title: 'E-commerce',
      icon: <ShopIcon />,
      items: [
         'Customers',
         'Orders',
         'Invoices',
         'Shop',
         'Shop 2',
         'Single Product',
         'Cart',
         'Pay',
      ],
   },
   {
      title: 'Comunnity',
      icon: <Community />,
      items: ['Users', 'User Profile', 'Feed', 'Forum', 'Meetups'],
   },
   {
      title: 'Finances',
      icon: <FinancesIcon />,
      items: ['Cards', 'Transactions', 'Transaction Details'],
   },
   {
      title: 'Job Board',
      icon: <JobIcon />,
      items: ['Listing', 'Job Post', 'Company Profile'],
   },
   {
      title: 'Messages',
      icon: <MessageIcons />,
      items: [],
   },
   {
      title: 'Inbox',
      icon: <InboxIcon />,
      items: [],
   },
   {
      title: 'Calendar',
      icon: <CalendarIcon />,
      items: [],
   },
   {
      TopTitle: 'General',
      title: 'Campaigns',
      icon: <CampaignsIcons />,
      items: [],
   },
   {
      title: 'Settings',
      icon: <SettingsIcons />,
      items: [
         'My Account',
         'My Notifications',
         'Connected Apps',
         'Plans',
         'Billing & Invoices',
      ],
   },
   {
      title: 'Utility',
      icon: <UtilityIcon />,
      items: ['Changelog', 'Roadmap', 'FAQs', 'Empty State', '404'],
   },
];
