import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Box,
  HStack,
  VStack,
  FlatList,
  Checkbox,
  Spacer,
  Image,
  Center
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";

const { text_color } = Colors;

// styles
import {
  StyledContainer,
  InnerContainer,
  HomeLogo,
  CategoryContainer,
  Colors,
  PageMantra,
} from "./../components/styles";

import BottomTab from "./../navigators/BottomTab";

// keyboard avoiding view
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

//icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DateTimePicker from "@react-native-community/datetimepicker";

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  <StatusBar style="dark" />;
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

  // Actual date of birth to be sent
  const [day, setDay] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || Date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };
  return (
    <>
      <KeyboardAvoidingWrapper>
        <StyledContainer>
          <InnerContainer>
            <HomeLogo
              resizeMode="cover"
              source={require("./../assets/img/logo.png")}
            />
          </InnerContainer>
          <InnerContainer>
            {/*{show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
            <HStack space={3} alignItems="center">
              <Box>
                {({ handleChange, handleBlur }) => (
                  <MyTextInput
                    label="Date"
                    icon="calendar"
                    onChangeText={handleChange("dateOfBirth")}
                    onBlur={handleBlur("dateOfBirth")}
                    value={day ? day.toDateString() : ""}
                    isDate={true}
                    editable={false}
                    showDatePicker={showDatePicker}
                  />
                )}
              </Box>
              <Box>
                <Text>Banana and Doughnut Count</Text>
              </Box>
                </HStack>*/}
                <HStack space={3} alignItems="center">
                    <Center h="150" w="110" align-items="left">
                        <Image width="100px" height="70px" source={require("./../assets/img/Banana.png")}/>
                        <Text>Banana</Text>
                    </Center>
                    <Center h="150" w="110" align-items="left">
                        <Image width="87px" height="87px" source={require("./../assets/img/Donut.png")}/>
                        <Text>Donut</Text>
                    </Center>
                </HStack>
          </InnerContainer>
          <InnerContainer>
            <PageMantra>Move</PageMantra>
            <Box border={1} width="375px" height="auto" borderColor="#f2f4ef">
              <FlatList>
                <Box
                  border={1}
                  width="375px"
                  height="auto"
                  borderColor="#f2f4ef"
                >
                  <VStack>
                    <Text></Text>
                  </VStack>
                  <Spacer />
                  <Checkbox />
                </Box>
              </FlatList>
            </Box>

            <PageMantra>Focus</PageMantra>
            <Box border={1} width="375px" height="auto" borderColor="#f2f4ef">
              <FlatList>
                <Box
                  border={1}
                  width="375px"
                  height="auto"
                  borderColor="#f2f4ef"
                >
                  <VStack>
                    <Text></Text>
                  </VStack>
                  <Spacer />
                  <Checkbox />
                </Box>
              </FlatList>
            </Box>
            <PageMantra>Discover</PageMantra>
            <Box border={1} width="375px" height="auto" borderColor="#f2f4ef">
              <FlatList>
                <Box
                  border={1}
                  width="375px"
                  height="auto"
                  borderColor="#f2f4ef"
                >
                  <VStack>
                    <Text></Text>
                  </VStack>
                  <Spacer />
                  <Checkbox />
                </Box>
              </FlatList>
            </Box>
            <PageMantra>Communicate</PageMantra>
            <Box border={1} width="375px" height="auto" borderColor="#f2f4ef">
              <FlatList>
                <Box
                  border={1}
                  width="375px"
                  height="auto"
                  borderColor="#f2f4ef"
                >
                  <VStack>
                    <Text></Text>
                  </VStack>
                  <Spacer />
                  <Checkbox />
                </Box>
              </FlatList>
            </Box>
            <PageMantra>Help</PageMantra>
            <Box border={1} width="375px" height="auto" borderColor="#f2f4ef">
              <FlatList>
                <Box
                  border={1}
                  width="375px"
                  height="auto"
                  borderColor="#f2f4ef"
                >
                  <VStack>
                    <Text></Text>
                  </VStack>
                  <Spacer />
                  <Checkbox />
                </Box>
              </FlatList>
            </Box>
          </InnerContainer>
        </StyledContainer>
      </KeyboardAvoidingWrapper>
    </>
  );
};

const MyTextInput = ({ label, icon, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={tertiary} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Home;
