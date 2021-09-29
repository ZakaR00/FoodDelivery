import React from 'react';
import {
  Text,
  View, FlatList, ScrollView, TouchableOpacity, ActivityIndicator,
} from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import axios from "axios";
import Indicator from "../indicator/Indicator";

class Country extends React.Component{

  state= {
    flag: [],
    indicator: true
  }

  country =  async () => {
    try {
      const list = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      console.log(list)
      this.setState({
        flag: list.data.meals
      })
    } catch (e) {
      console.log(e)
    } finally {
      this.setState({
        indicator: false
      })
    }
  }

  fetch = (item) => {
    this.props.navigation.navigate(`Sostav`,{
      sostav: item.strArea
    })
  }

  componentDidMount() {
    this.country();
  }

  render() {
    if (this.state.indicator) {
      return (
        <>
         <Indicator/>
        </>
      );
    }
    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: `rgba(86, 210, 196, 0.88)`
        }}>
          <ScrollView>
            {this.state.flag.map(item => (
              <View
                style={{
                  margin: 10,
                  padding: 20,
                  backgroundColor: `rgba(237,245,244,0.88)`
                }}>
                <TouchableOpacity onPress={()=>this.fetch(item)}>
                  <Text style={{fontSize: 20,}}>{item.strArea}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>

       </>
    )
  }
}

export default Country;
