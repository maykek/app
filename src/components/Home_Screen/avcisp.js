import React from "react"
import{
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity
} from "react-native"

export default function vip (){
	return(

		<View>
			<TouchableOpacity style={styles.v} onPress={() =>{} }>
				<Text style={styles.t1}>SEJA VIP!</Text>
			</TouchableOpacity>
		</View>

		);
}
	const styles = StyleSheet.create({
		t1:{
			fontWeight: 'bold',
			fontSize: 18,
		},
		v:{
			justifyContent: 'center',
			alignItems: 'center',
			width:'100%',
			height:'45%',
			backgroundColor:'#FBF215',
		},
	})

