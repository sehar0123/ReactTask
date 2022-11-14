import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
  View,
  Image,
  Text
} from 'react-native';
// import Text from '../Text';
import Icon from 'react-native-dynamic-vector-icons';
import { heightRef } from '../../Constant/screenSize';
import { theme } from '../../Core/Theme';



const Button = ({
  buttonHeight = 60, ///Defines button height.
  buttonWidth = '100%', ///Defines button width.
  buttonColor = 'white', ///Color of button which is by default theme color of app.
  buttonText = 'Click me', ///Title text of the button.
  buttonPosition = 'center', ///Defines the position of button whether its center, flex-start(left most), flex-end(right most)
  buttonCorners = 10, ///Corners of button.
  titleColor = 'white', ///Defines color of button title.
  titleFontStyle = 'bold', ///Defines text style of button title.
  titleFontSize = 15, ///Font size of button.
  isLoading = false, ///false state show button while true state show activity indicator (loading sign) on button.
  isIcon = false, ///Show icon instead of title.
  iconType = 'AntDesign', /// Icon type can be accessed from "https://oblador.github.io/react-native-vector-icons/".
  iconName = 'github', /// Icon name can be accessed from "https://oblador.github.io/react-native-vector-icons/".
  iconSize = 30, /// Icon size on button.
  iconColor = 'white', /// Color of button icon.
  elevation, ///Defines elevation of button.
  justifyContent = 'center', ///Defines whether content vertically (button title or button icon) should be in on top(flex-start), center(center) or bottom(flex-end)
  alignItems = 'center', ///Defines whether content vertically (button title or button icon) should be in on left(flex-start), center(center) or right(flex-end)
  onPress,
  marginRight = 0,
  loaderColor = 'white',
  imgHeight = 28,
  imgWidth = 28,
  borderWidth = 0.5,
  borderColor = 'white', ///Defines the border color of button.
  isImage, ///Defines if button includes the image.
  imgSource, ///Defines the uri of button image.
  style, ///Add further more styling of button like paddings and margins.
  isButtonText = true, ///Defines button with icons include text.
  textProps, /// Add further more styling of button title or button icon like paddings and margins.
  left = 0,
  right = 0,
  disable = false, ///To disable touchable opacity of button
  ...props
}: TouchableOpacityProps) => {
  let height =
    typeof buttonHeight === 'string' ? buttonHeight : buttonHeight * heightRef;
  return (
    <TouchableOpacity
      onPress={onPress}
      elevation={elevation}
      disabled={disable}
      style={{
        height: buttonHeight,
        width: buttonWidth,
        backgroundColor: buttonColor,
        alignSelf: buttonPosition,
        borderRadius: buttonCorners,
        borderColor: borderColor,
        borderWidth: borderWidth,
        justifyContent,
        alignItems,
        ...style,
      }}
      {...{...props}}>
      {isLoading ? (
        <ActivityIndicator animating={true} size="small" color={loaderColor} />
      ) : isIcon && !isImage ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name={iconName}
            type={iconType}
            size={iconSize}
            color={iconColor}
            style={{alignSelf: 'center', marginRight: right, marginLeft: left}}
          />
          {isButtonText ? (
            <Text
              style={{
                color: titleColor,
                fontSize: titleFontSize,
                fontWeight: titleFontStyle,
                marginLeft: 4,
              }}
              {...{...textProps}}>
              {buttonText}
            </Text>
          ) : null}
        </View>
      ) : !isIcon && isImage ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={imgSource}
            style={{height: imgHeight, width: imgWidth}}
          />
          {isButtonText ? (
            <Text
              style={{
                color: titleColor,
                fontSize: titleFontSize,
                fontWeight: titleFontStyle,
                marginLeft: 4,
              }}
              {...{...textProps}}>
              {buttonText}
            </Text>
          ) : null}
        </View>
      ) : (
        <Text
          style={{
            color: titleColor,
            fontSize: titleFontSize,
            fontWeight: titleFontStyle,
            marginRight: marginRight,
          }}
          {...{...textProps}}>
          {buttonText}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
