import { Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, globalStyles } from '../../constants/styles'

export default function UserScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={globalStyles.sectionTitle}>User</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.background },
})
