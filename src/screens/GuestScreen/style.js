import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        margin:20,
        borderBottomWidth:1,
        borderBottomColor:'#2b2b2b',
        paddingVertical:8,
        paddingHorizontal:5,
        
    },
    leftPart:{

    },
    rightPart:{
        display:'flex',
        flexDirection:'row',

    },
    head:{
        fontSize:17,
        fontFamily:'Poppins-Bold',

    },
    description:{
        fontFamily:'Poppins-Italic'
    },
    number:{
        fontSize:15,
        fontFamily:'Poppins-Light',
        marginHorizontal:20,
    },
    btn:{
        backgroundColor:'#474747',
        height:30,
        fontSize:25,
        width:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100,
        borderWidth:1,
        borderColor:'#666565',
    },
    

});

export default styles;