import ThemedButton from '@/presentation/theme/components/ThemedButton';
import ThemedLink from '@/presentation/theme/components/ThemedLink';
import { ThemedText } from '@/presentation/theme/components/ThemedText'
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput';
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import { KeyboardAvoidingView, ScrollView, TextInput, useWindowDimensions, View } from 'react-native'


const RegisterScreen = () => {

    const { height } = useWindowDimensions();
    const backgroundColor = useThemeColor({}, 'background')

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1 }}
        >
            <ScrollView
                style={{
                    paddingHorizontal: 35,
                    backgroundColor: backgroundColor,
                }}
            >
                <View
                    style={{
                        paddingTop: height * 0.30,
                    }}
                >
                    <ThemedText type='title'>Crear cuenta</ThemedText>
                    <ThemedText style={{ color: 'gray' }}>Por favor crea una cuenta para continuar</ThemedText>
                </View>
                {/* Email y Password */}
                <View style={{ marginTop: 20 }}>
                    <ThemedTextInput
                        placeholder="Nombre completo"
                        autoCapitalize="words"
                        icon="person-outline"
                    // value={form.email}
                    // onChangeText={(value) => setForm({ ...form, email: value })}
                    />
                    <ThemedTextInput
                        placeholder="Correo electrónico"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        icon="mail-outline"
                    // value={form.email}
                    // onChangeText={(value) => setForm({ ...form, email: value })}
                    />
                    <ThemedTextInput
                        placeholder="Contraseña"
                        secureTextEntry
                        autoCapitalize="none"
                        icon="lock-closed-outline"
                    // value={form.password}
                    // onChangeText={(value) => setForm({ ...form, password: value })}    
                    />
                </View>
                {/* Spacer */}
                <View style={{ marginTop: 10 }} />

                {/* Botón */}
                <ThemedButton
                    icon="arrow-forward-outline"
                //   onPress={onLogin}
                //   disabled={isPosting}
                >
                    Crear cuenta
                </ThemedButton>
                {/* Spacer */}
                <View style={{ marginTop: 50 }} />

                {/* Enlace a registro */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <ThemedText>¿Ya tienes cuenta?</ThemedText>
                    <ThemedLink href="/auth/login" style={{ marginHorizontal: 5 }}>
                        Ingresar
                    </ThemedLink>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen