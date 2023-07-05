const axios = require("axios");
var Fakerator = require("fakerator");
var fakerator = Fakerator();

const API_URL ="http://localhost:5000/api";

const createUser = async () => {
	const paylaod = await createPayload();

	const response = await axios.post(API_URL + "/postuserinfo", paylaod);
	//console.log(response.data);

    return response.data;
};

const createPayload = async () =>{
	var firstName = fakerator.names.firstName();
	var lastName = fakerator.names.lastName();
	var fullName = firstName +" " + lastName;
	var age = fakerator.random.number(20, 35);
	var email = fakerator.internet.email(firstName, lastName)

	const paylaod = {
		name: fullName,
		email: email,
		age: age,
	};

	return paylaod;
}

module.exports ={
    API_URL,
    createUser,
	createPayload
}