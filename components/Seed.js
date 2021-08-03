import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Modal, ScrollView, TouchableOpacity, ImageBackground, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
function Seed(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState([{
        title: '',
        description: ''
    }]);
    function modalHandler(title, description){
        setModalData({
            title: title,
            description: description
        });
        setModalOpen(true);
    }
    return (
        <View style={styles.seedCard}>
            <ImageBackground imageStyle={{borderTopLeftRadius: 15, borderTopRightRadius: 15}} source={require('../assets/images/products/demo-seed.jpg')} resizeMode="cover" style={styles.image}>
                <View style={{justifyContent: 'flex-start', flex:1}}>
                    <Text style={styles.title}>{props.item.title}</Text>
                </View>
            </ImageBackground>
            <View style={styles.pkgInfo}>
                <Text style={styles.pkgInfoText}>প্যাকেজঃ ১০ গ্রাম,</Text>
                <Text style={styles.pkgInfoText}>MRP. ৫০০ টাকা</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.btn} onPress={() => modalHandler('জাতের বৈশিষ্ট্য', props.item.info_1)}>
                    <Text style={styles.btnText}>জাতের বৈশিষ্ট্য</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => modalHandler('বপনকাল', props.item.info_2)}>
                    <Text style={styles.btnText}>বপনকাল</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => modalHandler('বীজের পরিমান', props.item.info_3)}>
                    <Text style={styles.btnText}>বীজের পরিমান</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => modalHandler('চাষাবাদ পদ্ধতি', props.item.info_4)}>
                    <Text style={styles.btnText}>চাষাবাদ পদ্ধতি</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => modalHandler('রোগ ও প্রতিরোধ', props.item.info_5)}>
                    <Text style={styles.btnText}>রোগ ও প্রতিরোধ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                <Feather name="phone-call" size={12} style={{marginHorizontal: 7}} color="green" />
                    <Text style={styles.btnText}>যোগাযোগ করুন</Text>
                </TouchableOpacity>
            </View>
            <Modal visible={modalOpen}>
                {/* <Pressable onPress={() => setModalOpen(false)}><Text>close</Text></Pressable>
                <Text>{modalData.title}</Text> */}
                <View style={styles.modal}>
                    <View style={styles.modalHeader}>
                        <Pressable onPress={() => setModalOpen(false)}>
                            <Feather name="x-circle" size={40} color="gray" />
                        </Pressable>
                        <Text style={styles.modalTitle}>{modalData.title}</Text>
                    </View>

                    <ScrollView style={styles.modalBody}>
                        
                    </ScrollView>

                    <View style={styles.modalFooter}>

                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    seedCard: {
        height: 380,
        width: '45%',
        borderRadius: 15,
        backgroundColor: '#fff',
        elevation: 4,
        marginHorizontal: 10,
        marginVertical: 10
    },
    image: {
        height: 120,
    },
    title: {
        backgroundColor: '#e1ff3eed',
        paddingHorizontal: 5,
        paddingVertical: 1,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        width: 120,
        fontSize: 13,
        elevation: 2
    },
    pkgInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10,
        paddingHorizontal: 4
    },
    pkgInfoText: {
        fontSize: 11
    },
    buttons: {
       alignItems: 'center',
       marginTop: 10 
    },
    btn: {
        flexDirection:'row',
        width: 140,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 7,
        paddingVertical: 3,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#b2eabf',
        marginBottom: 10,
        elevation: 2
    },
    btnText: {
        color: '#525252', 
        fontSize: 13,
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#efffe6'
    },
    modalBody: {

    },
    modalHeader: {
        padding: 15,
        alignItems: 'center'
    },
    modalTitle: {
        fontSize: 20,
        marginVertical: 10
    },
    modalBody: {

    },
});
export default Seed;
