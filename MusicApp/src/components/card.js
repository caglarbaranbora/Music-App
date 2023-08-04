import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

const Card = ({music}) => {
//main structure
    const isAvaliable = music.isSoldOut;
return(
        <View style = {styles.card_main}>
            <View style ={styles.image_holder}>
               <Image style={styles.image} source={{uri: music.imageUrl}}/>
            </View>
            <View style={styles.card_body}>
                <View style= {styles.title_holder}>
                    <Text style = {styles.title_text}>{music.title}</Text>
                </View>
                <View style = {styles.info_holder}>
                <Text style = {styles.artist_text}> {music.artist}</Text>
                <Text style = {styles.year_text}>{music.year}</Text>
                    <View style = {styles.info2_holder}>
                    </View>
                    
                    <View style = {styles.soldout_holder}>
                        {isAvaliable && (
                        <Text style = {styles.soldout_text}>SOLD OUT</Text>
                        )}
                    </View>
                </View>
                <Text style = {styles.album_text}>{music.album}</Text>
            </View>
        </View>
    );
}

export default Card;