import { StyleSheet, Text, View, Pressable } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import {COLORS} from "@/constants/colors";



export default function ResultScreen() {
    const { score } = useLocalSearchParams<{
        score: string;
    }>();

    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>🏆</Text>

            <Text style={styles.title}>
                Quiz Complete!
            </Text>

            <Text style={styles.score}>
                {score} / 5
            </Text>

            <Text style={styles.subtitle}>
                Great job!
            </Text>

            <Pressable
                style={styles.button}
                onPress={() => router.replace("/")}
            >
                <Text style={styles.buttonText}>
                    Back to Home
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
        fontSize: 28,
        fontWeight: "700",
        color: COLORS.text,
    },

    score: {
        fontSize: 48,
        fontWeight: "800",
        color: COLORS.primary,
        marginVertical: 16,
    },

    subtitle: {
        fontSize: 16,
        color: COLORS.muted,
        marginBottom: 32,
    },

    button: {
        backgroundColor: COLORS.primary,
        padding: 16,
        borderRadius: 12,
    },

    buttonText: {
        color: COLORS.white,
        fontWeight: "600",
    },
});