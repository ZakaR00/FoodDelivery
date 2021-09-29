import React from 'react';
import {
  ActivityIndicator,
  FlatList,

} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card, Title, Button } from "react-native-paper";
import Indicator from "../indicator/Indicator";

class Products extends React.Component {

  state = {
    sostav: [],
    indicator: true,
    abort: []
  }


  bella = (item) => {
    this.props.navigation.navigate(`Bella`, {
      items: item.strMeal,
      id: item.idMeal,
    })
  }

  fast = async () => {
    try {
      const items = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.route.params.asa}`)
      this.setState({
        sostav: items.data.meals
      })
    } catch (e) {
      console.log(e)
    } finally {
      this.setState({
        indicator: false
      })
    }
  };

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
          sostav: res == null ? [] : JSON.parse(res)
        })
      })
    })
    this.fast()
    this.props.navigation.setOptions({ title: this.props.route.params.asa })
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
        <FlatList
          style={{  backgroundColor: `rgba(86, 210, 196, 0.88)`}}
          data={this.state.sostav}
          renderItem={({item}) =>{
            return (
              <Card
                style={{
                  margin: 10,
                  padding: 5,
                  backgroundColor: `rgba(13, 138, 124, 0.88)`
                }}
                onPress={()=>this.bella(item)}
              >
                <Card.Content>
                  <Title>{item.strMeal}  </Title>
                </Card.Content>
                <Card.Cover resizeMode={`contain`} source={{ uri: item.strMealThumb}} />
                <Card.Actions>
                  <Button
                    onPress={(a)=>{
                    if (this.state.abort.find((pan)=>pan.idMeal === item.idMeal)) {
                      this.setState((lemon)=>{
                        return {
                          abort: lemon.abort.filter((lemon)=>{
                            return lemon.idMeal !== item.idMeal
                          })
                        }
                      })
                    } else {
                      this.setState((kg)=>{
                        return {
                          abort: [...kg.abort, item]
                        }
                      })
                    }}}
                    color={`white`}>{this.state.abort.find((pen)=> pen.idMeal === item.idMeal) ? `Убрать из корзины` : `Добавить в корзину`}</Button>
                </Card.Actions>
              </Card>
            )
          }}/>
      </>
    )
  }
}

export default Products;
