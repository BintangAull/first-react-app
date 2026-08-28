import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Pressable,
} from "react-native";
import { router } from "expo-router";

import AnswerOption from "../components/AnswerOption";
import {questions} from "@/data/question";
import {COLORS} from "@/constants/colors";


export default function QuizScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] =
        useState<string | null>(null);
    const [score, setScore] = useState(0);

    const currentQuestion = questions[currentIndex];

    function handleNext() {
        if (!selectedAnswer) {
            return;
        }

        if (selectedAnswer === currentQuestion.correctAnswer) {
            setScore((prev) => prev + 1);
        }

        if (currentIndex === questions.length - 1) {
            router.replace({
                pathname: "/result",
                params: {
                    score:
                        score +
                        (selectedAnswer === currentQuestion.correctAnswer
                            ? 1
                            : 0),
                },
            });

            return;
        }

        setCurrentIndex((prev) => prev + 1);
        setSelectedAnswer(null);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.progress}>
                Question {currentIndex + 1} / {questions.length}
            </Text>

            <Text style={styles.question}>
                {currentQuestion.question}
            </Text>

            <View style={styles.options}>
                {currentQuestion.options.map((option) => (
                    <AnswerOption
                        key={option}
                        text={option}
                        selected={selectedAnswer === option}
                        onPress={() => setSelectedAnswer(option)}
                    />
                ))}
            </View>

            <Pressable
                style={[
                    styles.nextButton,
                    !selectedAnswer && styles.disabled,
                ]}
                onPress={handleNext}
                disabled={!selectedAnswer}
            >
                <Text style={styles.nextText}>
                    {currentIndex === questions.length - 1
                        ? "Finish"
                        : "Next"}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        paddingTop: 70,
        backgroundColor: COLORS.background,
    },

    progress: {
        fontSize: 14,
        color: COLORS.muted,
        marginBottom: 24,
    },

    question: {
        fontSize: 24,
        fontWeight: "700",
        color: COLORS.text,
        marginBottom: 32,
    },

    options: {
        flex: 1,
    },

    nextButton: {
        backgroundColor: COLORS.primary,
        padding: 16,
        borderRadius: 12,
        alignItems: "center",
    },

    disabled: {
        opacity: 0.4,
    },

    nextText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: "600",
    },
});