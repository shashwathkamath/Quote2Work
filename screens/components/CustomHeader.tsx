import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomHeader = (props: any) => {
    const { navigation } = props;
    const handleProfilePress = () => {
        // Navigate to the profile screen
        navigation.navigate("Profile");
    };
    const profileImage = require('./profile.png');

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleProfilePress} style={styles.profileButton}>
                        <Image source={profileImage} style={styles.profileImage} />
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
        backgroundColor: 'blue',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
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
        borderRadius: 25, // Make it round
        overflow: 'hidden', // Ensure image stays within bounds
    },
    profileImage: {
        width: 50,
        height: 50,
    },
});

export default CustomHeader;
