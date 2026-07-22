import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Text from '@/components/atoms/Text';
import ElementButton from '@/components/atoms/ElementButton';
import { BottomTabInset, LegacyColors as Colors } from '@/constants/Colors';
import { metrics as Metrics } from '@/utils/metrics';
import { dummyEmployee } from '@/data/dummyEmployee';
import { QRCodeModal, QRCodeModalRef } from './components/QRCodeModal';
import { SafeAreaView } from 'react-native-safe-area-context';
export function Home() {
  const qrModalRef = useRef<QRCodeModalRef>(null);

  const handleShowQR = () => {
    qrModalRef.current?.present();
  };

  return (
    <SafeAreaView edges={['top']} style={styles.wrapper}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: Colors.primary, dark: Colors.primary }}
        headerImage={
          <View style={styles.headerCover}>
            <Image
              source={{ uri: dummyEmployee.avatarUrl }}
              style={styles.avatar}
            />
            <Text style={styles.headerName}>{dummyEmployee.fullName}</Text>
            <Text style={styles.headerId}>{dummyEmployee.id}</Text>
          </View>
        }>

        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>Thông tin nhân viên</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Chức vụ:</Text>
            <Text style={styles.infoValue}>{dummyEmployee.position}</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Phòng ban:</Text>
            <Text style={styles.infoValue}>{dummyEmployee.department}</Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Công ty:</Text>
            <Text style={styles.infoValue}>{dummyEmployee.company}</Text>
          </View>

          <ElementButton
            label="Mở Mã Cửa (QR)"
            onPress={handleShowQR}

            style={styles.qrButton}
          />
        </View>

      </ParallaxScrollView>

      <QRCodeModal ref={qrModalRef} value={dummyEmployee.accessCode} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  headerCover: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.white,
    marginBottom: Metrics.spacing.medium,
  },
  headerName: {
    fontSize: 22,
    color: Colors.white,
  },
  headerId: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 4,
  },
  infoContainer: {
    backgroundColor: Colors.white,
    borderRadius: 16,
  },
  sectionTitle: {
    fontSize: 18,
    color: Colors.text,
    marginBottom: Metrics.spacing.large,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Metrics.spacing.medium,
  },
  infoLabel: {
    fontSize: 14,
    color: Colors.text_secondary,
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    color: Colors.text,
    flex: 2,
    textAlign: 'right',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.borderInput,
  },
  qrButton: {
    marginTop: Metrics.spacing.large,
  }
});
