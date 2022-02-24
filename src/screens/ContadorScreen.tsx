import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab';

const ContadorScreen = () => {

  const [contador, setContador] = useState(10);

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>
        Contador: { contador }
      </Text>

      <Fab 
        title='+1'
        onPress={ () => setContador( contador + 1 ) }
      />

      <Fab 
        title='-1'
        position='bl'
        onPress={ () => setContador( contador - 1 ) }
      />

    </View>
  )
}

export default ContadorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15
  }
})