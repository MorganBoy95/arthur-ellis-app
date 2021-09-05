import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

// formik
import { Formik, setNestedObjectValues } from 'formik';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageMantra,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from './../components/styles';
import { View, Select, Touchable, ScrollView, KeyboardAvoidingView } from 'native-base';

// Colors
const {tertiary, darkLight, primary} = Colors;

// keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';


// DateTimePicker
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const Signup = ({navigation}) => {
    <StatusBar style="dark" />
        const [hidePassword, setHidePassword] = useState(true);
        const [show, setShow] = useState(false);
         const [date, setDate] = useState(new Date(2000, 0, 1));

         // Actual date of birth to be sent
         const [dob, setDob] = useState();

          const onChange = (event, selectedDate) => {
             const currentDate = selectedDate || Date;
             setShow(false);
             setDate(currentDate);
             setDob(currentDate);
         }

         const showDatePicker = () => {
             setShow(true);
         }

    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/logo.png')} />
                <PageMantra>Bringing value back to life</PageMantra>
                <SubTitle>Account Signup</SubTitle>

            {show && (
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode='date'
                is24Hour={true}
                display="default"
                onChange={onChange}/>     
             )}    
            <Formik
                initialValues={{ fName: "", email: "", dateOfBirth: '', work: "", password: "", confirmPassword: "" }}
                onSubmit={(values) => {
                  console.log(values);
                  navigation.navigate('Welcome');
                }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors}) => (
                        <StyledFormArea>
                            <MyTextInput 
                            label="First Name"
                            icon="person"
                            placeholder="Joe"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('fName')}
                            onBlur={handleBlur('fName')}
                            value={values.fName}
                            />
                             <MyTextInput 
                            label="Last Name"
                            icon="person"
                            placeholder="Bloggs"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('lName')}
                            onBlur={handleBlur('lName')}
                            value={values.lName}
                            />
                            <MyTextInput 
                            label="Email Address"
                            icon="mail"
                            placeholder="johndoe@email.com"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                            />
                            <MyTextInput 
                            label="Date of Birth"
                            icon="calendar"
                            placeholder="DD - MM - YYYY"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('dateOfBirth')}
                            onBlur={handleBlur('dateOfBirth')}
                            value={dob ? dob.toDateString() : ''}
                            isDate={true}
                            editable={false}
                            showDatePicker={showDatePicker}
                            />
                            {/* <MySelectInput 
                            label="Company"
                            icon="briefcase"
                            placeholder="Company/Institution"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('work')}
                            onBlur={handleBlur('work')}
                            value={values.work}
                            /> */}
                            <MyTextInput 
                            label="Company"
                            icon="briefcase"
                            placeholder="Company/Institution"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('work')}
                            onBlur={handleBlur('work')}
                            value={values.work}
                            />
                            <MyTextInput 
                            label="Password"
                            icon="lock"
                            placeholder="* * * * * *"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                            />
                            <MyTextInput 
                            label="Confirm Password"
                            icon="lock"
                            placeholder="* * * * * *"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                            />
                            <MsgBox>...</MsgBox>
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>
                                    Signup
                                </ButtonText>
                            </StyledButton>
                            <Line  />
                            <ExtraView>
                                <ExtraText>Already an account?</ExtraText>
                                <TextLink onPress={() => navigation.navigate("Login")}>
                                    <TextLinkContent>
                                        Login
                                    </TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>
                    )}

                </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
}

// const MySelectInput = ({label, icon, ...props}) => {
//     return (
//         <Select onValueChange={(itemValue) => setLanguage(itemValue)}
//         _selectedItem={{
//           bg: "cyan.600",
//           endIcon: <CheckIcon size={4}/>,}}
//           >
//             <StyledInputLabel>{label}</StyledInputLabel>
//             <RightIcon>
//                 <Ionicons name="chevron-down-outline" size={30} color={darkLight} />
//             </RightIcon>

//             <Select.Item label="JavaScript" value="js" />
//         <Select.Item label="TypeScript" value="ts" />
//         </Select>
//     );
// }

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={tertiary} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
             {!isDate && <StyledTextInput {...props}/>}
            {isDate && (
                <TouchableOpacity onPress={showDatePicker}>
                    <StyledTextInput {...props}/>
                </TouchableOpacity>
            )} 
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    );
};

export default Signup;