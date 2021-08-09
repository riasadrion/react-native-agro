import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Modal, Linking, ScrollView, TouchableOpacity, ImageBackground, Pressable, ActivityIndicator, Alert } from 'react-native';
import { Feather, Fontisto } from '@expo/vector-icons';

function Seed(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [contact, setContact] = useState(false);
    const [nearestRepresentitive, setNearestRepresentitive] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [modalData, setModalData] = useState([{
        title: '',
        topic: '',
        description: ''
    }]);
    const [data, setData] = useState([{
        title: '',
        name: '',
        mobile_no: '',
        address: '',
        lat: '',
        lon: '',
        distance: ''
    }]);
    function nearestRepresentitiveHandler(title){
        // setContact(false);
        if(props.location){
            setLoading(true);
            fetch('http://45.251.57.52/demo/login_2018_19/api_mobile_controller/get_representatives_with_location/'+props.location.coords.latitude+'/'+props.location.coords.longitude+'/1', {
                method: 'GET',
            }).then(response => response.json())
            .then((json) => {
                if(json.code == 200){
                    setData({
                        title: title,
                        name: json.response.name,
                        mobile_no: json.response.mobile_no,
                        address: json.response.address,
                        lat: json.response.current_latitude,
                        lon: json.response.current_longitude,
                        distance: json.response.linear_distance + ' ' +json.response.linear_distance_unit,
                    });
                    setLoading(false);
                    setNearestRepresentitive(true);
                };
            });
        }else{
            Alert.alert(
                "সতর্কতা",
                "আপনার লোকেশন খুঁজে পাওয়া যায়নি, দয়া করে লোকেশন ব্যবহার করার অনুমতি দিন",
                [
                  {
                    text: "বন্ধ করুন",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { 
                    text: "ঠিক আছে", onPress: () => console.log("OK Pressed")
                  }
                ]
            );
        }

    };
    function modalHandler(title, topic, description){
        setModalData({
            title: title,
            topic: topic,
            description: description
        });
        setModalOpen(true);
    }
    const item = props.item;
    return (
        <View style={styles.seedCard}>
            <ImageBackground imageStyle={{borderTopLeftRadius: 15, borderTopRightRadius: 15}} 
            source={{
            uri: item['images'][0],
            }} resizeMode="cover" style={styles.image}>
                <View style={{justifyContent: 'flex-start', flex:1}}>
                    <Text style={styles.usp}>{item.usp.bn}</Text>
                </View>
            </ImageBackground>

            <View>
                <Text style={styles.title}>{item['name_bn']}</Text>
            </View>
            <View style={styles.pkgInfo}>
                <Text style={styles.pkgInfoText}>{item.pack_size.bn[0].packsize} {item.pack_size['bn'][0].unit}
                </Text>

                <Text style={styles.pkgInfoText}>{item.pack_size.bn[0].price}</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.btn} onPress={() => modalHandler(item['name_bn'],'জাতের বৈশিষ্ট্য',  item.variety_characteristics.bn)}>
                    <Text style={styles.btnText}>জাতের বৈশিষ্ট্য</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => modalHandler(item['name_bn'],'বপনকাল', item.sowing_season.bn)}>
                    <Text style={styles.btnText}>বপনকাল</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => modalHandler(item['name_bn'],'বীজের পরিমান', item.seed_quantity.bn)}>
                    <Text style={styles.btnText}>বীজের পরিমান</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => modalHandler(item['name_bn'],'চাষাবাদ পদ্ধতি', item.cultivation_method.bn)}>
                    <Text style={styles.btnText}>চাষাবাদ পদ্ধতি</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => modalHandler(item['name_bn'],'রোগ ও প্রতিরোধ', item.disease_and_prevention.bn)}>
                    <Text style={styles.btnText}>রোগ ও প্রতিরোধ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.contactBtn} onPress={() => setContact(true)}>
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
            <Modal visible={contact}>
                <View style={styles.modal} >
                    <View style={styles.modalBody}>
                        <View>
                            <Text style={styles.locationModalTitle}>
                                আপনি কার সাথে যোগাযোগ করতে চান?
                            </Text>
                        </View>
                        <View style={styles.infoBox}>
                        { loading ? <ActivityIndicator style={styles.loading} color="green" size="small" /> : null }
                            <TouchableOpacity style={styles.contactBtnChoice} onPress={() => nearestRepresentitiveHandler('ডিলার')}>
                            <Feather name="shopping-bag" size={12} color="white" />
                                <Text style={styles.callBtnText} >ডিলার</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.contactBtnChoice} onPress={() => nearestRepresentitiveHandler('নিকটবর্তী প্রতিনিধি')}>
                            <Feather name="user" size={12} color="white" />
                                <Text style={styles.callBtnText} >নিকটবর্তী প্রতিনিধি</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.modalFooter}>
                        <Pressable onPress={() => setContact(false)}>
                            <Feather name="x-circle" size={40} color="gray" />
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Modal visible={nearestRepresentitive}>
                <View style={styles.modal} >
                    <View style={styles.modalBody}>
                        <View>
                            <Text style={styles.locationModalTitle}>
                               {data.title}
                            </Text>
                        </View>
                        <View style={styles.infoBox}>
                            <Text style={styles.infoName}>{data.name}</Text>
                            <Text style={styles.infoMobile}>{data.mobile_no}</Text>
                            <Text style={styles.infoAddress}>{ data.address }</Text>
                            <Text style={styles.infoAddress}>দূরত্ব: { data.distance }</Text>
                            <TouchableOpacity style={styles.callBtn} onPress={()=>{Linking.openURL('tel:'+ data.mobile_no+'');}}>
                            <Feather name="phone" size={12} color="white" />
                                <Text style={styles.callBtnText} >কল করুন</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <Text style={styles.info_name}>{ data.lat }</Text>
                        <Text style={styles.info_name}>{ data.lon }</Text>  */}
                    </View>
                    <View style={styles.modalFooter}>
                        <Pressable onPress={() => {setNearestRepresentitive(false); setContact(false)}}>
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
        height: 410,
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
    usp: {
        backgroundColor: '#dcdcdcb3',
        paddingHorizontal: 5,
        paddingVertical: 1,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        textAlign: 'center',
        width: '100%',
        fontSize: 12,
        lineHeight: 15
    },
    title: {
        backgroundColor: '#e1ff3eed',
        paddingHorizontal: 5,
        paddingVertical: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        width: '100%',
        fontSize: 12,
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
       justifyContent: 'center'
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
        padding: 15,

        
    },
    infoBox: {
        alignSelf: 'center',
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#b2eabf',
        borderRadius: 15,
        paddingTop: 25,
        paddingBottom: 30,
        paddingHorizontal: 8
    },
    infoName: {
        fontSize: 24,
        textAlign: 'center'
    },
    infoMobile: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5
    },
    infoAddress: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5
    },
    locationModalTitle: {
        fontSize: 30,
        marginVertical: 30,
        textAlign: 'center'

    },
    contactBtnChoice: {
        flexDirection:'row',
        width: 200,
        backgroundColor: '#3a984e',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 7,
        paddingVertical: 10,
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 10,
        elevation: 2
    }
});
export default Seed;
