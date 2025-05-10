import React from "react";
import { Share, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

type ResultImcProps ={
    resultImc: string
    messageResultImc: string
}

export default function ResultImc({resultImc, messageResultImc}: ResultImcProps){

    const onShare = async () =>{
        const result = await Share.share({
            message: "Meu imc hoje é: " + resultImc
        })
    }

    return(
        <View style={styles.contextImc}>
            <View style={styles.boxShareButton}>
                <Text style={styles.information}>{messageResultImc}</Text>
                <Text style={styles.numberImc}>{resultImc}</Text>
                <TouchableOpacity style={styles.shared} onPress={onShare}>
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}