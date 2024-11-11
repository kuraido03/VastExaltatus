import { View, Text, Image } from 'react-native'
import {Tabs, Redirect} from 'expo-router';
import {icons} from '../../constants';

const TabIcon = ({icon, color, name, focused}) => { 
  return (
    <View className="items-center justify-center gap-1">
      <Image 
      source ={icon}
      resizeMode="contain"
      className="w-6 h-6"
      tintColor={color}
      />

      <Text className={`${focused? 'font-rextraboldItalic':'font-rextralightItalic'}text-xs`} style={{color: color}  }>
        {name}
      </Text>
    </View>
  )
}
const TabsLayout = () =>{
  return(
    <>
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor:'#f6e0b5' ,
      tabBarInactiveTintColor: 'black',
      tabBarStyle:{
        backgroundColor:'#a39193',
        borderTopColor:'#232533',
        borderTopWidth: 1,
        height: 75,

      }
    }}
    >
      <Tabs.Screen
      name = "home"
      options={{
        title:"Home",
        headerShown: false,
        tabBarIcon:({color,focused})=>(
          <TabIcon
          icon={icons.home}
          color={color}
          name="Home"
          focus={focused}/>

        )
      }}
      />
      <Tabs.Screen
      name = "careerExploration"
      options={{
        title:"Career Exploration",
        headerShown: false,
        tabBarIcon:({color,focused})=>(
          <TabIcon
          icon={icons.careerExploration}
          color={color}
          name="Explore"
          focus={focused}/>

        )
      }}
      />
      <Tabs.Screen
      name = "educationalAssistance"
      options={{
        title:"Educational Assistance",
        headerShown: false,
        tabBarIcon:({color,focused})=>(
          <TabIcon
          icon={icons.educationalAssistance}
          color={color}
          name="Assisstance"
          focus={focused}/>

        )
      }}
      />
      <Tabs.Screen
      name = "industryInsights"
      options={{
        title:"Industry Insights",
        headerShown: false,
        tabBarIcon:({color,focused})=>(
          <TabIcon
          icon={icons.industryInsights}
          color={color}
          name="Insights"
          focus={focused}/>

        )
      }}
      />
      </Tabs>
      </>
  )
}
export default TabsLayout