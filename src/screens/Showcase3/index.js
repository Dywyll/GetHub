import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Icon from './icon';
import styles from './styles';

import PageSelector from '../../components/PageSelector';
import SwitchShowcase from '../../components/SwitchShowcase';
import Logo from '../../components/Logo';

export default function LoginScreen({ navigation }) {
    function goToSearchScreen() {
        return navigation.navigate('Search');
    }

    return (
        <View style={styles.screen}>
            <Logo />
            <Text style={styles.description}>{'And much more...\nStart searching now!'}</Text>
            <Icon />
            <PageSelector page={2} />
            <SwitchShowcase
                navigation={navigation}
                prevScreenName="Showcase2"
                nextScreenName={null}
            />
            <TouchableOpacity
                onPress={() => goToSearchScreen()}
                style={styles.touchable}
            >
                <LinearGradient
                    colors={['#54521a', '#fa4a51', '#313131']}
                    style={styles.gradientButton}
                >
                    <Text style={styles.buttonText}>
                        Start now!
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}
