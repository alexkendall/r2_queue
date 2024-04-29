import { useCallback, useEffect, useState } from 'react'
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
    useWindowDimensions,
    FlatList,
    Text,
    ActivityIndicator,
} from 'react-native'
import { Theme } from '../config/Theme'
import { useSearchTrackQuery } from '../redux/SpotifyAPISlice'
import { Track } from '../types/Track'

export const Library = () => {
    const [query, setQuery] = useState('')

    const { data, isLoading, isFetching, error } = useSearchTrackQuery({
        query,
    })

    const width = useWindowDimensions().width

    useEffect(() => {
        console.log('data', data, 'error', error)
    }, [data, error])

    const renderItem = useCallback(
        ({ item, index }: { item: Track; index: number }) => {
            return (
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.artist}>{item.artists[0].name}</Text>
                </TouchableOpacity>
            )
        },
        []
    )

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={setQuery}
                style={{ ...styles.input, width }}
                placeholder={'Search Tracks'}
            />
            {data && !isLoading && !isFetching && (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                    data={data?.tracks?.items}
                />
            )}
            {isLoading ||
                (isFetching && (
                    <View style={{ ...styles.placeholder, width }}>
                        <ActivityIndicator size={'large'} color={'black'} />
                    </View>
                ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    input: {
        padding: 12.5,
        backgroundColor: Theme.lightGray,
    },
    item: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 20,
        borderBottomWidth: 0.5,
        borderColor: Theme.lightGray,
    },
    name: {
        fontSize: 20,
        marginBottom: 5,
    },
    artist: {
        fontSize: 17,
        fontWeight: '800',
    },
    placeholder: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
})
