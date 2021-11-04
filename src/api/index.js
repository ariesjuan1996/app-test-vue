import axios from "axios";
export const requestApi = async (
    endPoint,
    payload = {},
    method = "POST",
    headers = {},
    responseType="json"
) => {
    headers= {
        'Authorization': 'Bearer ' + localStorage.getItem("tokenAdmin")
      };
    let data=await axios({
        url: `http://localhost:8000/api/${endPoint}`, //Endpoint
        method: method, //Método
        data: payload,
        responseType:responseType,
        headers: headers
    });
    return data.data;
};