import React from "react";
import {
  Text,
  View, FlatList, ActivityIndicator, ScrollView, Alert,
} from "react-native";
import { Button, TextInput, List, Checkbox } from "react-native-paper";
import axios from "axios";
import Indicator from "../indicator/Indicator";

class BacketScreen extends React.Component {

  state = {
    name_text: ``,
    surname_text: ``,
    telephon_text: ``,
    address_text: ``,
    sostav: this.props.route.params.backet,
    radio: `1`,
    indicator: true,
    button: true,
    checked: [],
  };

componentDidMount() {
  this.setState({
    indicator:false
  })
}

  zakaz = async () => {
    try {
      const items = axios.get(`https://api.telegram.org/bot1986744403:AAFB4HvONYVlYTk-UW2mQzdjPRjLKJFTaxo/sendMessage?`, {
        params: {
          text:
            `*Имя:* ${this.state.name_text}\n*Фамилия:*${this.state.surname_text}\n *Телефон:*${this.state.telephon_text} \n *Адрес:*${this.state.address_text}\n *Блюдо:*${this.state.checked.join(`\n`)}`,
          chat_id: 1216966501,
          parse_mode: `MarkdownV2`,
        },
      });
    } catch (e) {
      console.log(e);
    }finally {
     this.props.navigation.navigate(`Backet`)
    }
  };

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
        <ScrollView>
        <View
          style={{
            justifyContent: `flex-start`,
            alignItems: `center`,
            margin: 10
          }}>
          <TextInput
            style={{ width: 400, marginTop: 10 }}
            placeholder={`Ваше имя`}
            onChangeText={(text) => this.setState({ name_text: text })}
            value={this.state.name_text}
          />
          <TextInput
            style={{ width: 400, marginTop: 10 }}
            placeholder={`Ваше фамилия`}
            onChangeText={(text) => this.setState({ surname_text: text })}
            value={this.state.surname_text}
          />
          <TextInput
            style={{ width: 400, marginTop: 10 }}
            placeholder={`Телефон номера`}
            onChangeText={(text) => this.setState({ telephon_text: text })}
            value={this.state.telephon_text}
          />
          <TextInput
            style={{ width: 400, marginTop: 10 }}
            placeholder={`Ваш адрес`}
            onChangeText={(text) => this.setState({ address_text: text })}
            value={this.state.address_text}
          />
        </View>

          <View
            style={{
              flexDirection: `row`
            }}>
            <FlatList data={this.state.sostav} renderItem={({ item }) => {
              return (
                <Checkbox.Item label={`${item.strMeal}`} status={this.state.checked.includes(item.strMeal) ? `checked`: 'unchecked'} onPress={() => {
                  if (this.state.checked.includes(item.strMeal)) {
                    this.setState(p => ({checked: p.checked.filter(v => v !== item.strMeal)}));
                  } else {
                    this.setState(p => ({checked: [...p.checked, item.strMeal]}));
                  }
                }} />
              );
            }} />
          </View>
        <Button  mode="contained"  color={`rgba(18, 121, 109, 0.88)`} onPress={() => this.zakaz()}>Заказать</Button>
           </ScrollView>
      </>
    );
  }
}

export default BacketScreen;
