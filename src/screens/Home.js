import { Text, View } from "react-native"

const Home =({navigation, route})=>{
    return(
        <View>
            <Text>Home</Text>
           <Text>This is your Token {route.params.token}</Text>
        </View>
    )
}
export default Home