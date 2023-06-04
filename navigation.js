import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Welcome to Blood System App</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details', { itemId: 1, itemName: 'Blood Type A+' })}
    />
  </View>
);

const DetailsScreen = ({ route }) => {
  const { itemId, itemName } = route.params;
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Item Name: {itemName}</Text>
    </View>
  );
};

const DonorScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Find Blood Donors</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details', { itemId: 2, itemName: 'Blood Type B-' })}
    />
  </View>
);

const RequestScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Request Blood</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details', { itemId: 3, itemName: 'Blood Type O+' })}
    />
  </View>
);

const DonationScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Donate Blood</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details', { itemId: 4, itemName: 'Blood Type AB-' })}
    />
  </View>
);

// Stack navigator
const Stack = createStackNavigator();

const DetailsStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const DonorStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Donor" component={DonorScreen} />
    <Stack.Screen name="Details" component={DetailsStackNavigator} />
  </Stack.Navigator>
);

const RequestStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Request" component={RequestScreen} />
    <Stack.Screen name="Details" component={DetailsStackNavigator} />
  </Stack.Navigator>
);

const DonationStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Donation" component={DonationScreen} />
    <Stack.Screen name="Details" component={DetailsStackNavigator} />
  </Stack.Navigator>
);

// Drawer navigator
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Donors" component={DonorStackNavigator} />
    <Drawer.Screen name="Requests" component={RequestStackNavigator} />
  </Drawer.Navigator>
);

// Tab navigator
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={DrawerNavigator} />
    <Tab.Screen name="Donation" component={DonationStackNavigator} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
