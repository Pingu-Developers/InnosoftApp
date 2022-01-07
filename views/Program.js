import axios from 'axios';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

export default function Program() {
    const [items, setItems] = React.useState({});
    const [refreshing, setRefreshing] = React.useState(false);
    
    const apiHost = process.env.API_HOST;
    const apiPort = process.env.API_PORT;

    // First time load
    React.useEffect( () => {
        loadFromApi(apiHost, apiPort);
    } , []);

    // Refresh
    React.useEffect( () => {
        if(refreshing) {
            console.log("Refreshing...");
            loadFromApi(apiHost, apiPort);
            setRefreshing(false);
        }
    } , [refreshing]);

    // FUNCTIONS
    const loadFromApi = (host, port) => {
        const source = axios.CancelToken.source();
        const timeout = setTimeout(() => { 
            Alert.alert('Error', 'Request timed out');
            source.cancel(); 
        }, 5000);

        axios.get(`${host}:${port}/api/v1/events`)
            .then(response => {
                if(response.status === 200) {
                    clearTimeout(timeout);
                    return response.data;
                }
                throw response;
            })
            .then(data => {
                populateWeek(data);
                for (let ev of data){
                    var eventDate = ev.eventStartDateTime?.split('T')[0];
                    if(!items[eventDate]) {
                        items[eventDate] = [];
                    }
                    if(!items[eventDate].some((e,i,a) => e.id === ev.eventId)) {
                        items[eventDate].push({
                            id: ev.eventId,
                            name: ev.eventName,
                            start: ev.eventStartDateTime?.split('T')[1],
                            end: ev.eventEndDateTime?.split('T')[1]
                        });
                    }
                }   
                setItems(items);
            })
            .catch(error => {
                clearTimeout(timeout);
                console.log('Error fetching events:', error);
                Alert.alert('Error', 'Error fetching events');
            })
    }
    const populateWeek = (data) => {
        // Minmax dates for year
        var years = new Set(data.map(e => e.eventStartDateTime?.split('T')[0].split('-')[0]));
        var year_minmax = {};
        for (let year of years) {
            let year_group = {}
            year_group[year] = [
                ...new Set(data
                    .filter(e => e.eventStartDateTime.includes(year))
                    .map(e => e.eventStartDateTime?.split('T')[0])
                    .sort())
            ]
            year_minmax[year] = [year_group[year][0], year_group[year][year_group[year].length-1]]
        }

        // Populate week
        Object.entries(year_minmax).forEach(([year, minmax]) => {
            let period = (new Date(minmax[1]).getTime() - new Date(minmax[0]).getTime()) / (1000 * 60 * 60 * 24);
            for (let i = 0; i <= period; i++) {
                let date = new Date(minmax[0]);
                date.setDate(date.getDate() + i);
                let date_str = date.toISOString().split('T')[0];
                items[date_str] = [];
            }
        });
    }
    const renderItem = (item) => {
        let start_arr = item.start.split(':');
        let end_arr = item.end.split(':');

        return (
            <View style={{...styles.item, backgroundColor: item.id % 2 === 0 ? '#6099c4' : '#e0ad0f'}}>
                <View style={styles.itemTimes}>
                    <View style={styles.text, styles.textTime}>
                        <Text style={{color: 'gray', fontWeight: 'bold'}}>{`${start_arr[0]}:${start_arr[1]}`}</Text>
                    </View>
                    <View style={{...styles.text, ...styles.textTime, backgroundColor: '#e0e0e0'}}>
                        <Text style={{color: 'gray', fontWeight: 'bold'}}>{`${end_arr[0]}:${end_arr[1]}`}</Text>
                    </View>
                </View>
                <View style={styles.itemContent}>
                    <Text style={{...styles.text}}>{item.name}</Text>
                </View>
            </View>
        );
    }
    const renderEmptyDate = () => {
        return (
          <View style={styles.emptyDate}/>
        );
    }
    const renderEmptyData = () => {
        return (
            <View testID='loadedWithoutData' style={styles.emptyData}>
                <Text style={{color: 'gray'}}>No hay eventos para esta fecha</Text>
            </View>
        );
    }

    return (
        <Agenda
            items={items}
            renderItem={renderItem}
            renderEmptyDate={renderEmptyDate}
            renderEmptyData={renderEmptyData}
            rowHasChanged={(r1, r2) => r1.id !== r2.id}
            onRefresh={() => {setRefreshing(true)}}
            refreshing={refreshing}
            testID='loadedWithData'
        />
    )
}

// STYLES
const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        marginRight: 10,
        marginTop: 17,
        minHeight: 80,
    },
    itemTimes: {
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        width: 80,
        height: '100%',
    },
    itemContent: {
        flex: 1,
        padding: 20,
        display: 'flex',
        justifyContent: 'center'
    },
    emptyDate: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        height: 60
    },
    emptyData: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    textTime: {
        width: '100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderBottomLeftRadius: 5,
    }
})

// LOCALES
LocaleConfig.locales['es'] = {
    monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    monthNamesShort: ['Ene.','Feb.','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
    dayNames: ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
    dayNamesShort: ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'],
    today: 'Hoy'
  };

LocaleConfig.defaultLocale = 'es';