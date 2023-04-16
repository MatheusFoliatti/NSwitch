import { StyleSheet } from "react-native";

const stylesTopo = StyleSheet.create({
    contentImg: {
        justifyContent:'center',
        display:'flex',
        alignItems:'center',
        padding:'50px'
    },
    containerTopo: {
        backgroundColor:'red',
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
        position:'absolute',
        marginTop:'-510px'
    },
    title: {
        color:'white',
        fontWeight:'bold',
        fontSize:'20px',
        padding:'15px'
    }
})

export default stylesTopo;