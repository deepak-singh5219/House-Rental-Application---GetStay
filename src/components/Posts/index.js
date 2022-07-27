import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Pressable,
    Image
} from 'react-native';
import styles from './styles';

const Post = ({data}) => {
    return (
        <View style={styles.container}>
            <Image
            style={styles.image} source={{uri:data.image}}/>

            <Text style={styles.details}>{data.type}</Text>
            <Text style={styles.description}>
                {data.title}
            </Text>
            <View style={styles.price}>
                <Text style={styles.oldprice}>${data.oldPrice}</Text>
                <View style={styles.newpriceContainer}>

                <Text style={styles.newprice}>${data.newPrice}</Text>
                <Text style={styles.month}>/month</Text>
                </View>
            </View>

            <Text style={styles.totalprice}>Total:${data.totalPrice}</Text>
            


        </View>
    )
}


export default Post;