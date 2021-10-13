import { ScaledSheet } from 'react-native-size-matters'
import color from '../../../util/color'
import font from '../../../assets/fonts'

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        padding: "13@s",

    },

    contentContainer: {
        alignItems: 'center',
        marginTop: '30@vs',
    },
    mainView:{
        flexDirection:'row',justifyContent:'space-between', paddingTop:50
    },
    sendText:{
        fontWeight:'bold', fontSize:15,padding:10
    },
    sendViewIn:{
        width:'100%',borderWidth:1,borderRadius:20,borderColor:'#FF6B00', height:90, padding:10,flexDirection:'row',justifyContent:'space-between'
    },
    secondView:{
        flexDirection:'row',justifyContent:'space-between',paddingTop:30
    },
    Assests:{
        fontWeight:'bold', fontSize:15,padding:10
    },
    balance:{
        fontWeight:'bold', fontSize:15,padding:10,color:'gray'
    },
    viewAssests:{
        width:'100%',borderWidth:1,borderRadius:20,borderColor:'gray', height:55, padding:10,flexDirection:'row',justifyContent:'space-between',alignContent:'center'
    },
    doller:{
        marginLeft:'-10%',justifyContent:'center',width:'50%'
    }, 
    dollerText:{
        fontWeight:'bold', fontSize:15,color:'gray'
    }, 
    Image:{
        width: 40, height: 40, justifyContent:'flex-end'
    },  
    shadowIcons:{
        
            position:'relative',
            justifyContent:'center',
            alignItems:'center',
           //  borderWidth:1,
            borderRadius:50,
            width:34,
            height:34,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0,
            shadowRadius: 4.65,
            backgroundColor:'white',
            elevation: 8,
           
    },  
    name: {
        fontFamily: font.bold,
        color: color.black,
        marginTop: '20@vs',
        fontSize: '16@ms',

    },
    name: {
        fontFamily: font.bold,
        color: color.black,
        marginTop: '20@vs',
        fontSize: '16@ms',

    },
    tag: {
        textAlign: 'center',
        marginTop: '10@vs',
        marginBottom: '20@vs',
        marginHorizontal: '30@s',
        fontFamily: font.regular,
        color: color.grey
    },
    icon: {
        resizeMode: 'contain',
        width: '25@s',
        height: '25@vs',
        marginEnd: '15@s'
    },
    FieldText: {
        color: color.black,
        fontFamily: font.bold

    },
    FieldSecText: {
        color: color.primary,
        fontFamily: font.regular

    },
    userIcon: {
        color: color.grey,
        marginHorizontal: "8@s",
        fontSize: '16@ms'
    },
    view1:{
        textAlign:'center',justifyContent:'center',alignSelf:'center',alignContent:'center',alignItems:'center'
    },
    scrollView: {
        height: '100%',
        width: '100%',
      },
      MultiItems: {
        // marginTop:30,
        fontFamily: 'Poppins',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', //changed value of alignItems
    },
    circleView: {
        width: 50,
        height: 50,
        backgroundColor: '#ee9f34',
        borderRadius:30,
    },
    view1:{
        justifyContent:'flex-start',width:'70%',justifyContent:'center'
    },
    view2:{
        width:'75%',justifyContent:'center'
    },
    view3:{
        justifyContent:'flex-start',width:'70%',justifyContent:'center'
    },
    TextColor:{
        color:'white'
    },
    TextStyle:{
        paddingLeft:10,color:'#929292',fontSize:18,paddingTop:20
    }



});
export default styles;