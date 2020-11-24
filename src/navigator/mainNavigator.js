import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen314922Navigator from '../features/CopyOfBlankScreen314922/navigator';
import BlankScreen314921Navigator from '../features/BlankScreen314921/navigator';
import BlankScreen114901Navigator from '../features/BlankScreen114901/navigator';
import BlankScreen014889Navigator from '../features/BlankScreen014889/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen314922: { screen: CopyOfBlankScreen314922Navigator },
BlankScreen314921: { screen: BlankScreen314921Navigator },
BlankScreen114901: { screen: BlankScreen114901Navigator },
BlankScreen014889: { screen: BlankScreen014889Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
