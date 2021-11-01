import React from "react"
import { 
	StyleSheet, 
	View, 
	Text,
	Image,
	TouchableOpacity,
	ScrollView
} from "react-native"
import form from "../Form/index.js"
import Vip from "../Home_Screen/image/vip.png"

export default function feed (){
	return(
		<View>
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			<View>
				<TouchableOpacity style={styles.f1} onPress={() => {}}>
        			<Text style={styles.t}>ENCONTRE A MELHOR OFICINA PARA O SEU CARRO</Text>
      			</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity style={styles.f2} onPress={() => {}}>
        			<Text style={styles.t}>A PESSOA CERTA PARA DAR UMA COR A MAIS NO SEU LAR</Text>
      			</TouchableOpacity>
			</View>	
			<View>
				<TouchableOpacity style={styles.f3} onPress={() => {}}>
        			<Text style={styles.t}>SE PREPARE PARA AS PROVAS COM O REFORÇO CERTO</Text>
      			</TouchableOpacity>
			</View>	
			<View>
				<TouchableOpacity style={styles.f4} onPress={() => {}}>
        			<Text style={styles.t}>SUA FESTA BONITA E MAIS ANIMADA COM ESSAS DECORAÇÕES</Text>
      			</TouchableOpacity>
			</View>	
			<View>
				<TouchableOpacity style={styles.f5} onPress={() => {}}>
        			<Text style={styles.t}>PRECISANDO DE UMA REFORMA? AQUI TEM QUEM PODE TE AJUDAR</Text>
      			</TouchableOpacity>
			</View>	
			<View>
				<TouchableOpacity style={styles.f6} onPress={() => {}}>
        			<Text style={styles.t}>FAZ A POSE, OLHE O FLASH ESSE PESSOAL SABE PEGAR O MELHOR ANGULO</Text>
      			</TouchableOpacity>
			</View>	
		</ScrollView>
		<View>
			<TouchableOpacity style={styles.v} onPress={() =>{} }>
				<Image style={styles.img} source={Vip}/>
			</TouchableOpacity>
		</View>
		</View>
	);
}

const styles = StyleSheet.create({
	t:{
		padding: 8,
		fontSize: 16,
		fontWeight:'bold',
		color: 'white',
	},	
	f1:{
		backgroundColor: '#41A7FF',
		height: 150,
		width: 150,
		margin: 5,
		borderRadius: 10,
		fontWeight: "bold",

	},
	f2:{
		backgroundColor: '#FABD8B',
		height: 150,
		width: 150,
		margin: 5,
		borderRadius: 10,
	},
	f3:{
		backgroundColor: '#F5D41A',
		height: 150,
		width: 150,
		margin: 5,
		borderRadius: 10,
	},
	f4:{
		backgroundColor: '#F55F82',
		height: 150,
		width: 150,
		margin: 5,
		borderRadius: 10,
	},
	f5:{
		backgroundColor: '#FABD8B',
		height: 150,
		width: 150,
		margin: 5,
		borderRadius: 10,
	},
	f6:{
		backgroundColor: '#41A7FF',
		height: 150,
		width: 150,
		margin: 5,
		borderRadius: 10,
	},
	t1:{
		fontWeight: 'bold',
		fontSize: 18,
	},
	v:{
		justifyContent: 'center',
		alignItems: 'center',
		width:'100%',
		height:70,
		backgroundColor:'#FBF215',
	},
	img:{
		width: 250,
		height: 50,
	},
})