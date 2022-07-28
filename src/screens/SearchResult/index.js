import React,{useState} from 'react';
import {
    Text, 
    View, 
    FlatList,
    TextInput
} from 'react-native';
import styles from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import Search from '../../../assets/data/Search';



const SearchScreen = ()=> {

    const [input,setInput] = useState('');
    return(
        <View style={styles.container}>
            <TextInput style={styles.searchInput} 
            value={input}
            onChangeText={setInput}
            placeholder="Where are you going?"/>

            <FlatList data={Search} renderItem={({item})=> (
                <View style={styles.resultContainer}>
                    <View style={styles.iconContainer}>
                        <Entypo name={"location-pin"} size={30}/>
                    </View>
                    <Text style={styles.textfield}>
                        {item.description}

                    </Text>

                </View>
            ) }/>



        </View>
    )
}


export default SearchScreen;