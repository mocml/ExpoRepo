import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ActivityIndicator, Modal } from 'react-native-paper'
import { LegacyColors as Colors } from '@/constants/Colors'
import { metrics } from '@/utils/metrics'

const LoadingScreen = ({
    visible = false,
    onDismiss = () => { },
}) => {
    return (
        <Modal
            visible={visible}
            dismissable={false}
            onDismiss={onDismiss}
        >
            <View style={styles.loadingWrap}>
                <ActivityIndicator
                    size={metrics.mScale(32)}
                    color={Colors.primary}
                />
            </View>
        </Modal>
    )
}

export default LoadingScreen;

const styles = StyleSheet.create({
    loadingWrap: {
        backgroundColor: '#FFFFFF',
        margin: 'auto',
        height: metrics.mScale(68),
        width: metrics.mScale(68),
        borderRadius: metrics.radius.xxLarge,
        overflow: 'hidden',
        // alignItems: 'center',
        justifyContent: 'center'
    }
})