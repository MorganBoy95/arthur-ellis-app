import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
    InnerContainer,
    SubTitle,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    PageTitle
} from '../components/styles';

const Welcome = ({navigation}) => {
    return (    
        <>    
        <StatusBar style="dark"/>
        <InnerContainer onSubmit={(values) => {
                  console.log(values);
                  navigation.navigate('Welcome');
                }}>
            <WelcomeContainer>
                <PageTitle>Welcome...</PageTitle>
                <SubTitle welcome={true}>Joshua</SubTitle>
                <SubTitle>How are you feeling today?</SubTitle>
                <Line/>
                <StyledButton onPress={() => navigation.navigate("Home")}>
                    <ButtonText>Submit</ButtonText>
                </StyledButton>
            </WelcomeContainer>
        </InnerContainer>
        </>
    );
}

export default Welcome;