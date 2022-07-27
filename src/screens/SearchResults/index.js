import React from 'react';
import {View, FlatList} from "react-native";
import Post from '../../components/Posts';
import feed from '../../../assets/images/Airbnb Assets/Airbnb Assets/feed';

const SearchResultScreen = () => {
    return(
        <View>
            <FlatList data={feed}
            renderItem={({item})=> <Post data={item}/>}
            />

        </View>
    )
}

export default SearchResultScreen;