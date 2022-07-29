import React,{useState} from 'react';
import {
    Text, 
    View, 
    FlatList,
    TextInput,
    Pressable
} from 'react-native';
import styles from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import Search from '../../../assets/data/Search';
import { useNavigation } from '@react-navigation/native';



const SearchScreen = ()=> {

    const navigation = useNavigation();

    const [input,setInput] = useState('');
    return(
        <View style={styles.container}>
            <TextInput style={styles.searchInput} 
            value={input}
            onChangeText={setInput}
            placeholder="Where are you going?"/>

            <FlatList data={Search} renderItem={({item})=> (
                <Pressable onPress={() => navigation.navigate('Guests')} style={styles.resultContainer}>
                    <View style={styles.iconContainer}>
                        <Entypo name={"location-pin"} size={30}/>
                    </View>
                    <Text style={styles.textfield}>
                        {item.description}

                    </Text>

                </Pressable>
            ) }/>



        </View>
    )
}


export default SearchScreen;