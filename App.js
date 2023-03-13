import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/Drawer';

import familia1 from './Components/familia1';
import familia2 from './Components/familia2';
import familia3 from './Components/familia3';
import familia4 from './Components/familia4';
import familia5 from './Components/familia5';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Entypo' component={familia1}/>
        <Drawer.Screen name='AntDesign' component={familia2}/>
        <Drawer.Screen name='EvilIcons' component={familia3}/>
        <Drawer.Screen name='Feather' component={familia4}/>
        <Drawer.Screen name='Fontisto' component={familia5}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}