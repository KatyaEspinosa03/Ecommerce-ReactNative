import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import styles from "./Signup.styles";
import logo from "../../assets/images/logo.png";
import { useSignUpMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";
import { CustomModal } from "../../components";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [triggerSignup, result] = useSignUpMutation();
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const onSubmit = () => {
    if (password !== confirmPassword) {
      setIsModalVisible(true);
      setModalMessage(`Las contraseñas no coinciden`);
    } else {
      console.log(email, password, confirmPassword);
      triggerSignup({
        email,
        password,
      })
        .unwrap()
        .then((result) => {
          console.log(result);
          dispatch(setUser(result));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.signupContainer}>
          <Image source={logo} style={styles.image} />
          <Text style={styles.text}>Crea tu cuenta para comenzar</Text>
          <TextInput
            style={styles.inputEmail}
            value={email}
            onChangeText={setEmail}
            placeholder="ingresa tu correo electrónico"
          />
          <TextInput
            style={styles.inputEmail}
            value={password}
            onChangeText={setPassword}
            placeholder="ingresa tu contraseña"
            secureTextEntry
          />
          <TextInput
            style={styles.inputEmail}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="confirma tu contraseña"
            secureTextEntry
          />

          <Pressable style={styles.loginButton} onPress={onSubmit}>
            <Text style={styles.subtext}> Sign up </Text>
          </Pressable>
          <Text style={styles.text}> ¿Ya tienes una cuenta? </Text>
          <Pressable
            style={styles.loginButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.subtext}> Login</Text>
          </Pressable>
        </View>
        <CustomModal
          visible={isModalVisible}
          message={modalMessage}
          onClose={() => setIsModalVisible(false)}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;
