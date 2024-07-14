import axios from 'axios';

export const URL = 'https://restcountries.com/v3.1/all';

export const FetchApi = async()=>{
    try{
        let response = await axios.get(URL);
        // console.log(response.data);
        return response.data;
    }
    catch(error){
        console.error('Error fetching data: ',error);
        return [];
    }
}


