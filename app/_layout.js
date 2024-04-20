import { Stack } from "expo-router";

export default function RoutLayout (){
    return(
        <Stack>
            <Stack.Screen  name="index" options={{
                headerTitle:"Login",
            }}/>
            <Stack.Screen name="users/[id]"
            options={{
                headerTitle:"users",
            }} />
            <Stack.Screen name="todos/[id]" 
            options={{
                headerTitle:"Details Page",
            }} />
            <Stack.Screen name="account/register/register"
            options={{
                headerTitle:"Register",
            }} />
             <Stack.Screen name="account/login/login"
            options={{
                headerTitle:"Login",
            }} />
        </Stack>
    )
}