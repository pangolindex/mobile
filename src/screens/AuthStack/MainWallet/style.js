import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF6B00',
        alignItems: 'center',
        justifyContent: 'center',
      },
    text: {
      color: 'white'
    },
    scrollView: {
        height: '100%',
        width: '100%',
      },
      Token:{
        /* Tokens */
        position: 'absolute',
        textAlignVertical:'center',
        marginTop:50,
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent:'center',
        /* identical to box height */
        textAlign: "center",
        alignSelf:'center',
        /* white */
        color: '#FFFFFF'
    },

    Price:{
        marginTop: 80,
        fontFamily: 'Poppins',
        fontSize: 40,
        fontWeight: 'bold',
        justifyContent:'center',
        alignSelf:'center',
        /* white */
        color: '#FFFFFF'
    },
    mainWallet:{
        fontFamily: 'Poppins',
        fontSize: 15,
        justifyContent:'center',
        /* identical to box height */
        textAlign: "center",
        alignSelf:'center',
        /* white */
        color: '#FFFFFF',
    },

    MultiItems: {
        // marginTop:30,
        fontFamily: 'Poppins',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', //changed value of alignItems
        paddingBottom:20
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