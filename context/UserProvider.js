import axios from "axios";
import UserContext from "./UserContext";


export const UserProvider = (props) => {
    const baseUrl = "http://54.219.247.250:8800/api/user/";

    async function Login(username, password) {
        let signin = { username, password };
        const response = await axios.post(`${baseUrl}login`, signin);
        localStorage.setItem('myUserToken', response.data.token);
        localStorage.setItem('username', username);
        return await new Promise(resolve => resolve(response.data));
    }

    async function getUserById(userId) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myUserToken')}`
        };

        return axios.get(baseUrl + userId, { headers: myHeaders } ).then(response => {
            console.log(response.data)
            return new Promise(resolve => resolve(response.data));
        })
    }


    return (
        <UserContext.Provider value={{
            getUserById,
            Login,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}