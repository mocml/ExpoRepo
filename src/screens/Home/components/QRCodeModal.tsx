import React, { useRef, useImperativeHandle, forwardRef, useMemo, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomSheetView, BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import QRCode from 'react-native-qrcode-svg';
import Text from '@/components/atoms/Text';
import { LegacyColors as Colors } from '@/constants/Colors';
import { metrics as Metrics } from '@/utils/metrics';

interface QRCodeModalProps {
  value: string;
}

export interface QRCodeModalRef {
  present: () => void;
  dismiss: () => void;
}

export const QRCodeModal = forwardRef<QRCodeModalRef, QRCodeModalProps>(({ value }, ref) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  // You can set specific heights like ['25%', '50%'], or use enableDynamicSizing
  const snapPoints = useMemo(() => ['50%'], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.3}
      />
    ),
    []
  );

  useImperativeHandle(ref, () => ({
    present: () => {
      bottomSheetRef.current?.present();
    },
    dismiss: () => {
      bottomSheetRef.current?.close();
    }
  }));

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      enableDynamicSizing={true}
      backgroundStyle={styles.background}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={styles.container}>
        <Text style={styles.title}>Mã Truy Cập</Text>
        <Text style={styles.subtitle}>Đưa mã này vào máy quét tại cổng để ra/vào</Text>

        <View style={styles.qrContainer}>
          <QRCode
            value={value}
            size={200}
            color={Colors.primary}
            backgroundColor={Colors.white}
          />
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  background: {
    borderRadius: 24,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: -4 },
    // shadowOpacity: 0.15,
    // shadowRadius: 10,
    // elevation: 8,
  },
  container: {
    padding: Metrics.spacing.large,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: Colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.text_secondary,
    marginBottom: Metrics.spacing.large,
    textAlign: 'center',
  },
  qrContainer: {
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: Metrics.spacing.large,
  }
});
