import { StyleSheet } from "react-native";
//styling
export default StyleSheet.create({
    //you can open backgroundcolors that i have closed to see the view boxes
    card_main: {
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    image_holder: {
       // backgroundColor: 'yellow',
        margin: 10,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 100,
    },
    title_holder: {
        margin:5,
    },
    title_text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 23,
    },
    card_body: {
        flex:1,
        //backgroundColor: 'green',
        margin: 5,
    },
    artist_text: {
        color: 'black',
        fontWeight: 'bold',
    },
    album_text: {
        color: 'black',
    },
    info_holder: {
        flexDirection: 'row',
        //backgroundColor: 'blue',
    },
    info2_holder: {
        flex:1,
        //flexDirection: 'row',
        //backgroundColor: 'orange',
    },
    year_text: {
        marginLeft: 10,
    },
    soldout_holder: {
        textAlign: 'center',
        //backgroundColor: 'pink',
    },
    soldout_text: {
        color: 'red',
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        padding: 5,
    },
    album_text:{
        marginTop:5,
        marginLeft:5,
    },
});