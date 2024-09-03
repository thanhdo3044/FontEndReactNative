import React from 'react';
import { Alert, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, TextInput, Platform } from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Icon from 'react-native-vector-icons/Fontisto';

const LoginScreen = ():React.JSX.Element =>{
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return(
        <SafeAreaView style={styes.container}>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
            <View style={styes.title}>
                <Text style={styes.title_login}>Login</Text>
                <Text style={styes.title_des}>
                    Welcome to our application.
                </Text>
                <Text style={styes.title_des}>
                    Please enter your credentials to access our application.
                </Text>
            </View>
            <View style={styes.form}>
                <View style={styes.group}>
                    <Icon name="email" style={styes.icon} />
                    <TextInput
                        style={styes.input}
                        placeholder="Email Address"
                        value={email}
                        onChangeText={(text) => setEmail(text)} />
                </View>
                <View style={styes.group}>
                    <Icon name="locked" style={styes.icon} />
                    <TextInput
                        style={styes.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}/>
                </View>
                <TouchableOpacity onPress={()=> Alert.alert('Changer Password')}>
                    <Text style={styes.title_forgot_password} >Forgot Password ?</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styes = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal:20,
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    title:{
        alignItems: 'center',
        marginTop:30,
    },
    title_login : {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginTop:30,
    },
    title_des:{
        // flexWrap:'wrap',
    },
    title_forgot_password: {
        color: 'blue',
        marginLeft:10,
    },

    form:{

    },
    group:{

    },
    input:{
        borderBottomWidth:1,
        backgroundColor:'#fff',
        borderColor:'#ccc',
        padding:10,
        marginBottom:10,
        borderRadius:5,
        fontSize:16,
        paddingLeft:35,
    },
    icon:{
        fontSize:20,
        position:'absolute',
        top:16,
        left:8,
        zIndex:1000,
    },

});

export default LoginScreen;
