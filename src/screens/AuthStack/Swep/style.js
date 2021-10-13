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
        width:'100%',borderWidth:1,borderTopLeftRadius:20,borderTopRightRadius:20,borderColor:'#E5E5E5', height:120, padding:10,flexDirection:'row',justifyContent:'space-between'
    },
    sendViewIn1:{
        width:'100%',borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1,borderBottomLeftRadius:20,borderBottomRightRadius:20,borderColor:'#E5E5E5', height:120, padding:10,flexDirection:'row',justifyContent:'space-between'
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
        width:'100%',borderWidth:1,borderRadius:20,borderColor:'#FF6B00', height:90, padding:10,flexDirection:'row',justifyContent:'space-between',alignContent:'center'
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
        marginHorizontal: '20@s',
        fontFamily: font.regular,
        color: color.grey
    },
    userIcon: {
        color: color.black,
        marginHorizontal: "8@s",
        fontSize: '16@ms'
    },
    view1:{
        textAlign:'center',justifyContent:'center',alignSelf:'center',alignContent:'center',alignItems:'center'
    },



});
export default styles;