import { Pressable, StyleSheet, Text } from "react-native";
import {COLORS} from "@/constants/colors";


type AnswerOptionProps = {
    text: string;
    selected: boolean;
    onPress: () => void;
};

export default function AnswerOption({
                                         text,
                                         selected,
                                         onPress,
                                     }: AnswerOptionProps) {
    return (
        <Pressable
            style={[
                styles.container,
                selected && styles.selected,
            ]}
            onPress={onPress}
        >
            <Text style={styles.text}>
                {text}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 12,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: "#DDDDDD",
        marginBottom: 12,
    },

    selected: {
        borderColor: COLORS.primary,
        backgroundColor: "#E8F5E9",
    },

    text: {
        fontSize: 16,
        color: COLORS.text,
    },
});