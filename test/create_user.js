var chai = require("chai");
const axios = require("axios");
const { before } = require("mocha");
var assert = chai.assert; // Using Assert style
var expect = chai.expect; // Using Expect style
var should = chai.should(); // Using Should style

const { API_URL, createUser } = require("./test_utils");

describe("Create new user", function () {
	it("Create a new user", async () => {
		const paylaod = {
			name: "Rahul",
			email: "rahul@test.com",
			age: 25,
		};

		const response = await axios.post(API_URL + "/postuserinfo", paylaod);
		//console.log(response.data);

		expect(response.data.name).to.be.equal("Rahul");
		expect(response.data.email).to.be.equal("rahul@test.com");
		expect(response.data.age).to.be.equal(25);

		response.data.should.have.property("name");
		response.data.should.have.property("email");
		response.data.should.have.property("age");

		expect(response.status).to.be.equal(201);
		expect(response.data).to.be.an("object");
	});
});
