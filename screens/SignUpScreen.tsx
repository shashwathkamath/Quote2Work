import React, { useMemo, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { RadioButtonProps, RadioGroup } from 'react-native-radio-buttons-group';

const SignUpScreen: React.FC = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [userType, setUserType] = useState<'individual' | 'company'>('individual');
    const [username, setUsername] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [selectedId, setSelectedId] = useState<string | undefined>();
    const radioButtons: RadioButtonProps[] = useMemo(
        () => [
            {
                id: '1', // acts as primary key, should be unique and non-empty string
                label: 'individual',
                value: 'Individual'
            },
            {
                id: '2',
                label: 'company',
                value: 'Company'
            }
        ],
        []
    );


    const handleSignUp = () => {
        // Perform sign-up logic here
        console.log('Name:', name);
        console.log('Phone Number:', phoneNumber);
        console.log('Email:', email);
        console.log('User Type:', userType);
        console.log('Username:', username);
        if (userType === 'company') {
            console.log('Company Name:', companyName);
        }
        // You can send the data to your backend or perform any other actions here
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    onChangeText={setName}
                    value={name}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    onChangeText={setPhoneNumber}
                    value={phoneNumber}
                    keyboardType="phone-pad"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={setUsername}
                    value={username}
                />
            </View>
            <RadioGroup
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
                layout='row'
            />
            {selectedId == '2' && <TextInput
                style={styles.input}
                placeholder="Company name"
                onChangeText={setCompanyName}
                value={username}
            />}
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    inputContainer: {
        width: '100%',
    },
    input: {
        width: '100%',
        height: 40,
        marginBottom: 10,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default SignUpScreen;
