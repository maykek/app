import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  StyleSheet
} from 'react-native';
import Feed from './feed.js'
import Vip from '../Home_Screen/avcisp.js'
import img1 from './image/img1.png'

//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home_Screen () {
  return (
    <View>
      <View style={styles.a1}>
        <View style={styles.p}
        title='Perfil'
        TextColor = 'black'
        />
          <TextInput style={styles.inp}
          textAlign = 'center'
          placeholder = "pesquisar"
          />
        <View style={styles.box}>
          <Image style={styles.img}
          source={img1}
          />
        </View>
      </View>

      <View>
        <Feed/>
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  a1:{
    height: 145,
    backgroundColor:'#f9990A',
    alignItems: 'center',
    paddingTop: 40,
    flexDirection: 'row',

  },
  p:{
    borderRadius: 30,
    backgroundColor: 'white',
    padding: 5,
    margin: 10,
    marginRight :40,
    width: 60,
    height: 60
  },
  a:{
    backgroundColor:"#f5f5f5",
    paddingTop: 80,
    alignItems: 'center', 
    width: '100%',
    height: '100%',
    bottom: 0,
    marginTop: 50,
  },
  inp:{
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: 'white',
    padding: 10,
    width: '45%',
  },
  img:{
    width: 25,
    height:25,
  },
  box:{
    backgroundColor: 'white',
    height: 36,
    width:36,
    justifyContent: 'center',
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
  }
})

/*const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/