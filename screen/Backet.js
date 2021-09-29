import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card, Title, Button, RadioButton } from "react-native-paper";
import Indicator from "../indicator/Indicator";

class  Backet extends React.Component {

  state = {
    indicator: true,
    backet: [],
    abort: []
  }

  main = (item) => {
  this.props.navigation.navigate(`BacketScreen`,{
    backet: this.state.backet
  })
}

  componentWillUnmount() {
    this.focus;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.abort !== this.state.abort) {
      const ivan = AsyncStorage.setItem(`masha`, JSON.stringify(this.state.abort))
      console.log(ivan)
    }
  }

  componentDidMount() {
    this.focus= this.props.navigation.addListener(`focus`, () =>{
      const diana = AsyncStorage.getItem(`masha`)
      diana.then((res) => {
        this.setState({
          backet: res == null ? [] : JSON.parse(res)
        })
      })
    })
  }

    render () {
    return (
      <>
        <Button onPress={() =>this.main()} mode="contained" color={`rgba(18, 121, 109, 0.88)`}>Заказть</Button>
        <FlatList
          style={{ backgroundColor: `rgba(86, 210, 196, 0.45)` }}
          data={this.state.backet}
          renderItem={({ item }) => {
            return (
              <Card
                style={{
                  margin: 10,
                  padding: 5,
                  backgroundColor: `rgba(13, 138, 124, 0.88)`,
                  flexDirection: `row`
                }}
              >
                <Card.Content>
                  <Title>{item.strMeal}  </Title>
                </Card.Content>
                <Card.Cover resizeMode={`contain`} source={{ uri: item.strMealThumb }} />
                <Card.Actions>
                  <Button
                    onPress={(a) => {

                      if (this.state.backet.find((pan) => pan.idMeal === item.idMeal)) {
                        this.setState((lemon) => {
                          return {
                            backet: lemon.backet.filter((lemon) => {
                              return lemon.idMeal !== item.idMeal
                            })
                          }
                        })
                      } else {
                        this.setState((kg) => {
                          return {
                            backet: [item, ...kg.backet]
                          }
                        })
                      }
                    }}
                    color={`white`}>{this.state.backet.find((pen) => pen.idMeal === item.idMeal) ? `Убрать из корзины` : `Добавить в корзины`}</Button>
                </Card.Actions>
              </Card>
            )
          }
          } />
      </>
    )
  }
}

export default Backet;

