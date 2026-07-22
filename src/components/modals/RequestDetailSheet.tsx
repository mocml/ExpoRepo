import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Dimensions, TextInput } from 'react-native';
import { TrueSheet } from '@lodev09/react-native-true-sheet';
import { LegacyColors as Colors } from '@/constants/Colors';
import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';
import { metrics } from '@/utils/metrics';

interface RequestDetailSheetProps {
  sheetRef: React.RefObject<TrueSheet | null>;
}

const RequestDetailSheet = ({ sheetRef }: RequestDetailSheetProps) => {
  const [comment, setComment] = useState('');

  const closeSheet = () => {
    sheetRef.current?.dismiss();
  };

  return (
    <TrueSheet
      ref={sheetRef}
      detents={[0.6, 0.9]}
      backgroundColor={Colors.white}
    >
      <View style={styles.body}>
        <View style={styles.sheetHeader}>
          <View style={styles.badgeWrap}>
            <Text style={styles.badgeText}>CHỜ DUYỆT</Text>
            <Icon.Lucide name={'clock'} color={'#EF4444'} size={14} />
          </View>
          <TouchableOpacity style={styles.btnClose} onPress={closeSheet}>
            <Icon.Lucide name="x" />
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: metrics.spacing.large, paddingBottom: metrics.spacing.base }}>
          <Text.Title style={styles.titleCode}>Mã: 07/2026/ĐT-HT</Text.Title>
        </View>

        <View style={styles.divider} />

        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={true} contentContainerStyle={styles.scrollContent}>
          {/* Info Rows */}
          <View style={styles.infoRow}>
            <Text.Label style={styles.infoLabel}>Đơn vị</Text.Label>
            <Text.Label style={styles.infoValue}>Bitexco Power</Text.Label>
          </View>
          <View style={styles.infoRow}>
            <Text.Label style={styles.infoLabel}>Phòng/Ban</Text.Label>
            <Text.Label style={styles.infoValue}>Ban Tổng Giám Đốc</Text.Label>
          </View>
          <View style={styles.infoRow}>
            <Text.Label style={styles.infoLabel}>Loại đăng ký</Text.Label>
            <Text.Label style={styles.infoValue}>Phòng họp</Text.Label>
          </View>
          <View style={styles.infoRow}>
            <Text.Label style={styles.infoLabel}>Người đăng ký</Text.Label>
            <Text.Label style={styles.infoValue}>Nguyễn Văn B</Text.Label>
          </View>

          {/* Content Card */}
          <View style={styles.contentCard}>
            <Text.Label style={styles.cardSectionTitle}>NỘI DUNG THỰC HIỆN</Text.Label>
            <Text.Title style={styles.cardTitle}>Họp bàn phương án triển khai dự án mới tại khu vực Tây Bắc.</Text.Title>
            <View style={styles.cardDivider} />
            <View style={styles.cardInfoRow}>
              <Icon.Lucide name="clock" size={16} color={Colors.primary} />
              <View>
                <Text.Title style={styles.cardValBold}>12/03/2026</Text.Title>
                <Text.Title style={[styles.cardValBold, { color: Colors.primary }]}>11:30 - 12:00 (30 phút)</Text.Title>
              </View>
            </View>
            <View style={styles.cardInfoRow}>
              <Icon.Lucide name="users" size={16} color={Colors.primary} />
              <View style={{ flex: 1 }}>
                <Text.Label style={styles.cardSectionTitle}>NGƯỜI THAM GIA</Text.Label>
                <Text.Label style={styles.cardSubText}>Nguyễn Văn A, Trần Thị B, Giám đốc C</Text.Label>
              </View>
            </View>
          </View>

          {/* Timeline */}
          <Text.Title style={styles.timelineTitle}>Lịch sử tiến trình</Text.Title>
          <View style={styles.timelineItem}>
            <View style={styles.timelineDotWrap}>
              <View style={[styles.timelineDot, { backgroundColor: Colors.primary }]} />
              <View style={styles.timelineLine} />
            </View>
            <View style={styles.timelineContent}>
              <Text.Label style={styles.timelineDate}>10/03/2026 09:15</Text.Label>
              <Text.Title style={styles.timelineHeading}>Tạo đơn mới</Text.Title>
              <Text.Label style={styles.timelineSubText}>Người thực hiện: <Text.Label style={styles.timelineSubTextBold}>Nguyễn Văn B</Text.Label></Text.Label>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <View style={styles.timelineDotWrap}>
              <View style={[styles.timelineDot, { backgroundColor: Colors.secondary }]} />
            </View>
            <View style={[styles.timelineContent, { paddingBottom: 0 }]}>
              <Text.Label style={[styles.timelineDate, { color: Colors.secondary }]}>Hiện tại</Text.Label>
              <Text.Title style={styles.timelineHeading}>Chờ Quản lý phê duyệt</Text.Title>
              <Text.Label style={styles.timelineSubText}>Người xử lý: <Text.Label style={styles.timelineSubTextBold}>Bạn</Text.Label></Text.Label>
            </View>
          </View>

          {/* Comment Input */}
          <Text.Title style={styles.commentTitle}>Ý kiến phản hồi</Text.Title>
          <TextInput
            style={styles.commentInput}
            placeholder="Nhập nội dung phê duyệt hoặc từ chối..."
            placeholderTextColor={Colors.text_secondary}
            multiline
            value={comment}
            onChangeText={setComment}
            textAlignVertical="top"
          />

        </ScrollView>

        {/* Footer Actions */}
        <View style={styles.footer}>
          <TouchableOpacity style={[styles.actionBtn, styles.approveBtn]}>
            <Text style={styles.approveText}>Phê duyệt</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, styles.rejectBtn]}>
            <Text style={styles.rejectText}>Từ chối</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TrueSheet>
  );
};

export default RequestDetailSheet;

const styles = StyleSheet.create({
  sheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.spacing.large,
    paddingTop: metrics.spacing.large,
    paddingBottom: metrics.spacing.small,
    alignItems: 'center',
  },
  badgeWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEE2E2',
    paddingHorizontal: metrics.spacing.small,
    paddingVertical: metrics.spacing.tiny,
    borderRadius: metrics.radius.small,
    gap: metrics.spacing.tiny,
    borderWidth: 1,
    borderColor: '#FECACA'
  },
  badgeText: {
    color: '#EF4444',
    fontSize: 12,
    fontWeight: '700',
  },
  btnClose: {
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleCode: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.layout_secondary,
    width: '100%',
  },
  scrollContent: {
    paddingHorizontal: metrics.spacing.large,
    paddingTop: metrics.spacing.base,
    paddingBottom: metrics.spacing.xxlarge,
    gap: metrics.spacing.base,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  infoLabel: {
    color: Colors.text_secondary,
    flex: 1,
  },
  infoValue: {
    color: Colors.text,
    fontWeight: '700',
    flex: 2,
    textAlign: 'right',
  },
  contentCard: {
    backgroundColor: Colors.layout_tertiary,
    borderRadius: metrics.radius.large,
    padding: metrics.spacing.base,
    borderWidth: 1,
    borderColor: Colors.border,
    marginTop: metrics.spacing.base,
    marginBottom: metrics.spacing.small,
    gap: metrics.spacing.small,
  },
  cardSectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.text_secondary,
    textTransform: 'uppercase',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    lineHeight: 24,
  },
  cardDivider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: metrics.spacing.small,
  },
  cardInfoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: metrics.spacing.base,
  },
  cardValBold: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
  },
  cardSubText: {
    color: Colors.text,
    lineHeight: 20,
    marginTop: 2,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginTop: metrics.spacing.base,
    marginBottom: metrics.spacing.small,
  },
  timelineItem: {
    flexDirection: 'row',
  },
  timelineDotWrap: {
    alignItems: 'center',
    width: 20,
    marginRight: metrics.spacing.base,
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginTop: 4,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: Colors.border,
    marginVertical: 4,
  },
  timelineContent: {
    flex: 1,
    paddingBottom: metrics.spacing.large,
  },
  timelineDate: {
    color: Colors.text_secondary,
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 2,
  },
  timelineHeading: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  timelineSubText: {
    color: Colors.text_secondary,
    fontSize: 14,
  },
  timelineSubTextBold: {
    color: Colors.text,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    padding: metrics.spacing.large,
    marginBottom: metrics.spacing.xxlarge,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.layout_secondary,
    gap: metrics.spacing.base,
  },
  commentTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginTop: metrics.spacing.base,
    marginBottom: metrics.spacing.small,
  },
  commentInput: {
    backgroundColor: Colors.layout_tertiary,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: metrics.radius.medium,
    padding: metrics.spacing.base,
    color: Colors.text,
    fontSize: 15,
    minHeight: 100,
    marginBottom: metrics.spacing.large,
  },
  actionBtn: {
    flex: 1,
    paddingVertical: metrics.mScale(14),
    borderRadius: metrics.radius.large,
    alignItems: 'center',
    justifyContent: 'center',
  },
  approveBtn: {
    backgroundColor: Colors.primary
  },
  rejectBtn: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.error,
  },
  approveText: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
  rejectText: {
    color: Colors.reject,
    fontWeight: '700',
    fontSize: 16,
  },
  body: {
    height: '100%'
  }
});
