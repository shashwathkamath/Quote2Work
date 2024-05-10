import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ProfileScreen = () => {
    // State for user information
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [alternateEmail, setAlternateEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [alternatePhoneNumber, setAlternatePhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [selectedZipcode, setSelectedZipcode] = useState('');
    const [expertiseArea, setExpertiseArea] = useState('');

    // Dummy data for zip codes (you can replace it with your actual data)
    const zipCodesByCity = {
        'New York': ['10001', '10002', '10003'],
        'Los Angeles': ['90001', '90002', '90003'],
        // Add more cities and their zip codes as needed
    };

    // Function to handle city selection
    const handleCityChange = (city: React.SetStateAction<string>) => {
        setCity(city);
        setSelectedZipcode(''); // Reset selected zip code when city changes
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Edit Profile</Text>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={styles.input}
                placeholder="Middle Name"
                value={middleName}
                onChangeText={setMiddleName}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Alternate Email"
                value={alternateEmail}
                onChangeText={setAlternateEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
            />
            <TextInput
                style={styles.input}
                placeholder="Alternate Phone Number"
                value={alternatePhoneNumber}
                onChangeText={setAlternatePhoneNumber}
                keyboardType="phone-pad"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <View style={styles.pickerContainer}>
                <Text style={styles.label}>City:</Text>
                <Picker
                    selectedValue={city}
                    onValueChange={(itemValue) => handleCityChange(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Select City" value="" />
                    <Picker.Item label="New York" value="New York" />
                    <Picker.Item label="Los Angeles" value="Los Angeles" />
                    {/* Add more cities as needed */}
                </Picker>
            </View>
            {city ? (
                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Zip Code:</Text>
                    <Picker
                        selectedValue={selectedZipcode}
                        onValueChange={(itemValue) => setSelectedZipcode(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select Zip Code" value="" />
                        {/* {zipCodesByCity[city].map((zipcode) => (
                            <Picker.Item key={zipcode} label={zipcode} value={zipcode} />
                        ))} */}
                    </Picker>
                </View>
            ) : null}
            <TextInput
                style={styles.input}
                placeholder="Expertise Area"
                value={expertiseArea}
                onChangeText={setExpertiseArea}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        marginRight: 10,
    },
    picker: {
        flex: 1,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ProfileScreen;
