import React from 'react';
import { Text, View, ScrollView, Image, ActivityIndicator } from "react-native";
import axios from "axios";

class Bella extends React.Component{

  state={
    apple: [],
    indicator: true
  }

  cheri = async () => {
    try {
      const moth = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.route.params.id}`)
      console.log(moth)
      this.setState({apple: moth.data.meals})
    } catch (error) {
      console.log(error)
    } finally {
      this.setState({
        indicator: false
      })
    }
  };

  componentDidMount() {
    this.cheri();
    this.props.navigation.setOptions({title:this.props.route.params.items })
  }

  render() {
    if (this.state.indicator) {
      return (
        <>
          <View
            style={{ flex: 1, justifyContent: `center`, alignItems: `center`, backgroundColor:`rgba(86, 210, 196, 0.45)` }}>
            <ActivityIndicator color={`rgba(18, 121, 109, 0.88)`} size={50} />
            <Text color={`rgba(18, 121, 109, 0.88)`}>Подождите идет загрузка данных</Text>
          </View>
        </>
      );
    }
    return (
      <>
        <View
          style={{
            flex: 4,
            backgroundColor: `rgba(143, 217, 208, 0.88)`
        }}>
          <ScrollView>
            {this.state.apple.map(item =>(
              <View
                style={{
                  justifyContent: `center`,
                  alignItems: `center`,
                  margin: 10,
                }}>
                <Image style={{height: 200, width: 300}} source={{ uri: item.strMealThumb}} />
                <View
                  style={{
                    margin: 10,
                    padding: 10,
                    backgroundColor: `rgba(86, 210, 196, 0.88)`}}>
                  <Text
                    style={{
                      fontSize: 20 }}>
                    Категория:{item.strCategory}</Text>
                </View>
                <View
                  style={{
                    margin: 10,
                    padding: 10,
                    backgroundColor: `rgba(86, 210, 196, 0.88)`
                  }}>
                  <Text
                    style={{
                      fontSize: 20 }}>
                    Продукт:{item.strMeal}</Text>
                </View>
                <View
                  style={{
                    margin: 10,
                    padding: 10,
                    backgroundColor: `rgba(86, 210, 196, 0.88)`
                  }}>
                  <Text
                    style={{
                      fontSize: 20 }}>
                    Страна:{item.strArea}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

      </>
    )
  }
}

export default Bella;
