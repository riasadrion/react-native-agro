import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Modal, Linking, ScrollView, TouchableOpacity, ImageBackground, Pressable, ActivityIndicator } from 'react-native';
import { Feather, Fontisto } from '@expo/vector-icons'; 

function Seed(props) {
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [nearestRepresentitive, setNearestRepresentitive] = useState(false);
    // const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [modalData, setModalData] = useState([{
        title: '',
        topic: '',
        description: ''
    }]);
    const [data, setData] = useState([{
        name: '',
        mobile_no: '',
        address: '',
        lat: '',
        lon: ''
    }]);

    function nearestRepresentitiveHandler(){
        // console.log(props)
        fetch('http://192.168.5.70/login_2018_19/api_mobile_controller/get_representatives_with_location/'+props.location.coords.latitude+'/'+props.location.coords.longitude+'/1', {
        method: 'GET',
        }).then(response => response.json())
        .then((json) => {
            if(json.code == 200){
                setData({
                    name: json.response.name,
                    mobile_no: json.response.mobile_no,
                    address: json.response.address,
                    lat: json.response.current_latitude,
                    lon: json.response.current_longitude,
                });
                console.log(json);
            };
        });
        setNearestRepresentitive(true);
    };

    function modalHandler(title, topic, description){
        setModalData({
            title: title,
            topic: topic,
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
                <Text style={styles.pkgInfoText}>প্যাকেজঃ ১০ গ্রাম,
                </Text>

                <Text style={styles.pkgInfoText}>MRP. ৫০০ টাকা</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.btn} onPress={() => modalHandler(props.item.title,'জাতের বৈশিষ্ট্য', props.item.info_1)}>
                    <Text style={styles.btnText}>জাতের বৈশিষ্ট্য</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => modalHandler(props.item.title,'বপনকাল', props.item.info_2)}>
                    <Text style={styles.btnText}>বপনকাল</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => modalHandler(props.item.title,'বীজের পরিমান', props.item.info_3)}>
                    <Text style={styles.btnText}>বীজের পরিমান</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => modalHandler(props.item.title,'চাষাবাদ পদ্ধতি', props.item.info_4)}>
                    <Text style={styles.btnText}>চাষাবাদ পদ্ধতি</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => modalHandler(props.item.title,'রোগ ও প্রতিরোধ', props.item.info_5)}>
                    <Text style={styles.btnText}>রোগ ও প্রতিরোধ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contactBtn} onPress={() => nearestRepresentitiveHandler()}>
                { loading ? <ActivityIndicator color="#ffffff" size="small" />: <Fontisto name="map-marker-alt" size={12} color="white" /> }
                    <Text style={styles.contactBtnText}>যোগাযোগ করুন</Text>
                </TouchableOpacity>
            </View>
            <Modal visible={modalOpen}>
                <View style={styles.modal}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>{modalData.title}: {modalData.topic}</Text>
                    </View>

                    <ScrollView style={styles.modalBody}>
                        <Text style={styles.description}>{modalData.description}</Text>
                    </ScrollView>

                    <View style={styles.modalFooter}>
                        <Pressable onPress={() => setModalOpen(false)}>
                            <Feather name="x-circle" size={40} color="gray" />
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Modal visible={nearestRepresentitive}>
                <View style={styles.modal}>
                    <View style={styles.modalBody}>
                        <View>
                            <Text style={styles.locationModalTitle}>
                                নিকটবর্তী প্রতিনিধি
                            </Text>
                        </View>
                        <View style={styles.infoBox}>
                            <Text style={styles.infoName}>{data.name}</Text> 
                            <Text style={styles.infoMobile}>{data.mobile_no}</Text> 
                            <Text style={styles.infoAddress}>{ data.address }</Text> 
                            <TouchableOpacity style={styles.callBtn} onPress={()=>{Linking.openURL('tel:'+ data.mobile_no+'');}}>
                            <Feather name="phone" size={12} color="white" />
                                <Text style={styles.callBtnText} >কল করুন</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <Text style={styles.info_name}>{ data.lat }</Text> 
                        <Text style={styles.info_name}>{ data.lon }</Text>  */}
                    </View>
                    <View style={styles.modalFooter}>
                        <Pressable onPress={() => setNearestRepresentitive(false)}>
                            <Feather name="x-circle" size={40} color="gray" />
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    seedCard: {
        height: 400,
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
    contactBtn: {
        flexDirection:'row',
        width: 140,
        backgroundColor: '#3a984e',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 7,
        paddingVertical: 5,
        borderRadius: 15,
        marginBottom: 10,
        marginTop: 10,
        elevation: 2
    },
    contactBtnText: {
        color: '#fff', 
        fontSize: 13,
        marginLeft: 5,
        marginBottom:1
    },
    callBtn: {
        flexDirection:'row',
        width: 100,
        backgroundColor: '#3a984e',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 7,
        paddingVertical: 10,
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 10,
        elevation: 2
    },
    callBtnText: {
        color: '#fff', 
        fontSize: 14,
        marginLeft: 5,
        marginBottom:1,
        fontWeight: 'bold'
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
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
    modalFooter: {
        marginVertical: 20
    },
    description: {
        padding: 15
    },
    infoBox: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#b2eabf',
        borderRadius: 15,
        paddingTop: 25,
        paddingBottom: 30,
        paddingHorizontal: 5
    },
    infoName: {
        fontSize: 24,
    },
    infoMobile: {
        fontSize: 16,
    },
    infoAddress: {
        fontSize: 16,
    },
    locationModalTitle: {
        fontSize: 30,
        marginVertical: 30
    }
});
export default Seed;
