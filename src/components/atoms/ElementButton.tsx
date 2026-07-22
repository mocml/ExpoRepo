import { TouchableOpacity, TouchableOpacityProps, ColorValue } from 'react-native'
import React from 'react'
import Text from './Text'
import { StyleSheet } from 'react-native'
import { metrics } from '@/utils/metrics'
import { LegacyColors as Colors } from '@/constants/Colors'

interface ElementButton extends TouchableOpacityProps {
  label: String,
  color?: ColorValue
  backgroundColor?: ColorValue,
  outlineBackground?: ColorValue,
  isOutline?: boolean,
  isFlex?: boolean,
}
const ElementButton = ({
  label,
  color = Colors.white,
  backgroundColor = Colors.primary,
  outlineBackground = Colors.white,
  isOutline = false,
  isFlex = false,
  ...props
}: ElementButton) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      {...props}
      style={[
        isOutline
          ? styles.outlineWrap
          : styles.wrap, props.style,
        isFlex
          ? styles.flexing
          : styles.fullWidth,
        {
          backgroundColor: isOutline
            ? outlineBackground
            : backgroundColor,
          borderWidth: isOutline ? metrics.mScale(1) : undefined,
          borderColor: isOutline ? backgroundColor : undefined,
          opacity: props.disabled ? 0.5 : 1
        },

      ]}
    >
      <Text.Label style={styles.btnLabel} color={isOutline ? backgroundColor : color}>{label}</Text.Label>
    </TouchableOpacity>
  )
}

export default ElementButton;

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    borderRadius: metrics.radius.full,
    paddingVertical: metrics.mScale(13),
  },
  btnLabel: {
    fontWeight: '700'
  },
  outlineWrap: {
    paddingVertical: metrics.mScale(12),
    alignItems: 'center',
    borderRadius: metrics.radius.full,
  },
  fullWidth: {
    width: '100%'
  },
  flexing: {
    flex: 1
  }
})