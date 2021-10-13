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
        width:'100%',borderWidth:1,borderRadius:20,borderColor:'#2C2F36', height:55, padding:10,flexDirection:'row',justifyContent:'space-between',alignContent:'center'
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
        textAlign:'center',justifyContent:'center',alignSelf:'center',alignContent:'center',alignItems:'center'
    },
    view2:{
        flex:1, flexDirection:'row', textAlign:'center',justifyContent:'center',alignSelf:'center',alignContent:'center',alignItems:'center'
    },
    TextColor:{
        color:'white'
    }



});
export default styles;