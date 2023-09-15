import { View, Text } from 'react-native'
import React from 'react'
import ViewProfileComp from '../../../components/mainComponents/ViewProfileComp'

const ViewProfileScreen = () => {
   const [form, setForm] = React.useState<{ [key: string]: any }>({});

   const onchangeText = (name: string, value: string) => {
     setForm({ ...form, [name]: value });
   };



  return <ViewProfileComp onchangeText={onchangeText} form={form} setForm={setForm} />;
}

export default ViewProfileScreen