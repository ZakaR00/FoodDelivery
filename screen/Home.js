import React, {useContext} from 'react';
import {
  FlatList,
} from "react-native";
import axios from "axios";
import { Card,Title,  } from 'react-native-paper';
import Indicator from "../indicator/Indicator"

class Home extends React.Component{

  state = {
    categories: [],
    indicator: true,
  }

  componentDidMount() {
    this.response();
  }

  response =  async () => {
      try {
        const categories = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        this.setState({categories: categories.data.categories})
      } catch {
        console.log(`error`)
      } finally {
        this.setState({
          indicator: false
        })
      }
  }

  Card = (item) => {
   this.props.navigation.navigate(`Products`, {
     asa: item.strCategory
   })
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
      <FlatList
        style={{  backgroundColor: `rgba(86, 210, 196, 0.88)`, padding: 10, }}
        data={this.state.categories}
        renderItem={({item})=>{
          return (
            <Card
              style={{
                padding: 5,
                margin: 10,
                backgroundColor: `rgba(13, 138, 124, 0.88)`
              }}
              onPress={() =>this.Card(item)}>
              <Card.Content>
                <Title>{item.strCategory}  </Title>
              </Card.Content>
              <Card.Cover resizeMode={`contain`} source={{ uri: item.strCategoryThumb}} />
            </Card>
          )
        }}
      />
    )
  }
}

export default Home;
