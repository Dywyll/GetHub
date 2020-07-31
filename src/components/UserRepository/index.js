import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../../data/colors';
import languageColors from '../../data/languageColors';
import styles from './styles';

import openOnBrowser from '../../utils/openOnBrowser';
import parseRepoSize from '../../utils/parseRepoSize';
import shadeColor from '../../utils/shadeColor';

const DEFAULT_REPOSITORY_COLOR = '#2d2d2d';

function UserRepository({ repository }) {
    const iconSize = 20;

    let languageColor;

    try {
        // We need to check if repository has a language, if not, set a default color
        languageColor = repository.language
            ? languageColors[repository.language]
            : DEFAULT_REPOSITORY_COLOR;
    } catch (error) {
        // If no color is found, set default
        languageColor = DEFAULT_REPOSITORY_COLOR;
    }

    const darkerLanguageColor = shadeColor(languageColor || DEFAULT_REPOSITORY_COLOR, -75);

    return (
        <TouchableHighlight
            onPress={() => openOnBrowser(repository.html_url)}
            style={styles.repoContainerTouchable}
        >
            <LinearGradient
                colors={[languageColor, darkerLanguageColor]}
                start={[0, 1]}
                end={[1, 0]}
                style={styles.repoContainerGradient}
            >
                <View style={styles.repoContainer}>
                    <View style={styles.icons}>
                        <Feather
                            name="package"
                            size={iconSize}
                            color={colors.softYellow}
                        />

                        <Text style={styles.itemCount}>
                            { parseRepoSize(repository.size) }
                        </Text>

                        <Feather
                            name="star"
                            size={iconSize}
                            color={colors.softYellow}
                        />

                        <Text style={styles.itemCount}>
                            {repository.watchers_count}
                        </Text>

                        <Feather
                            name="eye"
                            size={iconSize}
                            color={colors.softYellow}
                        />

                        <Text style={styles.itemCount}>
                            {repository.stargazers_count}
                        </Text>

                        {repository.fork && (
                            <Feather
                                name="git-branch"
                                size={iconSize}
                                color={colors.softYellow}
                            />
                        )}
                    </View>

                    <View style={styles.repoTitle}>
                        <Text numberOfLines={2} style={styles.title}>{repository.name}</Text>
                    </View>

                    <View style={{ width: '100%', maxWidth: '100%' }}>
                        {repository.description && (
                            <View style={[styles.textView, { marginBottom: 10 }]}>
                                <Text numberOfLines={2} style={styles.textDescription}>
                                    {repository.description}
                                </Text>
                            </View>
                        )}
                    </View>

                    {repository.language && (
                        <View style={styles.languageView}>
                            <AntDesign name="codesquareo" size={24} color="white" />
                            <Text style={styles.languageText}>{repository.language}</Text>
                        </View>
                    )}
                </View>
            </LinearGradient>
        </TouchableHighlight>
    );
}

export default UserRepository;
