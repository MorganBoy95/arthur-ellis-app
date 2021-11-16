import styled from 'styled-components';
import { View, Text, Image, Input, TouchableOpacity} from 'native-base';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

//colour
export const Colors = {
    primary: "#ffffff",
    secondary: "#f2f4ef",
    text_color: "#976f88",
    text_color_secondary:"#ffffff",
    tertiary: "#b0c199",
    button_color:"#976f88",
    black: "#000000",
    green: "#008000"
};

const {primary, secondary, text_color, tertiary, text_color_secondary, button_color, black, green} = Colors;

export const StyledContainer = styled.View`
    flex 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 30}px;
    background-color: ${primary};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled.Image`
    width: 146px;
    height: 99px;
`;
export const HomeLogo = styled.Image`
    width: 98px;
    height: 66px;
`;

export const PageMantra = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${text_color};
    padding: 30px;
`;

//

export const SubTitle = styled.Text`
    font-size :18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${black};
    padding: 20px;
    
    ${(props) => props.welcome && `
        margin-bottom: 5px;
        font-weight: normal;
    `}
`;

export const StyledFormArea = styled.View`
    width: 100%;
    padding: 25px;
    height: 800px;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px
    margin-bottom: 10px;
    color: ${black};
`;
// export const MySelectInput = styled.Select`
//     background-color: ${secondary};
//     padding: 15px;
//     padding-left: 55px;
//     padding-right: 55px;
//     border-radius: 5px;
//     font-size: 16px;
//     height: 60px;
//     margin-vertical: 3px
//     margin-bottom: 10px;
//     color: ${black};
// `;

export const StyledInputLabel = styled.Text`
    color: ${black};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px
    top: 30px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px
    top: 30px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${button_color};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    ${(props) => props.google == true && `
    background-color: ${green};
    flex-direction: row;
    justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${text_color_secondary};
    font-size: 16px;

    ${(props) => props.google == true && `
    padding: 25px
    `}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${black};
    margin-vertical: 5px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color: ${text_color};
    font-size: 15px;
`;

// Welcome Page

export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 5px;
    justify-content: center;
`;

export const Banner = styled.Image`
    width: 110%;
    height: 200px;
    margin-top: 45px;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
`;
 
export const PageTitle = styled.Text`
    font-size: 35px;
    text-align: center;
    font-weight: bold;
    color: ${text_color};
    padding: 10px;
`;

//Home

export const CategoryContainer = styled(InnerContainer)`
padding: 25px;
padding-top: 5px;
align-items: left;
color: ${secondary};
`;

