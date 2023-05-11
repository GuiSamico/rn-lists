import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './src/views/Main/Main';
import Details from './src/views/Details/Details';
import SpecificItem from './src/views/SpecificItem/SpecificItem';
import AsyncStorageForm from './src/views/AsyncStorageForm/AsyncStorageForm';
import AsyncStorageList from './src/views/AsyncStorageList/AsyncStorageList';
import AsyncStorageItem from './src/views/AsyncStorageItem/AsyncStorageItem';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="AsyncStorageList" component={AsyncStorageList} options={{ title: 'Lista de alunos' }} />
                <Stack.Screen name="AsyncStorageForm" component={AsyncStorageForm} options={{ title: 'Cadastro de alunos' }} />
                <Stack.Screen name="AsyncStorageItem" component={AsyncStorageItem} options={{ title: 'Aluno' }} />
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="SpecificItem" component={SpecificItem} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
