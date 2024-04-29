import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons/';
import Bem_Vindo from '.';

export default function BemSucedido() {
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <TouchableOpacity onPress={() => navigation.navigate('index')} style={styles.back}>
                            <Ionicons name="chevron-back-outline" size={25} color='#000' />
                        </TouchableOpacity>
                        <Text style={styles.message}>Parabéns!</Text>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                        <Text style={styles.title}>
                            Seu login foi efetuado com sucesso!
                        </Text>
                    </Animatable.View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>)
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fff'
    },
    containerHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    back: {
        display: 'flex',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 10,
        color: "#000"
    },
    containerForm: {
        backgroundColor: "#880000",
        flex: 2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%"
    },
    title: {
        fontSize: 20,
        marginTop: 28,
        color: '#fff',
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: '#880000',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#a1a1a1'
    }
})