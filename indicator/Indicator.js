import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

class Indicator extends React.Component{
  render() {
    return (
      <>
        <View
          style={{ flex: 1, justifyContent: `center`, alignItems: `center`, backgroundColor:`rgba(86, 210, 196, 0.45)` }}>
          <ActivityIndicator color={`rgba(18, 121, 109, 0.88)`} size={50} />
          <Text color={`rgba(18, 121, 109, 0.88)`}>Подождите идет загрузка данных</Text>
        </View>
      </>
    )
  }
}

export default Indicator;
