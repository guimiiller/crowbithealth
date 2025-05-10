import React, { useState } from "react";
import { FlatList, Keyboard, Pressable, Text, TextInput, TouchableOpacity, Vibration, View } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [messageImc, setMessageImc] = useState<string>('Preencha o peso e altura');
  const [imc, setImc] = useState<string>('');
  const [textButton, setTextButton] = useState<string>('Calcular');
  const [errorMessage, setErrorMessage] = useState('')
  const [imcList, setImcList] = useState<{ id: number; imc: string }[]>([]);


  function verificationImc(){
    if(imc == '') {
      Vibration.vibrate()
      setErrorMessage('campo obrigatório*')
    }
  }

  function imcCalculator(heightNum: number, weightNum: number) {
    const imcValue = (weightNum / (heightNum * heightNum)).toFixed(2);
    setImc(imcValue);
    setMessageImc("Seu IMC é igual:");
    setTextButton("Calcular Novamente");
    setImcList((arr) => [...arr, { id: new Date().getTime(), imc: imcValue }]);
  }

  function validationImc() {
    setErrorMessage(''); // Limpa erros anteriores
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
  
    if (!height || !weight) {
      setMessageImc("Preencha o peso e altura");
      setImc('');
      setTextButton("Calcular");
      verificationImc(); // Mostra erro se necessário
      return;
    }
  
    if (isNaN(heightNum) || isNaN(weightNum) || heightNum <= 0) {
      setMessageImc("Valores inválidos");
      setImc('');
      setTextButton("Calcular");
      verificationImc();
      return;
    }
  
    imcCalculator(heightNum, weightNum);
    setHeight('');
    setWeight('');
  }

  return (
      <View style={styles.formContext}>
        {imc == '' ? 
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        />
        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 75.365"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.buttonCalculator} onPress={()=>{
          validationImc()
        }}> 
          <Text style={styles.textButtonCalculator} >{textButton}</Text>
        </TouchableOpacity>
      </Pressable>
      :
      <View style={styles.exhibitionResultImc}>
        <ResultImc messageResultImc={messageImc} resultImc={imc} />
        <TouchableOpacity style={styles.buttonCalculator} onPress={()=>{
          validationImc()
        }}> 
          <Text style={styles.textButtonCalculator} >{textButton}</Text>
        </TouchableOpacity>
      </View>
      }
      <FlatList
      showsVerticalScrollIndicator={false}
        style={styles.listImcs}
        data={[...imcList].reverse()}
        renderItem={({ item }) => (
          <Text style={styles.resultImcItem}>
            <Text style={styles.textResultItemList}>Resultado IMC = </Text>
            {item.imc}
          </Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
