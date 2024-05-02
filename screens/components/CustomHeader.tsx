import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomHeader = (props: any) => {
    useEffect(() => {
        console.log("Inside header");
    });
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={props.onProfilePress}>
                        <Text style={styles.profileButton}>Profile</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>Quote2Work</Text>
                    <TouchableOpacity onPress={props.onBackPress}>
                        <Text style={styles.backButton}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
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
        color: 'black',
    },
    backButton: {
        fontSize: 16,
        color: 'black',
    },
    profileButton: {
        fontSize: 16,
        color: 'black',
    },
});

export default CustomHeader;
