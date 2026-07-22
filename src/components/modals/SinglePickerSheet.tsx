import React from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { TrueSheet } from '@lodev09/react-native-true-sheet';
import { LegacyColors as Colors } from '@/constants/Colors';
import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';
import { metrics } from '@/utils/metrics';

interface SelectItem {
  label: string;
  value: string;
}

interface SinglePickerSheetProps {
  sheetRef: React.RefObject<TrueSheet | null>;
  title: string;
  data: SelectItem[] | string[];
  selectedValue: string;
  onSelect: (value: string) => void;
  detents?: (number | "auto")[];
  scrollable?: boolean;
}

const SinglePickerSheet = ({ 
  sheetRef, 
  title, 
  data, 
  selectedValue, 
  onSelect,
  detents = [0.45],
  scrollable = true
}: SinglePickerSheetProps) => {

  const handleSelect = (val: string) => {
    onSelect(val);
    sheetRef.current?.dismiss();
  };

  const renderContent = () => (
    <>
      <Text.Title style={styles.sheetTitle}>{title}</Text.Title>
      {data.map((item, index) => {
        const itemValue = typeof item === 'string' ? item : item.value;
        const itemLabel = typeof item === 'string' ? item : item.label;
        const isSelected = selectedValue === itemValue;

        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.itemRow,
              isSelected && styles.itemRowSelected
            ]}
            onPress={() => handleSelect(itemValue)}
            activeOpacity={0.7}
          >
            <Text style={styles.itemText}>{itemLabel}</Text>
            {isSelected && (
              <Icon.Lucide name="check" color={Colors.primary} size={20} />
            )}
          </TouchableOpacity>
        );
      })}
    </>
  );

  return (
    <TrueSheet
      ref={sheetRef}
      detents={detents}
      grabber={true}
      backgroundColor={Colors.white}
    >
      {scrollable ? (
        <ScrollView contentContainerStyle={styles.sheetContainer} showsVerticalScrollIndicator={false}>
          {renderContent()}
        </ScrollView>
      ) : (
        <View style={styles.sheetContainer}>
          {renderContent()}
        </View>
      )}
    </TrueSheet>
  );
};

export default SinglePickerSheet;

const styles = StyleSheet.create({
  sheetContainer: {
    paddingHorizontal: metrics.spacing.base,
    paddingTop: metrics.spacing.large,
    paddingBottom: metrics.spacing.xxlarge * 2,
    backgroundColor: Colors.white,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: metrics.spacing.large,
    textAlign: 'center',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: metrics.spacing.base,
    paddingHorizontal: metrics.spacing.base,
    borderBottomWidth: 1,
    borderBottomColor: Colors.layout_secondary,
    borderRadius: metrics.radius.medium,
  },
  itemRowSelected: {
    backgroundColor: Colors.layout_secondary,
  },
  itemText: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: '500',
  },
});
