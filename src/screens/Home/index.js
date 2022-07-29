import React from 'react';
import {

    Text,
    View,
    ImageBackground,
    Pressable,
    TouchableOpacity,

} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation();
    return(
        
        <View>
            <ImageBackground source={require('../../../assets/images/HomeScreen.jpg')} style={styles.image}>

               
           
            <View style={styles.darkness}>

            <Pressable onPress={()=> navigation.navigate('Destination Search')} style={styles.searchButton}>

                <Fontisto name='search' size={25} color={'#f15454'} />

                <Text style={styles.searchbtnText}>Where are you going?</Text>
                
                </Pressable>

            <View style={styles.middleContainer}>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome To</Text>
            <Text style={styles.titleText}>GetStay</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>console.warn('Button pressed')}>
               <Text style={styles.btnText}>Explore Nearby Stays</Text>
            </TouchableOpacity>

            </View>
            </View>
            
            </ImageBackground>
        </View>

    )
}

export default HomeScreen;