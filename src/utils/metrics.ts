import { Dimensions, Platform } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

// Lấy kích thước màn hình thiết bị
const { width, height } = Dimensions.get('window');

// Đảm bảo width luôn là cạnh ngắn (phòng trường hợp xoay ngang màn hình)
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

export const metrics = {
  // 1. Kích thước màn hình (Dùng cho Modal, Bottom Sheet, Full width)
  width: screenWidth,
  height: screenHeight,

  // 2. Export lại các hàm scale để import từ 1 nguồn duy nhất
  scale,//Scale theo chiều ngang
  vScale: verticalScale, // Scale theo chiều dọc
  mScale: moderateScale,
  // 3. Hệ thống Khoảng cách (Padding, Margin) - Dùng moderateScale để không quá to trên Tablet
  spacing: {
    tiny: moderateScale(4),
    small: moderateScale(8),
    sm: moderateScale(12),
    base: moderateScale(16),
    medium: moderateScale(20),
    large: moderateScale(24),
    xlarge: moderateScale(32),
    xxlarge: moderateScale(48),
  },

  // 4. Hệ thống Bo góc (Border Radius)
  radius: {
    tiny: moderateScale(4),
    small: moderateScale(8),   // Bo góc thẻ Card, Input
    medium: moderateScale(12),
    large: moderateScale(16),
    xLarge:moderateScale(20),
    xxLarge:moderateScale(24),  // Bo góc Modal, Bottom Sheet
    full: 999,                 // Nút bo tròn hoàn toàn
  },

  // 5. Kích thước Icon
  icon: {
    small: moderateScale(16),
    base: moderateScale(24),   // Icon chuẩn trên Header/Bottom Tab
    large: moderateScale(32),
    xlarge: moderateScale(48),
  },
  // 6. Header & Bottom Tab (Để fix cứng chiều cao nếu cần custom)
  headerHeight: Platform.OS === 'ios' ? verticalScale(44) : verticalScale(56),
  bottomTabHeight: verticalScale(60),
};