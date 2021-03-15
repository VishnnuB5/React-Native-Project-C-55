import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { Audio } from 'expo-av';

class SoundBox1 extends Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri:'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-music-bed_z1y16Brd_NWM.mp3'},
      { shouldPlay: true },
      alert('Play Sound 1')
    );
  };
  render() {
    return <Button color="red" title="Sound 1" onPress={this.playSound} />
  }
}

class SoundBox2 extends Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri:'http://soundcavern.free.fr/guitar/Acoustic_Guitar_Chords%20-%20Emajup.wav'},
      { shouldPlay: true },
      alert('Play Sound 2')
    );
  };
  render() {
    return <Button color="orange" title="Sound 2" onPress={this.playSound} />
  }
}

class SoundBox3 extends Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri:'https://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Drum%20Roll%20007-3033-Free-Loops.com.mp3'},
      { shouldPlay: true },
      alert('Play Sound 3')
    );
  };
  render() {
    return <Button color="green" title="Sound 3" onPress={this.playSound} />
  }
}

class SoundBox4 extends Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri:'http://cmp.music.illinois.edu/beaucham/sounds/misc_snds/tpt.D4.m4c.wav'},
      { shouldPlay: true },
      alert('Play Sound 4')
    );
  };
  render() {
    return <Button color="blue" title="Sound 4" onPress={this.playSound} />
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ width: 200, height: 150, marginLeft: 70, marginTop: 100 }}>
        <SoundBox1 />
        <Text> </Text>
         <SoundBox2 />
        <Text> </Text>
         <SoundBox3 />
        <Text> </Text>
         <SoundBox4 />
        <Text> </Text>
        <Button color="pink" title="Stop Sound" onPress={()=>{
          Audio.setIsEnabledAsync(false);
        }} />
        <Text> </Text>
        <Text>My First React Component</Text>
      </View>
    );
  }
}
