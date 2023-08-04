import React from "react";
import { TextInput, View } from "react-native";
import styles from './SearchStyle';

const SearchBar = (props) => {
    return(
        <View style= { styles.container}>
            <TextInput 
                placeholder="Ara..."
                onChangeText={props.handleSearch}//returns the value which the user have wrote as string
            />
        </View>
    );
}
export default SearchBar;