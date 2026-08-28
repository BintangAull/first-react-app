import { StyleSheet, Text, View, Pressable } from "react-native";
import { router } from "expo-router";
import {COLORS} from "@/constants/colors";


export default function HomeScreen() {
  return (
      <View style={styles.container}>
        <Text style={styles.emoji}>⚽</Text>

        <Text style={styles.title}>
          Football Quiz
        </Text>

        <Text style={styles.subtitle}>
          Test your football knowledge
        </Text>

        <Pressable
            style={styles.button}
            onPress={() => router.push("/quiz")}
        >
          <Text style={styles.buttonText}>
            Start Quiz
          </Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: COLORS.background,
  },

  emoji: {
    fontSize: 64,
    marginBottom: 16,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.text,
  },

  subtitle: {
    fontSize: 16,
    color: COLORS.muted,
    marginTop: 8,
    marginBottom: 32,
  },

  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
  },

  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
});