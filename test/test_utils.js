const axios = require("axios");

const API_URL ="http://localhost:5000/api";

const createUser = async () => {
	const paylaod = {
		name: "Sunil",
		email: "sunil@test.com",
		age: 31,
	};

	const response = await axios.post(API_URL + "/postuserinfo", paylaod);
	//console.log(response.data);

    return response.data;
};

module.exports ={
    API_URL,
    createUser
}