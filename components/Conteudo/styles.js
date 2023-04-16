import { StyleSheet } from "react-native";

const stylesConteudo = StyleSheet.create({
    contentImg: {
        width:'225px',
        height:'150px',
        justifyContent:'center',
        display:'flex',
        alignItems:'center'
    },
    containerContent: {
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
    },
    title: {
        color:'black',
        fontWeight:'bold',
        fontSize:'20px',
        padding:'5px',
        marginTop:'-70px'
    },
    text: {
        color:'black',
        fontSize:'15px',
        textAlign:'center',
        padding:'10px'
    }
})

export default stylesConteudo;