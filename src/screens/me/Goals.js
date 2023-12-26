import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, Image, ImageBackground, Button, TouchableOpacity, StyleSheet, Alert } from "react-native"
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../constants";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux"


export default function Goals() {
  const navigation = useNavigation();
  const stylesLightDark = useSelector((state) => state.settings.styles);
  const { t } = useTranslation();

  return (
    <View style={styles.background}>
      {/**headerGoals*/}
      <View style={styles.header}>
        {/**BottomHeader*/}
        <View style={styles.topHeader}>
          <View style={styles.buttonHeader}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(ROUTES.ME_TAB)
              }}
            >
              <MaterialCommunityIcon name="chevron-left" style={styles.IconHeader} />
            </TouchableOpacity>
          </View>
          <View style={styles.contentHeader}>
            <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>{t('goals')}</Text>
          </View>

          <View >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(ROUTES.CHANGE_GOALS_SCREEN);
              }}

              style={{ backgroundColor: '#F5F8FF', padding: 4, borderRadius: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>{t('change')}</Text>
            </TouchableOpacity>
          </View>


        </View>
        {/**BottomHeader*/}
        <View style={styles.bottomHeader}>
          <View style={styles.itemHeader}>
            <Image source={require('../../assets/icons/run.png')} style={styles.imageHeader} />
            <Text style={styles.text}>2500 Steps</Text>
          </View>
          <View style={styles.itemHeader}>
            <Image source={require('../../assets/icons/shoe.png')} style={styles.imageHeader} />
            <Text style={styles.text}>1000 Km</Text>
          </View>
          <View style={styles.itemHeader}>
            <Image source={require('../../assets/icons/Kcals.png')} style={styles.imageHeader} />
            <Text style={styles.text}>1000 Kcal</Text>
          </View>
        </View>
      </View>

      {/*containerGoals */}
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.text1Container}>{t('reminder')}</Text>
          <Text style={styles.text2Container}>{t('everyDay')}</Text>
        </View>
      </View>
    </View>
  )
}

//Styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },

  //Header
  header: {
    height: 177,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //topHeader
  topHeader: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
  },
  buttonHeader: {
    flex: 3,
  },
  IconHeader: {
    fontSize: 50,
    color: 'black',
  },
  contentHeader: {
    flex: 3,
    alignItems: 'left'
  },
  //bottomHeader
  bottomHeader: {
    flex: 3,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F8FF',
    paddingVertical: 15,
    borderRadius: 15
  },
  itemHeader: {
    alignItems: 'center',
    marginHorizontal: 30
  },
  imageHeader: {
    width: 50,
    height: 50
  },
  textBottom: {
    marginTop: 10,
    fontSize: 14,
    color: 'black',
  },


  //Container
  container: {
    paddingVertical: 15,
    height: 290,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    marginVertical: 10,
    justifyContent: "center",
    backgroundColor: '#F5F8FF',
    paddingVertical: 30,
    borderRadius: 15,
    width: 340,
    height: 10,
  },
  text1Container: {
    fontSize: 13,
    marginLeft: 15,
    marginTop: 10
  },
  text2Container: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15
  },

  //Footer
  footer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    //alignItems: 'center',
  },
  titleFooter: {
    paddingLeft: 15,
    paddingTop: 10,
  },
  addContent: {
    paddingLeft: 30,
    paddingVertical: 10
  },
  imageAdd: {
    width: 30,
    height: 30
  },
  contentFooter: {
    //padding: 30,
    marginLeft: 25,
    backgroundColor: '#F5F8FF',
    paddingVertical: 15,
    borderRadius: 15,
    width: 340,
    height: 120,
  },
  contentFooter1: {
    flexDirection: 'row',
    padding: 8,
  },
  textFooter: {
    marginLeft: 10
  },
  titleFooter1: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  contentFooter2: {
    paddingTop: 5,
    flexDirection: 'row',
    paddingLeft: 20
  },
  line: {
    width: 340
  },
  iconClock: {
    width: 25,
    height: 25,
    marginRight: 10
  }
});