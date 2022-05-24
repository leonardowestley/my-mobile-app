import { Image } from "react-native";

export default function Hero() {
    return(
        <Image 
        style={{ width: 406, height: 232, backgroundColor: 'red' }}
        source={{
            uri: "https://cdn.britannica.com/93/197393-050-253FF7B6/great-white-shark-surface-food-pursuit.jpg"
        }} />
    )
}