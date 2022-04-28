import { Image } from "react-native"

import images from "../../../assets/index"

export default function Illustration({name, w = 300, h = 300, styles= {}}) {

    return (

        <>

        <Image
          style={[styles, { width: w, height: h }]}
          source={images[name]}
        />

        </>

    )

}