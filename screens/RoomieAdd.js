import React from 'react'
import { ScrollView, View, Dimensions, Alert } from 'react-native'
import { Searchbar } from 'react-native-paper'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from '../components/Styles'
import { openDatabase, updateItem } from '../utils/database-utils'
import { IMAGES } from '../constants/image constants'
import ContactButton from '../components/ContactButton'

const database = openDatabase('Profiles.db');
function createAddDialogue(props) {
  let name = `${props['first_name']} ` + (props['middle_name'] === '' ? '' : props['middle_name'] + ' ') + `${props['last_name']}`;
  Alert.alert(`Add ${name}?`,
    `Are you sure you want to add ${name} (Username: ${props['username']}) as a friend?`,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      {
        text: "OK", onPress: () => {
          updateItem(database, 'Profiles', 'friendship_status="pending"', `id=${props['id']}`);
          props['navigateBack']();
        }
      }
    ]
  )
}

export default class RoomieAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchQuery: '',
    }
  }

  componentDidMount() {
  }

  setSearchQuery(query) {
    this.setState({
      searchQuery: query
    });
  }

  navigateBack() {
    this.props.navigation.navigate('Roomies');
  }

  getProfiles() {
    database.transaction((tx) => {
      tx.executeSql(
        `select * from Profiles where username="${this.state.searchQuery}" and friendship_status="unfriended"`,
        null,
        (_, { rows: { _array } }) => {
          console.log(_array);
          this.setState({
            data: _array
          })
        }
      );
    });
  }

  render() {
    const width = Dimensions.get('window').width;
    let results = null;
    if (this.state.data.length > 0) {
      results =
        this.state.data.map(({ id, first_name, middle_name, last_name, profile_pic, join_year, join_month, sleeping_status, friendship_status, sleep_quality, average_bedtime, average_wakeup, username }) => (
          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }} key={id}>
            {IMAGES.filter(item => item.name === profile_pic).map(({ name, link }) => (
              <ContactButton
                key={`contact-${id}`}
                image={link}
                width={width * 0.9}
                iconName={'person-add-outline'}
                style={{ flex: 1 }}
                size={75}
                name={`${first_name} ` + (middle_name === '' ? '' : middle_name + ' ') + `${last_name}` + (friendship_status === 'pending' ? ' (Pending)' : (sleeping_status === 'sleeping' ? ' (Sleeping)' : ''))}
                onPress={() =>
                  console.log(1)}
                onPressIcon={() => createAddDialogue({id, first_name, middle_name, last_name, username, navigateBack: this.navigateBack.bind(this)})}
              />
            )
            )}
          </View>
        )
        );
    }
    return (
      <LinearGradient
        colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
        style={styles.container}
      >
        <Header
          pageName='ADD ROOMMATE'
          leftIcon='chevron-back-circle-outline'
          leftPage='Roomies'
        />
        <Searchbar
          style={styles.searchBar}
          placeholder="Search by username"
          iconColor='#f7f7f7'
          autoCapitalize='none'
          theme={{ colors: { placeholder: '#f7f7f7', text: '#f7f7f7' } }}
          value={this.state.searchQuery}
          onChangeText={(query) => this.setSearchQuery(query)}
          onSubmitEditing={(event) => { this.getProfiles() }}
        />
        <ScrollView style={[styles.scrollView, { width: '90%', backgroundColor: 'rgba(0, 0, 0, 0)' }]}>
          {results}
        </ScrollView>
      </LinearGradient>
    );
  }
}
