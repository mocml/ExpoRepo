import { ColorValue, StyleSheet, TextInput, TextInputProps, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { LegacyColors as Colors } from '@/constants/Colors'
import { metrics } from '@/utils/metrics'
import Icon from '../atoms/Icon'
import Text from '../atoms/Text'
interface FormInputProps extends TextInputProps {
  iconName?: any,
  iconSize?: number,
  suffixIconSize?: number,
  iconColor?: ColorValue,
  suffixIconName?: any,
  suffixIconPress?: () => void,
  containerStyle?: ViewStyle,
  textInputStyle?: ViewStyle,
  color?: ColorValue,
  label?: any
}

const FormInput = ({
  iconName,
  suffixIconName,
  value,
  iconSize = metrics.scale(24),
  iconColor = Colors.icon,
  onChangeText,
  suffixIconPress = () => { },
  containerStyle,
  textInputStyle,
  color = Colors.input,
  suffixIconSize = NaN,
  placeholderTextColor = Colors.placeholder,
  label,
  ...props
}: FormInputProps) => {
  return (
    <View style={styles.fullWidth}>
      {label && <Text.Label style={styles.topLabel}>{label}</Text.Label>}
      <View style={[styles.inputWrap, { backgroundColor: color }, containerStyle]}>
        {iconName && <Icon name={iconName}
          size={iconSize}
          color={iconColor} />}
        <TextInput placeholder={props.placeholder}
          value={value}
          placeholderTextColor={placeholderTextColor}
          style={[styles.textInput, textInputStyle]}
          onChangeText={onChangeText}
          autoCapitalize='none'
          autoCorrect={false}
          multiline={false}
          numberOfLines={1}
          {...props}
        />
        {suffixIconName && <TouchableOpacity onPress={suffixIconPress} activeOpacity={1}>
          <Icon name={suffixIconName}
            size={suffixIconSize || iconSize}
            color={iconColor} />
        </TouchableOpacity>}
      </View>
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderInput,
    borderRadius: metrics.radius.small,
    paddingHorizontal: metrics.mScale(12),
    gap: metrics.mScale(12),
    width: '100%',
  },
  textInput: {
    color: Colors.text,
    textAlignVertical: 'center',
    paddingVertical: metrics.vScale(13),
    flex: 1,
    fontSize: metrics.mScale(16),
  },
  topLabel: {
    marginBottom: metrics.spacing.small,
    fontWeight: '500'
  },
  fullWidth: {
    width: '100%'
  }
})