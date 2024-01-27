import React from "react";
import {  ScrollView } from "react-native";
import LoginComp from "../../../components/authComponents/LoginComp";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "react-query";
import Toast from "react-native-toast-message";
import { User, loginUser } from "../../../helper/api";
import useAuthStore from "../../../stores";
 
const LoginScreen = () => {
  const navigation = useNavigation();
  const { setRequestIsLogged, setAuthUser, authUser } = useAuthStore(
    (state) => ({
      setRequestIsLogged: state.setRequestIsLogged,
      setAuthUser: state.setAuthUser,
      authUser: state.authUser,
    })
  );
  const [isSecureEntry, setIsSecureEntry] = React.useState(true);
  const [form, setForm] = React.useState<{ [key: string]: string }>({});
  const [isChecked, setChecked] = React.useState<boolean>(false);

  const onchangeText = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  //MUTATION HANDLER
  const { mutate, data, error, isError, isLoading, isSuccess } = useMutation(
    ["login"],
    {
      mutationFn: loginUser,
      onSuccess: (data:any) => {
        Toast.show({
          type: "success",
          text1: data.data.name,
          text2: data.message,
        });
        setRequestIsLogged(true);
        setAuthUser(data);
      },
      onError: (error:any) => {
        console.log(error);
        Toast.show({
          type: "error",
          text1: "Oop!",
          text2: error.response.data.message || error.response.data.msg,
        });
      },
    }
  );
  console.log({ data, error, isError, isLoading, isSuccess }, "mutate");

  console.log(authUser, "authUserlogin");

  const onSubmit = (form: User) => {
    // console.log(form, "9990");
    mutate(form);
  };

  return (
    
      <LoginComp
        isChecked={isChecked}
        setChecked={setChecked}
        onchangeText={onchangeText}
        form={form}
        onSubmit={onSubmit}
        isSecureEntry={isSecureEntry}
        isLoading={isLoading}
        setIsSecureEntry={setIsSecureEntry}
      />
  
  );
};

export default LoginScreen;
