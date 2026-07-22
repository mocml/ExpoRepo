import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from '../atoms/Icon'
import { LegacyColors as Colors } from '@/constants/Colors'
import { metrics } from '@/utils/metrics'

const SearchbarFilter = () => {
    return (
        <View style={styles.searchSection}>
            <View style={styles.searchInputContainer}>
                <Icon.Lucide name="search" color={Colors.text} />
                <TextInput
                    placeholder="Tìm kiếm"
                    placeholderTextColor={Colors.placeholder}
                    style={styles.searchInput}
                />
            </View>
            <TouchableOpacity style={styles.addButton}>
                <Icon.Lucide name="sliders-horizontal" color={Colors.primary_contrast} />
            </TouchableOpacity>
        </View>
    )
}

export default SearchbarFilter;

const styles = StyleSheet.create({
    searchInputContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.white,
        borderRadius: metrics.radius.xLarge,
        paddingHorizontal: metrics.spacing.base,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2.22,
        elevation: 1,
    },
    searchInput: {
        flex: 1,
        marginLeft: metrics.spacing.small,
        color: Colors.text,
        paddingVertical: metrics.mScale(16),
        fontSize: metrics.mScale(14),
        height: '100%',
    },
    addButton: {
        padding: metrics.mScale(10),
        paddingHorizontal: metrics.mScale(10),
        backgroundColor: Colors.primary,
        borderRadius: metrics.radius.large,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2.22,
        elevation: 2,
    },
    searchSection: {
        flexDirection: 'row',
        marginBottom: metrics.spacing.base,
        alignItems: 'center',
        gap: metrics.spacing.small
    },
})