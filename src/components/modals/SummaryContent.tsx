import { StyleSheet, View } from 'react-native'
import React from 'react'
import { TrueSheet } from '@lodev09/react-native-true-sheet'
import { LegacyColors as Colors } from '@/constants/Colors'
import Text from '../atoms/Text'
import { metrics } from '@/utils/metrics'
import ElementButton from '../atoms/ElementButton'

interface RequestDetailSheetProps {
    sheetRef: React.RefObject<TrueSheet | null>;
}
const SummaryContent = ({ sheetRef }: RequestDetailSheetProps) => {
    const close = () => {
        sheetRef.current?.dismiss();
    }
    return (
        <TrueSheet
            ref={sheetRef}
            detents={['auto', 0.5, 0.9]}
            grabber={true}
            backgroundColor={Colors.white}
        >

            <View style={styles.content}>
                <View>
                    <Text.HeaderTitle style={styles.title}>Nội dung chi tiết</Text.HeaderTitle>
                    <View style={styles.contentWrap}>
                        <Text style={styles.detail}>
                            Rà soát, nghiên cứu, thực hiện theo quyết định ngày .... rà soát nghiên cứu liên quan đến quyết định ban hành yêu cầu kỹ thuật chi tiết về thử nghiệm giám sát thực hiện các công trình nguồn
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.btnWrap}>
                <ElementButton onPress={close} label="Đóng" />
            </View>
        </TrueSheet>
    )
}

export default SummaryContent;
const styles = StyleSheet.create({
    btnWrap: {
        paddingHorizontal: metrics.spacing.xlarge,
    },
    content: {
        padding: metrics.spacing.xlarge,
        rowGap: metrics.spacing.xlarge,
    },
    contentWrap: {
        marginTop: metrics.spacing.base,
    },
    title: {
    },
    detail: {
        fontWeight: '300',
    }
})