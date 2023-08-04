import React, {useState, } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import Card from "./src/components/card";
import music_data from './music-data.json';
import SearchBar from "./src/components/search_bar/SearchBar"; 

function App(){

  const [list, checkList] = useState(music_data);

  const itemRenderer = ({item}) => <Card music = {item}/>
  const cardSeperator = () => <View style = {styles.seperator}/>
  
  const inputSearch = text => {

    const checkedList = music_data.filter(song => {

      const checkedText = text.toLowerCase();//user input text tolowecases equal search
      const currentTitle = song.title.toLowerCase();//search filter for music title
      const currentSinger = song.artist.toLowerCase();//search filter for singer
      const currentAlbum = song.album.toLowerCase();//search filter for album

      return currentTitle.indexOf(checkedText) > -1 || 
      currentSinger.indexOf(checkedText) > -1;
      
    });
    checkList(checkedList);
  };

  return(
    <SafeAreaView style ={styles.container}>
      <SearchBar
          handleSearch = {inputSearch}
      />
    <FlatList
      ItemSeparatorComponent={cardSeperator}//seperate the cards
      data={list}
      renderItem={itemRenderer}    
      keyExtractor={(item) => item.id.toString()}  
    />
    </SafeAreaView>
  );
}
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#e0e0e0',
    },

    seperator: { 
      height: 5,
    },

  });

export default App;