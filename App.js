import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');
const buttonWidth = width * 0.2;


export default function App() {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState('');


  const handleNumberPress = (number) => {
    if (display === '0' && number !== '.') {
      setDisplay(number.toString());
    } else {
      setDisplay(display + number.toString());
    }
    setCurrentValue(currentValue + number.toString());
  };


  const handleOperatorPress = (op) => {
    setCurrentValue('');
    setOperator(op);
    if (op === '=') {
      calculateResult();
    }
  };


  const calculateResult = () => {
    let result = 0;
    switch (operator) {
      case '+':
        result = parseFloat(currentValue) + parseFloat(display);
        break;
      case '-':
        result = parseFloat(currentValue) - parseFloat(display);
        break;
      case 'x':
        result = parseFloat(currentValue) * parseFloat(display);
        break;
      case '/':
        result = parseFloat(currentValue) / parseFloat(display);
        break;
      default:
        result = parseFloat(display);
        break;
    }
    setDisplay(result.toString());
    setCurrentValue('');
    setOperator('');
  };


  const handleClearPress = () => {
    setDisplay('0');
    setCurrentValue('');
    setOperator('');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleClearPress()}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('x')}>
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, { width: buttonWidth * 2 }]} onPress={() => handleNumberPress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleOperatorPress('=')}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#483D8B',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  display: {
    fontSize: 48,
    textAlign: 'right',
    marginBottom: 20,
    width: '100%',
    paddingRight: 20,
  },
  buttons: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#836FFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: buttonWidth,
    borderRadius: buttonWidth / 2,
    width: buttonWidth,
  },
  buttonText: {
    fontSize: buttonWidth / 2,
    color: '#FFFFFF',
  },
});