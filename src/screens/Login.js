import { Button, SafeAreaView, TextInput, Text, View, StyleSheet, TouchableOpacity } from "react-native"
import COLORS from "../theme/colors"
import { useState } from "react"
import axios from "axios"

const Login =({navigation})=>{
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")
    const [isToken, setThereToken] = useState(false)

    // const navigation = useNavigation()

    const user = {username: userName, password: password}

    const login = async()=>{
        try{
            const response = await axios.post('http://192.168.202.249:8080/rest/auth/login', user)
            const data = response.data
            const {token} = data

            if(token){
                setToken(token)
                navigation.navigate('Home',{token:token})
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
            <View style ={{flex:1, marginHorizontal:22}}>
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
                <TouchableOpacity style={style.loginButton} onPress={login}>
                <Text style={{color: COLORS.white}}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    loginButton:{
        backgroundColor:COLORS.secondary,
        borderRadius:8,
        paddingHorizontal:12,
        paddingVertical:16,
        fontSize:14,
        alignItems:'center'
    }
}
    
)
export default Login