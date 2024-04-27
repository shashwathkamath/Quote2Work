import { Header } from '@rneui/themed';
import React from 'react';

const CustomHeader = (props: any) => {
    const { navigation } = props;
    const handleMenuPress = () => {
        // Handle menu button press actions here
    };

    return (
        <Header
            leftComponent={{ icon: 'profile', color: '#fff' }}
            centerComponent={{ text: 'Quote2Work', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    );
};


export default CustomHeader;
