import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import { useSelector } from 'react-redux';

import { Explore } from '../screens/Explore';
import { Home } from '../screens/Home';
import { NotFound } from '../screens/NotFound';
import { LoginScreen } from '../screens/authentication/LoginScreen';
import { RegisterScreen } from '../screens/authentication/RegisterScreen';

import { LetterScreen } from '../screens/LetterScreen';
import { SettingScreen } from '../screens/SettingScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { ApproveScreen } from '../screens/ApproveScreen';

import { HapticTab } from '@/components/HapticTab';
import Icon from '@/components/atoms/Icon';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { RootState } from '@/store/store';
import { BottomTabInset } from '@/constants/Colors';

const useIsAuthenticated = () => useSelector((state: RootState) => state.auth.isAuthenticated);
const useIsNotAuthenticated = () => !useSelector((state: RootState) => state.auth.isAuthenticated);

// 1. Cấu hình các Tabs
interface TabScreenConfig {
  screen: React.ComponentType<any>;
  options?: BottomTabNavigationOptions;
}

const TabScreens: Record<string, TabScreenConfig> = {
  Home: {
    screen: Home,
    options: {
      headerShown: false,
      tabBarIcon: ({ color }: { color: string }) => <Icon size={30} name="home" color={color} />,
    },
  },
  Setting: {
    screen: SettingScreen,
    options: {
      headerShown: false,
      tabBarIcon: ({ color }: { color: string }) => <Icon.Lucide size={30} name="settings" color={color} />,
    },
  }
};

const HomeTabs = createBottomTabNavigator({
  screens: TabScreens as any,
  screenOptions: {
    headerShown: false,
    tabBarButton: HapticTab,
    tabBarBackground: TabBarBackground,
    tabBarIconStyle: {
      paddingBottom: 0,
      marginVertical: 4
    },
    // tabBarStyle: { display: 'none' },//Tắt bottombar
    tabBarStyle: Platform.select({
      ios: { position: 'absolute' as const, bottom: 0, left: 0, right: 0 },
      default: {},
    }),
  },
});

// 2. Cấu hình nhóm Aut
const AuthScreens = {
  LoginScreen: { screen: LoginScreen, options: { headerShown: false } },
  RegisterScreen: { screen: RegisterScreen, options: { headerShown: false } },
};

// 3. Cấu hình nhóm No Footer (Hiển thị đè lên Bottom Tabs)
const NoFooterScreens = {
  DetailScreen: { screen: DetailScreen, options: { title: 'Chi tiết (No Footer)' } },
  ApproveScreen: { screen: ApproveScreen, options: { title: 'Phê duyệt (No Footer)' } },
  NotFound: { screen: NotFound, options: { title: '404' }, linking: { path: '*' } },
};

const RootStack = createNativeStackNavigator({
  groups: {
    AuthGroup: {
      if: useIsNotAuthenticated,
      screens: AuthScreens as any,
    },
    MainGroup: {
      if: useIsAuthenticated,
      screens: {
        HomeTabs: {
          screen: HomeTabs,
          options: { headerShown: false },
        },
        ...NoFooterScreens as any,
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
