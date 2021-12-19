import * as React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Dimensions, Linking } from 'react-native';
import {MaterialCommunityIcons, AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-web';

const Layout = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,

};

const Colors = {
  theme: "#24685b",
  white: "#FFF",
  greyish: "#a4a4a4",
};

const skillIcons = [
  "language-html5",
  "language-css3",
  "language-javascript",
  "language-Flutter",
  "language-java",
  "language-Python"
];

const projects = [
  {
    name:"Expense Tracker",
    icon:"credit-card"
  },
  {
    name:"Todo App",
    icon:"pen"
  },
  {
    name:"Card Game",
    icon:"card"
  },
  {
    name:"KalpaMart-shopping App",
    icon:"shopping"
  },
];

export default function App(props) {
  return (
    <ScrollView style={{flex: 1}}>
      <StatusBar translucent={false} barStyle="light-content" backgroundColor={Colors.theme} />
      <View style={styles.status}>
        <View style={styles.icon}>
        <SimpleLineIcons color={Colors.white} name= 'equalizer' size={20} style={styles.lineIcon}/>
       </View>

        <View style={styles.view}>
          <Image source={require("./assets/gayatri.jpg")} style={styles.image}/>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.text}>Gayatri Gharti Magar</Text>
            <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 2, height: 24, 
                  width: 170, borderRadius: 5, backgroundColor: '#C0C0C05c', marginVertical: 4}}>
            <Text style={styles.text1}>Software Engineer</Text>
            </View>
            
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 4}}>
                <AntDesign color={Colors.white} name='education' size={15}/>
                <Text style={{color: Colors.white, fontWeight: 100, marginHorizontal: 5}}>Himalaya College of Engineering</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 4}}>
                <AntDesign color={Colors.white} name='location' size={15}/>
                <Text style={{color: Colors.white, fontWeight: 100, marginHorizontal: 5}}>Kathmandu, Nepal</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 4}}>
                <AntDesign color={Colors.white} name='mail' size={15}/>
                <Text style={{color: Colors.white, fontWeight: 100, marginHorizontal: 5}}>unikname19@gmail.com</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 4}}>
                <AntDesign color={'#6495ED'} name='download' size={15}/>
                <Text style={{color: '#6495ED', fontWeight: 100, marginHorizontal: 5, fontWeight: 600}}>Download Resume</Text>
            </View>
          </View> 
        </View>

      </View>

      <View style={styles.bioView}>
        <View style={styles.bioLine}>
          <Text style={{fontWeight: 500}}>Bio</Text>
          <AntDesign name='user' size={20}/>
        </View>
        <View style={styles.bioTextView}>
          <Text style={styles.bioText}>
          I am Gayatri Gharti Magar , persuaded my BE in  Computer . 
          As I am in the procedure of finding the right job, I have 
          identified your company and find it the right place as I 
          will have the scope of being a part of the technical team, 
          where I can execute my knowledge which is my area of interest.
          </Text>
        </View>
      </View>

      <View style={{
        backgroundColor: '#F5F5F5',
        marginHorizontal: 32,
        padding: 20,
        borderRadius: 20,
        elevation: 8,
        marginBottom: 16}}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 8}}>
          <Text style={{fontWeight: 500}}>Skills</Text>
          <AntDesign name='edit' size={20}/>
        </View>

        <ScrollView horizontal style={{marginVertical: 8}}>
          {
            skillIcons.map(skill => (
              <View style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                borderWidth: 2,
                borderColor: Colors.theme,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 5,
              }}>
              <MaterialCommunityIcons
                name = {skill}
                size={30}
                color={Colors.theme}  
                />
                </View>
            ))
          }
        </ScrollView>  
      </View>

      <ScrollView horizontal>
      {
        projects.map(project => (
          <View key={project.name} style={{backgroundColor: Colors.theme, marginHorizontal: 8, padding: 20,
                borderRadius: 18, marginBottom: 16, alignItems: 'center', width: Layout.width * 0.5}}>
            <Text style={{fontSize: 20, color: Colors.white}}>{project.name}</Text>
            <MaterialCommunityIcons  style={{color: Colors.white, alignItems: 'center'}} name={project.icon} size={150}/>
            <TouchableOpacity>
              <View style={{backgroundColor: Colors.white, borderRadius: 10, paddingVertical: 10, width: 100, 
                            alignItems: 'center'}}>
                <Text style={{color: Colors.theme}}>View Project</Text>
              </View>    
            </TouchableOpacity>
          </View>
        ))
      }
      </ScrollView>

      <View style={{
        backgroundColor: '#F5F5F5',
        marginHorizontal: 32,
        marginVertical: 14,
        padding: 20,
        borderRadius: 20,
        elevation: 8,
        marginBottom: 16}}>
        <View style={{
          marginVertical: 8}}>
          <Text style={{fontWeight: 500}}>Find Me on:</Text>
        </View>

        <View style={{marginVertical: 8, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row'}}>
        <Text onPress={() => {Linking.openURL('https://github.com/gayatri195')}} 
              style={{textDecorationLine: 'underline', color: Colors.theme}}>GitHub</Text>
        <Text style={{textDecorationLine: 'underline'}}>Facebook</Text>
        <Text style={{textDecorationLine: 'underline'}}>Google</Text>
        <Text style={{textDecorationLine: 'underline'}}>Instagram</Text>
        <Text style={{textDecorationLine: 'underline'}}>LinkedIn</Text>
          
        </View>  
      </View>
      

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  status: {
    backgroundColor: Colors.theme,
    paddingBottom: Layout.height*0.2,
    borderBottomLeftRadius: Layout.width*0.1,
    borderBottomRightRadius: Layout.width*0.1,

  },
  icon: {
    alignItems: 'flex-end',
    paddingHorizontal: 32,
    paddingVertical: 20,
    color: Colors.white,
  },
  lineIcon: {
    paddingRight: 30,
  },
  view: {
    flexDirection: 'column',
    paddingHorizontal: 32,
    marginVertical: 36,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
    paddingTop: 10,
    marginVertical: 15,

  },
  text: {
    fontSize: 25, 
    fontWeight: 400,
    color: Colors.white,
  },
  text1: {
    fontSize: 15, 
    color: Colors.white,
    fontWeight: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bioLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  bioView: {
    backgroundColor: '#F5F5F5',
    marginHorizontal: 32,
    padding: 20,
    borderRadius: 20,
    elevation: 8,
    marginBottom: 16,
    marginTop: -Layout.height * 0.15,
  },
  bioText: {
    color: Colors.greyish,
  }, 
  bioTextView: {
    marginVertical: 8,
  },
  
});
