import { View, Text, Dimensions, Pressable } from "react-native";
import React, { useState } from "react";
import { colors } from "../../config/colors";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import storage from "../../lib/storage";
import { router } from "expo-router";

export default function objectives() {
  const { height } = Dimensions.get("window");
  const objectives = [
    "🎯 Win at work",
    "💰 Manage finance",
    "🧑‍💻 Be productive",
    "👪 Build strong family",
    "💪 Have a healthy body",
    "💗 Love & be loved",
    "😊 Be happy",
    "🗣️ Improve social lige",
  ];

  const [selectedObjectives, setSelectedObjectives] = useState([]);

  function selectObjective(text) {
    setSelectedObjectives(prevObjectives => {
      const isSelected = prevObjectives.includes(text);

      if (isSelected) {
        return prevObjectives.filter(objective => objective !== text);
      }

      if (prevObjectives.length <= 2) {
        return [...prevObjectives, text];
      }

      return prevObjectives; // No change if already selected or limit reached
    });
  }

  console.log(selectedObjectives);
  function handleContinue() {
    // storage.save({
    //   key: "objectives",
    //   data: {
    //     selectObjective,
    //   },
    // });
    storage.save({ key: "viewedOnboarding", data: { viewed: true } });
    return router.push("/register");
  }
  console.log(storage.load({ key: "objectives" }));
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ paddingHorizontal: 16, paddingTop: height * 0.07 }}>
        <Text style={{ fontSize: 26, fontWeight: "600", fontFamily: "Livvic" }}>
          What objectives do you have in mind now?
        </Text>
        <Text
          style={{
            marginVertical: 12,
            color: colors.lightGray,
            fontFamily: "Livvic-md",
          }}
        >
          Modify up to three goals to enhance personalized specificity.
        </Text>
        <ScrollView bounces={false} style={{ paddingVertical: 12 }}>
          {objectives.map((objective, index) => (
            <Objective
              key={index}
              text={objective}
              selectObjective={selectObjective}
              selectedObjectives={selectedObjectives}
            />
          ))}
          <Button
            mode="contained"
            buttonColor={colors.primaryColor}
            textColor="white"
            disabled={selectedObjectives.length < 3}
            accessibilityLabel="Continue"
            style={{ paddingVertical: 6 }}
            onPress={handleContinue}
          >
            Continue
          </Button>
        </ScrollView>
      </View>
    </View>
  );
}

const Objective = ({ text, index, selectObjective, selectedObjectives }) => {
  const isSelected = selectedObjectives.includes(text);
  return (
    <Pressable
      key={index}
      onPress={() => selectObjective(text)}
      style={{
        paddingVertical: 16,
        paddingHorizontal: 12,
        backgroundColor: isSelected ? "#F4F7FE" : "",
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: isSelected ? "#0066FF" : "#D8D8DA",
        marginBottom: 12,
      }}
    >
      <Text style={{ color: colors.lightGray, fontWeight: 500 }}>{text}</Text>
    </Pressable>
  );
};
