import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import Icon from '../components/Icon';
import { ListItemSeparator, ListItem } from '../components/lists';
import colors from '../config/colors';

const menuItems = [
  {
    title: 'My Listings',
    icon: { name: 'format-list-bulleted', backgroundColor: colors.primary },
  },
  {
    title: 'My Messages',
    icon: { name: 'email', backgroundColor: colors.secondary },
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Matan Shaviro'
          subTitle='matan3sh@gmail.com'
          image={require('../assets/avatar.png')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title='Logout'
        IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
      />
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
