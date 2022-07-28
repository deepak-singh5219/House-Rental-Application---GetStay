import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        paddingHorizontal:25,

    },
    searchInput:{
        color:'#ffffff',
        fontSize:18,
        marginVertical:20,
        fontFamily:'Poppins-Light',
        padding:5,
        alignItems:'center',
    },
    resultContainer:{

        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:15,
        marginVertical:5,
        borderBottomWidth:1,
        borderBottomColor:'#2b2b2b'
        
    },
    iconContainer:{

        height:45,
        width:45,
        borderRadius:10,
        backgroundColor:'#474747',
        alignItems:'center',
        justifyContent:'center',
        marginRight:20,
        
    
        

    },
    textfield:{
        fontFamily:'Poppins-Italic',
        

    },
    

});

export default styles;