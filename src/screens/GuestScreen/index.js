import React,{useState} from 'react';
import {
    Text, 
    View,
    Pressable,
    TouchableOpacity

} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const GuestScreen = () => {

    const navigator = useNavigation();

    const [adults,setAdults] = useState(0);
    const [children,setchildren] = useState(0);
    return(
        <>
        <View style={styles.container}>

<View style={styles.leftPart}>
    <Text style={styles.head}>Adults</Text>
    <Text style={styles.description}>Age 18 or above</Text>

</View>
<View style={styles.rightPart}>
    <TouchableOpacity onPress={()=> setAdults(Math.max(0,adults-1))} style={styles.btn}><Text style={styles.sign}>-</Text></TouchableOpacity>
    <Text style={styles.number}>{adults}</Text>
    <TouchableOpacity onPress={()=> setAdults(adults+1)} style={styles.btn}><Text style={styles.sign}>+</Text></TouchableOpacity>
</View>

</View>

<View style={styles.container}>

            <View style={styles.leftPart}>
                <Text style={styles.head}>Children</Text>
                <Text style={styles.description}>Age 18 or below</Text>

            </View>
            <View style={styles.rightPart}>
                <TouchableOpacity onPress={()=> setchildren(Math.max(0,children-1))} style={styles.btn}><Text style={styles.sign}>-</Text></TouchableOpacity>
                <Text style={styles.number}>{children}</Text>
                <TouchableOpacity onPress={()=> setchildren(children+1)} style={styles.btn}><Text style={styles.sign}>+</Text></TouchableOpacity>
            </View>

         </View>


         <TouchableOpacity onPress={()=>navigator.navigate('Home-Screen', {
            screen:'Explore',
            params: {
                screen:'Search Results'
            },
         })
         } style={styles.findbtn}>
            <Text style={styles.findbtntext}>Find Places</Text>
         </TouchableOpacity>

        </>

        
         

    )
}

export default GuestScreen;


