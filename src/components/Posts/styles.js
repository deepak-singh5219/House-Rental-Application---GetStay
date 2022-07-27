import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        marginVertical:2,
        marginHorizontal:20,
        padding:8,
        width:'90%',
        backgroundColor:'#CAD5E2',
        borderRadius:12,
    },
    image:{
        width:'100%',
        aspectRatio:2/1,
        resizeMode:'cover',
        borderRadius:15,
    },

    details:{
        fontFamily:'Poppins-Italic',
        marginHorizontal:8,
        marginVertical:4,
        color:'#5b5b5b',
        
    },
    description:{
        fontFamily:'Poppins-Light',
        fontSize:15,
        color:'#000000',
        marginHorizontal:8,
        lineHeight:16,

    },
    price:{
        fontSize:14,
        fontFamily:'Poppins-Light',
        marginHorizontal:8,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:150,
        letterSpacing:2,
        
    },
    oldprice:{
        color:'#5b5b5b',
        
        textDecorationLine:'line-through',
        fontFamily:'Poppins-Light',
        fontSize:15,
        justifyContent:'space-between',
    },
    newprice:{
      fontFamily:'Poppins-Bold',
      fontSize:18,
      color:'#000000',
      margin:2,
    },
    newpriceContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },

    totalprice:{
        fontFamily:'Poppins-Italic',
        fontSize:16,
        marginHorizontal:8,
        marginVertical:0,
        lineHeight:16,
        color:'#5b5b5b',
        fontWeight:'bold',
    },
    month:{
        color:'#000000',
        fontFamily:'Poppins-Light',
    }
});


export default styles;

