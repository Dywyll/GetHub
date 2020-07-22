import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import colors from '../../data/colors';
import styles from './styles';

import openOnBrowser from '../../utils/openOnBrowser';

const parseDate = (date) => {
    const newDate = new Date(date);

    return `${newDate.toLocaleDateString()} at ${newDate.getHours()}:${newDate.getMinutes() < 10 ? '0' : ''}${newDate.getMinutes()}`;
};

function UserRepository({ repository }) {
    const iconSize = 24;

    return (
        <TouchableHighlight
            onPress={() => openOnBrowser(repository.html_url)}
            style={styles.repoContainerTouchable}
        >
            <View style={styles.repoContainer}>
                <View style={styles.icons}>
                    <Feather
                        name="star"
                        size={iconSize}
                        color={colors.softLilac}
                    />

                    <Text style={styles.itemCount}>
                        {repository.watchers_count}
                    </Text>

                    <Feather
                        name="eye"
                        size={iconSize}
                        color={colors.hardBlue}
                    />

                    <Text style={styles.itemCount}>
                        {repository.stargazers_count}
                    </Text>

                    <Feather
                        name="git-branch"
                        size={iconSize}
                        color={repository.fork ? 'green' : 'red'}
                    />
                </View>

                <View style={styles.repoTitle}>
                    <Text style={styles.title}>{repository.name}</Text>
                </View>

                <View style={{ width: '100%', maxWidth: '100%' }}>
                    <View style={[styles.textView, { marginBottom: 10 }]}>
                        <Text style={styles.textDescription}>
                            {repository.description}
                        </Text>
                    </View>

                    <View style={styles.textView}>
                        <Text style={styles.textDescription}>
                            <Text style={{ fontWeight: 'bold' }}>
                                {'Last update: '}
                                <Text style={{ fontWeight: 'normal' }}>
                                    { parseDate(repository.updated_at)}
                                </Text>
                            </Text>
                        </Text>
                    </View>

                    <View style={styles.textView}>
                        <Text style={styles.textDescription}>
                            <Text style={{ fontWeight: 'bold' }}>
                                {'Created at: '}
                                <Text style={{ fontWeight: 'normal' }}>
                                    { parseDate(repository.created_at) }
                                </Text>
                            </Text>
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
}

export default UserRepository;
