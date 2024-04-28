import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomHeader = (props: any) => {


    return (<SafeAreaView>
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity >
                    <Text style={styles.backButton}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Quote2Work</Text>
            </View>
        </View>
    </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    backButton: {
        fontSize: 16,
        color: '#007bff',
    },
});

export default CustomHeader;
