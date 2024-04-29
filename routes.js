import { createStackNavigator } from '@react-navigation/stack';
import Bem_Vindo from './pages/index';
import Acesso from './pages/entrada';
import Cadastro from './pages/cadastro'
import BemSucedido from './pages/bemSucedido'

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="index"
                component={Bem_Vindo}
            />

            <Stack.Screen
                options={{ headerShown: false }}
                name="entrada"
                component={Acesso}
            />

            <Stack.Screen
                options={{ headerShown: false }}
                name="cadastro"
                component={Cadastro}
            />

            <Stack.Screen
                options={{ headerShown: false }}
                name="bemSucedido"
                component={BemSucedido}
            />
        </Stack.Navigator>
    )
}