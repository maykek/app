import React from "react"
import { StyleSheet, View, TextInput, Text, Button} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Title from '../Title';

const Separator = () =>(
	<View style={styles.separator}/>
);


export default function Form (navigation){
	return(

		<View>
			<Title/>
			<View style={styles.a}>
				<Text style={styles.t1}>Email ou Apelido</Text>
				<TextInput style={styles.inp}
				
				/>
				<View><Separator/></View>
				<Text style={styles.t1}>Senha</Text>
				<TextInput style={styles.inp}>
				</TextInput>
				<View><Separator/></View>
				<Button style={styles.button}
				title="Esqueceu a senha?"
				/>
				<Button style={styles.button}
					title='Novo usuário?'
				/>
				<View><Separator/></View>
				<Button
					title='Entrar'
					onPress={()=>navigation.navigate('home')}
				/>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	a:{
		backgroundColor:"#f9990A",
		paddingTop: 80,
		alignItems: 'center', 
		width: '100%',
		height: '100%',
		bottom: 0,
		marginTop: 100,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,

	},
	t1:{
		textAlign: 'left',
		fontWeight: 'bold',
		color: '#ffffff' 
	},
	inp:{
		borderRadius: 30,
		backgroundColor: 'white',
		padding: 10,
		width: '50%',
	},
	button:{
		borderRadius: 30,
		backgroundColor: 'red',
		padding: 10,
		width: '50%',
	},
	separator: {
    	marginVertical: 8,
    	borderBottomWidth: StyleSheet.hairlineWidth,
  	},
});


