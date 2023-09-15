import React from "react";
import RegisterComp from "../../../components/authComponents/RegisterComp";
import { registerUser } from "../../../helper/api";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from "react-query";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [isSecureEntry,setIsSecureEntry] = React.useState(true)
  const [form, setForm] = React.useState<{ [key: string]: any }>({});

  const onchangeText = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  //MUTATION HANDLER
  const { mutate, isLoading } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
         Toast.show({
           type: "success",
           text1: data.data.name,
           text2: data.message,
         });
       navigation.navigate("Login");
    },
    onError: (error) => {
      console.log(error)
       Toast.show({
         type: "error",
         text1: "Oop!",
         text2: error.response.data.message || error.response.data.msg,
       });
    },
  });
      //  console.log({ data, error, isError, isLoading }, "mutateRegister");


  const onSubmit = () => {
    mutate(form);
  };

  return (
    <RegisterComp
      onchangeText={onchangeText}
      onSubmit={onSubmit}
      form={form}
      setForm={setForm}
      isLoading={isLoading}
      isSecureEntry={isSecureEntry}
      setIsSecureEntry={setIsSecureEntry}
    />
  );
};

export default RegisterScreen;
