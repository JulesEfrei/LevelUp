import { TouchableOpacity } from "react-native";
import CustomText from "./CustomText";
import Icon from "./Icon";

export default function CustomButton({type, data, style= {}, onPress}) {

    return (

        <TouchableOpacity style={[style]} onPress={onPress}>

            {type == "text" && <CustomText content={data.content} align={data.align} size={data.size}/>}

            {/* Need to be patched (=> not working) */}
            {type == "icon" && <Icon.MaterialIcons name={data.name} size={data.size} />}

            {type == "custom" && data}

        </TouchableOpacity>

    )

}