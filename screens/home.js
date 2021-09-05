import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, KeyboardAvoidingView, HStack, Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';


const {text_color} = Colors;

// styles
import {
    StyledContainer,
    InnerContainer,
    HomeLogo,
    Colors
} from './../components/styles';

// keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();



const Home = ({navigation}) => {
    return(
        <KeyboardAvoidingWrapper><StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <HomeLogo resizeMode="cover" source={require('./../assets/img/logo.png')} />
                <HStack space={3} alignItems="center">
                    <Box>
                        <Text>Hello</Text>
                    </Box>
                    <Box>
                        <Text>Hello</Text>
                    </Box>
                </HStack>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
}

export default Home;