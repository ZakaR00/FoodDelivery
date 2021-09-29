import React from 'react';
import {
  Text,
  View, FlatList, ScrollView, ActivityIndicator,
} from "react-native";
import axios from "axios";
import { Button, Card, Title } from "react-native-paper";
import Indicator from "../indicator/Indicator";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Sostav extends React.Component{

  state = {
    dishes: [],
    indicator: true
  }

  sostav =  async () => {
    try {
      const filter =  await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${this.props.route.params.sostav}`)
      console.log(filter)
      this.setState({dishes: filter.data.meals
      })
    } catch (e) {
      console.log(e)
    } finally {
      this.setState({
        indicator: false
      })
    }
  }


  componentDidMount() {
    this.sostav()
    this.props.navigation.setOptions({title:this.props.route.params.sostav})
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
              {this.state.dishes.map(item =>(
                <Card
                  style={{
                    margin: 10,
                    padding: 5,
                    backgroundColor: `rgba(13, 138, 124, 0.88)`
                  }}
                  onPress={()=>{}}
                >
                  <Card.Content>
                    <Title>{item.strMeal}</Title>
                  </Card.Content>
                  <Card.Cover resizeMode={`contain`} source={{ uri: item.strMealThumb}}/>
                </Card>
              ))}
            </ScrollView>
          </View>
      </>
    )
  }
}

export default Sostav;
