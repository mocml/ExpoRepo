import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { TrueSheet } from '@lodev09/react-native-true-sheet';
import { LegacyColors as Colors } from '@/constants/Colors';
import Icon from '@/components/atoms/Icon';
import { metrics } from '@/utils/metrics';
import Text from '../atoms/Text';

interface MiniAppSheetProps {
  sheetRef: React.RefObject<TrueSheet | null>;
}

const MiniAppSheet = ({ sheetRef, ...props }: MiniAppSheetProps) => {
  const dismissSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.dismiss();
    }
  };

  const APPS = ["HRM", "VPS", "ABC", "DFG", "HJK", "QWE"]
  return (
    <TrueSheet
      ref={sheetRef}
      detents={[0.18, 0.35]}
      grabber={false}
      backgroundColor={Colors.layout}
    >
      <View style={styles.sheetContainer}>
        <Text.Title style={styles.sheetTitle}>Tiện ích</Text.Title>
        <View style={styles.actionGrid}>

          {APPS.map((item) =>
            <TouchableOpacity key={item}
              style={styles.actionItem}
              onPress={dismissSheet}>
              <View style={[styles.actionIconBox]}>
                <Icon.Lucide name="folder-code" />
              </View>
              <Text.TinyText style={styles.actionText}>{item}</Text.TinyText>
            </TouchableOpacity>)
          }
        </View>
      </View>
    </TrueSheet>
  );
};

export default MiniAppSheet;

const styles = StyleSheet.create({
  sheetContainer: {
    paddingHorizontal: metrics.spacing.large,
    paddingTop: metrics.spacing.large,
    paddingBottom: metrics.spacing.xxlarge * 2,
    alignItems: 'center',
    backgroundColor: Colors.layout
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: metrics.spacing.large,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    rowGap: metrics.spacing.large,
  },
  actionItem: {
    width: '25%',
    alignItems: 'center',
    gap: metrics.spacing.small,
  },
  actionIconBox: {
    padding: metrics.mScale(18),
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.borderInput
  },
  actionText: {
    fontWeight: '600',
    textAlign: 'center',
  }
});
