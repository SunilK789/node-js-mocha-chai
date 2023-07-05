var chai = require("chai");
const axios = require("axios");
const { before } = require("mocha");

var Fakerator = require("fakerator");
var fakerator = Fakerator();


var assert = chai.assert; // Using Assert style
var expect = chai.expect; // Using Expect style
var should = chai.should(); // Using Should style

const { API_URL, createUser } = require("./test_utils");

describe("Create new user", function () {
	it("Create a new user", async () => {
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

		const response = await axios.post(API_URL + "/postuserinfo", paylaod);
		//console.log(response.data);

		expect(response.data.name).to.be.equal(fullName);
		expect(response.data.email).to.be.equal(email);
		expect(response.data.age).to.be.equal(age);

		response.data.should.have.property("name");
		response.data.should.have.property("email");
		response.data.should.have.property("age");

		expect(response.status).to.be.equal(201);
		expect(response.data).to.be.an("object");
	});
});
