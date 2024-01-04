import { Button, SafeAreaView, TextInput, Text, View } from "react-native"
import COLORS from "../theme/colors"
import { useState } from "react"
import axios from "axios"

const Login =()=>{
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")
    const [isToken, setThereToken] = useState(false)

    const user = {username: userName, password: password}

    const login = async()=>{
        try{
            const headers = {'Accept': 'application/json',
            'Content-Type': 'application/json'}
            const response = await axios.post('http://192.168.202.249:8080/rest/auth/login', user)
            const data = response.data
            const {token} = data

            if(token){
                setToken(token)
            }
            console.log(response.data.token)
            return token
        }
        catch(error){
            setThereToken(false)
            throw error
            // console.error(error)
        }
      

    }

    console.log(userName)
    console.log(password)

    return(
        <SafeAreaView style={{flex:1, paddingTop:40, backgroundColor: COLORS.white}}>
            {!token ? <View style ={{flex:1, marginHorizontal:22}}>
                <Text style={{fontSize:22, fontWeight:'bold', marginVertical:12, color:COLORS.black}}>
                    Hey Welcome Back!
                </Text>
                <View style={{marginBottom: 12}}>
                    <Text style={{
                        fontSize:16,
                        fontWeight:'400',
                        marginVertical:8
                    }}>Email Address</Text>
                    <View style={{
                        width:'100%',
                        height:48,
                        borderColor:COLORS.black,
                        borderWidth:1,
                        borderRadius:8,
                        alignItems:'center',
                        justifyContent:'center',
                        paddingLeft:22
                    }}>
                        <TextInput
                        placeholder="Masukkan Email"
                        placeholderTextColor={COLORS.black}
                        keyboardType="email-address"
                        onChangeText={setUserName}
                        secureTextEntryr
                        style={{width:'100%'}}
                        />

                    </View>
                </View>
                <View style={{marginBottom: 12}}>
                    <Text style={{
                        fontSize:16,
                        fontWeight:'400',
                        marginVertical:8
                    }}>Password</Text>
                    <View style={{
                        width:'100%',
                        height:48,
                        borderColor:COLORS.black,
                        borderWidth:1,
                        borderRadius:8,
                        alignItems:'center',
                        justifyContent:'center',
                        paddingLeft:22
                    }}>
                        <TextInput
                        placeholder="Masukkan Password"
                        placeholderTextColor={COLORS.black}
                        secureTextEntry
                        onChangeText={setPassword}
                        style={{width:'100%'}}
                        />

                    </View>
                   
                </View>
                <Button title="Login" filled
                style={{marginTop:18, marginBottom:4, 
                backgroundColor: COLORS.primary, // Ganti dengan warna latar belakang yang diinginkan
                borderRadius: 8,
                paddingVertical: 14,
                paddingHorizontal: 16,}} onPress={login}/>
            </View> : <Text>Token {token}</Text>}
        </SafeAreaView>
    )
}
export default Login