import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        justifyContent:'center',
        
    },
     titleContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center',
        flexWrap:'wrap',
        marginLeft:25,

    },
    title:{
        fontSize:35,
        fontWeight:'600',
        color:'#ffffff',
        fontFamily:'Poppins-Italic',
    },
   
    titleText:{
        fontSize:65,
        color:'#CAD5E2',
        // fontWeight:'900',
        fontFamily:'Poppins-Bold',
        lineHeight:75,
    },
    button:{
        height:55,
        width:200,
        borderRadius:10,
        backgroundColor:'#ffffff',
        marginLeft:35,
        marginTop:25,
        justifyContent:'center',
        
    },
    btnText:{
        fontSize:14,
        color:'#758283',
        // fontWeight:'bold',
        textAlign:'center',
        fontFamily:'Poppins-Bold',
    },
    darkness:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
        justifyContent:'center',
    },
    searchbtnText:{
        fontSize:15,
        color:'#758283',
        // fontWeight:'bold',
        textAlign:'center',
        marginLeft:10,
        fontFamily:'Poppins-Bold',

    },
    searchButton:{
        position:'absolute',
        top:0,
        height:55,
        width:350,
        borderRadius:40,
        backgroundColor:'#ffffff',
        margin:35,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    


})

export default styles;