import React from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import Main from '../components/layouts/Main';
import Seed from '../components/Seed';
function SeedsInfo({ navigation }) {
    return (
        <Main>
            <View style={styles.main}>
                <SafeAreaView style={styles.cards}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <Seed item={item} />}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                    />
                </SafeAreaView>
                        {/* <Seed /> */}
            </View>
        </Main>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    cards: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal:1,
    },
    btn: {
        flexDirection:'row',
        width: 220,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#efffe6',
        paddingHorizontal: 7,
        paddingVertical: 12,
        borderRadius: 7,
        elevation: 2,
        marginBottom: 15,
    },
    btnText: {
        fontWeight: 'bold',
        color: '#525252', 
        fontSize: 20
    },
});
const DATA = [
    {
        id: '1',
        title: 'সামার হোয়াইট',
        package: '১০ গ্রাম',
        mrp: '500',
        info_1: 'জাতের বৈশিষ্ট্য ......',
        info_2: 'বপনকাল ......',
        info_3: 'বীজের পরিমান ......',
        info_4: 'চাষাবাদ পদ্ধতি ......',
        info_5: 'রোগ ও প্রতিরোধ ......',
    }, 
    {
        id: '2',
        title: 'কিরন',
        package: '১০ গ্রাম',
        mrp: '500',
        info_1: 'জাতের বৈশিষ্ট্য ......',
        info_2: 'বপনকাল ......',
        info_3: 'বীজের পরিমান ......',
        info_4: 'চাষাবাদ পদ্ধতি ......',
        info_5: 'রোগ ও প্রতিরোধ ......',
    }, 
    {
        id: '3',
        title: '১১১',
        package: '১০ গ্রাম',
        mrp: '500',
        info_1: 'জাতের বৈশিষ্ট্য ......',
        info_2: 'বপনকাল ......',
        info_3: 'বীজের পরিমান ......',
        info_4: 'চাষাবাদ পদ্ধতি ......',
        info_5: 'রোগ ও প্রতিরোধ ......',
    }, 
    {
        id: '4',
        title: 'হোয়াইট মার্বেল',
        package: '১০ গ্রাম',
        mrp: '500',
        info_1: 'জাতের বৈশিষ্ট্য ......',
        info_2: 'বপনকাল ......',
        info_3: 'বীজের পরিমান ......',
        info_4: 'চাষাবাদ পদ্ধতি ......',
        info_5: 'রোগ ও প্রতিরোধ ......',
    }
];

export default SeedsInfo
