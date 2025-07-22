import { ActivityIndicator, ActivityIndicatorBase, useColorScheme } from "react-native";
import { Colors } from '../constants/Colors'
import { ThemedView } from '../components/ThemedView'

const ThemedLoader = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  
  return (
    <ThemedView>

    </ThemedView>
    <ActivityIndicator size="large" color={theme.text} />
  )
}

export default ThemedLoader
