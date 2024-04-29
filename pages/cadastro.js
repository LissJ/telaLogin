import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Modal // Adicionando a importação do Modal
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons/';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal

    const handleLogin = async () => {
        try {
            // Salvar e-mail e senha no AsyncStorage
            await AsyncStorage.setItem('user_email', email);
            await AsyncStorage.setItem(email, password); // Salvar a senha associada ao e-mail como valor no AsyncStorage
            setModalVisible(true); // Exibindo o modal após o cadastro ser efetuado com sucesso
            // navigation.navigate('TelaBemSucedida'); // Se você quiser navegar para outra tela após o cadastro, descomente esta linha
        } catch (error) {
            console.error('Erro ao salvar dados do usuário:', error);
        }
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <TouchableOpacity onPress={() => navigation.navigate('entrada')} style={styles.back}>
                            <Ionicons name="chevron-back-outline" size={25} color='#fff' />
                        </TouchableOpacity>
                        <Text style={styles.message}>Cadastre-se</Text>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                        <Text style={styles.title}>
                            E-mail
                        </Text>
                        <TextInput
                            placeholder='Digite um email...'
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Text style={styles.title}>
                            Senha
                        </Text>
                        <TextInput
                            placeholder='Sua senha'
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Cadastre-se</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonRegister}
                            onPress={() => navigation.navigate('entrada')}
                        >
                            <Text style={styles.registerText}>
                                Já possui uma conta? Faça login
                            </Text>
                        </TouchableOpacity>
                    </Animatable.View>
                    {/* Modal de sucesso após o cadastro */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalText}>Cadastro efetuado com sucesso!</Text>
                                <TouchableOpacity
                                    style={styles.modalButton}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={styles.modalButtonText}>Fechar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#880000'
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
        color: "#FFF"
    },
    containerForm: {
        backgroundColor: "#FFF",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%"
    },
    title: {
        fontSize: 20,
        marginTop: 28,
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
    },
    // Estilos do modal
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: '#880000',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    modalButtonText: {
        color: '#FFF',
        fontSize: 16,
    },
});
