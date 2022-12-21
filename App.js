import HomeScreen from "./ScreenPages/HomeScreen.js";
import ChooseScreen from "./ScreenPages/ChooseScreen.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ParamScreen from "./ScreenPages/ParamScreen.js";
import ParamScreen2 from "./ScreenPages/ParamScreen2.js";
import QuestionScreen from "./ScreenPages/QuestionScreen.js";
import QuestionScreen2 from "./ScreenPages/QuestionScreen2.js";
import ResultScreen from "./ScreenPages/ResultScreen.js";
import ResultInfoScreen from "./ScreenPages/ResultInfoScreen.js";
import ResultScreen2 from "./ScreenPages/ResultScreen2.js";
import ResultInfoScreen2 from "./ScreenPages/ResultInfoScreen2.js";
import GalleryScreen from "./ScreenPages/GalleryScreen.js";
import CellScreen from "./ScreenPages/CellScreen.js";
import CellDescription from "./ScreenPages/CellDescription.js";
import InProgressScreen from "./ScreenPages/InProgressScreen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Second"
          component={ChooseScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen 
          name="Param"
          component={ParamScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Param2"
          component={ParamScreen2}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Question"
          component={QuestionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Question2"
          component={QuestionScreen2}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Result"
          component={ResultScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Result2"
          component={ResultScreen2}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ResultInfo"
          component={ResultInfoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ResultInfo2"
          component={ResultInfoScreen2}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Gallery"
          component={GalleryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Cell"
          component={CellScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Description"
          component={CellDescription}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InProgress"
          component={InProgressScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}