import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        margin:20,
        borderBottomWidth:1,
        borderBottomColor:'#BABABA',
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
        color:"#333333",

    },
    description:{
        fontFamily:'Poppins-Italic',
        color:"#7D7D7D",
    },
    number:{
        fontSize:15,
        fontFamily:'Poppins-Light',
        marginHorizontal:20,
        color:"#7D7D7D",
    },
    btn:{
        backgroundColor:'#D9D9D9',
        height:30,
        fontSize:25,
        width:30,
        color:"#7D7D7D",
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100,
        borderWidth:1,
        borderColor:'#DBDBDB',
    },

    sign:{
        color:"#6B6B6B",
        fontSize:18,
    },
    findbtn:{
        position:'absolute',
        bottom:0,
        height:55,
        width:350,
        borderRadius:40,
        backgroundColor:'#0088FF',
        margin:35,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    findbtntext:{
        fontSize:15,
        color:'#ffffff',
        // fontWeight:'bold',
        textAlign:'center',
        marginLeft:10,
        fontFamily:'Poppins-Bold',
    },
    
    

});

export default styles;