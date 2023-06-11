import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Dummy screen components
const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    <Button title="Go to Details" onPress={() => navigation.navigate('Details', { itemId: 1, itemName: 'Item 1' })} />
  </View>
);

const DetailsScreen = ({ route }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <Text>Item ID: {route.params.itemId}</Text>
    <Text>Item Name: {route.params.itemName}</Text>
  </View>
);

const ProfileScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

// Create stack navigator
const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
    <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
  </Stack.Navigator>
);

// Create tab navigator
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={StackNavigator} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

// Create drawer navigator
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
);

// Main app component
export default function App() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Function to store user information in local storage
  const storeUserInformation = async (user) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.log('Error storing user information:', error);
    }
  };

  // Function to retrieve user information from local storage
  const getUserInformation = async () => {
    try {
      const userJson = await AsyncStorage.getItem('user');
      return userJson ? JSON.parse(userJson) : null;
    } catch (error) {
      console.log('Error retrieving user information:', error);
      return null;
    }
  };

  // Function to handle sign up form submission
  const handleSignUp = () => {
    const user = { name, email, password };
    storeUserInformation(user);
    console.log('User information stored successfully!');
  };

  // Function to handle login form submission
  const handleLogin = async () => {
    const user = await getUserInformation();
    if (user && user.email === email && user.password === password) {
      console.log('Login successful!');
      // Redirect to profile screen
      // ...
    } else {
      console.log('Invalid login credentials!');
    }
  };

  return (
    <NavigationContainer>
      <DrawerNavigator />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sign Up</Text>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign Up" onPress={handleSignUp} />
        <Text>Login</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </NavigationContainer>
  );
}
