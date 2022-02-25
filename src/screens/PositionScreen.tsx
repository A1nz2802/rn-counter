import React from 'react';
import { StyleSheet, View } from 'react-native';

//* Position Absolute ubica el elemento dependiendo del padre.
//* Position Relative ubica el emento en la posición inicial o original del padre y desde ahí hace las correcciones (top, left, etc)
const PositionScreen = () => {
  return (
    <View style={ styles.container }>
      <View style={ styles.cajaVerde }></View>
      <View style={ styles.cajaMorada }></View>
      <View style={ styles.cajaNaranja }></View>
    </View>
  )
}

export default PositionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* justifyContent: 'center',
    alignItems: 'center', */
    backgroundColor: '#28C4D9'
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  cajaVerde: {
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    /* position: 'absolute',
    bottom: 0,
    left: 0,
    top: 0,
    right: 0, */
    ...StyleSheet.absoluteFillObject

  }

})



