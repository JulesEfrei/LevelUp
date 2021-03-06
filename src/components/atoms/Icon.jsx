import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIconsI from 'react-native-vector-icons/SimpleLineIcons'
import MaterialIconsI from 'react-native-vector-icons/MaterialIcons'
import FontAwesomeI from 'react-native-vector-icons/FontAwesome'
import FoundationI from 'react-native-vector-icons/Foundation'
import EvilIconsI from 'react-native-vector-icons/EvilIcons'
import OcticonsI from 'react-native-vector-icons/Octicons'
import IoniconsI from 'react-native-vector-icons/Ionicons'
import FeatherI from 'react-native-vector-icons/Feather'
import EntypoI from 'react-native-vector-icons/Entypo'
import ZocialI from 'react-native-vector-icons/Zocial'
import AntDesignI from 'react-native-vector-icons/AntDesign'


// Explicit Version 
export const MaterialCommunityIcons = props => (
    <MaterialCommunityIconsI {...props} />
)

// Condensed Version 
 const SimpleLineIcons = props => <SimpleLineIconsI {...props} />
 const MaterialIcons = props => <MaterialIconsI {...props} />
 const FontAwesome = props => <FontAwesomeI {...props} />
 const Foundation = props => <FoundationI {...props} />
 const EvilIcons = props => <EvilIconsI {...props} />
 const Ionicons = props => <IoniconsI {...props} />
 const Octicons = props => <OcticonsI {...props} />
 const Feather = props => <FeatherI {...props} />
 const Entypo = props => <EntypoI {...props} />
 const Zocial = props => <ZocialI {...props} />
 const AntDesign = props => <AntDesignI {...props} />


// Export all components
export default  {
    MaterialCommunityIcons,
    SimpleLineIcons,
    SimpleLineIcons,
    MaterialIcons,
    FontAwesome,
    Foundation,
    EvilIcons,
    Ionicons,
    Octicons,
    Feather,
    Entypo,
    Zocial,
    AntDesign
}


/* How to use this component :

    Import this file like the following example :

        import Icon form "path of this file"

    Then, use the component like that : 

        <Icon.Type name="IconName" size={30} style={styles.classe} />

        Type means FontAwesome, Ionicons, MaterialIcons, ...

*/