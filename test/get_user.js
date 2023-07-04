var chai = require("chai");
const axios = require("axios");
const { before } = require("mocha");
var assert = chai.assert; // Using Assert style
var expect = chai.expect; // Using Expect style
var should = chai.should(); // Using Should style

const { API_URL, createUser } = require("./test_utils");
before(async () => {
	newUser = await createUser();
});

//to get all users
describe("Get User Info", function () {
	it("Get all users list", async () => {
		const response = await axios.get(API_URL + "/getUserinfo");
		expect(response.status).to.be.equal(200);
		expect(response.data).to.be.an("array");
		//console.log(response.status);
	});

	it("Get single user", async () => {
		const response = await axios.get(API_URL + "/singleuser/" + newUser._id);
		expect(response.status).to.be.equal(200);
		expect(response.data).to.be.an("object");
		//console.log(response.data);
	});

    it("Should have all the property in for the user", async () =>{
        const response = await axios.get(API_URL + "/singleuser/" + newUser._id);
        //console.log(response.data);

        expect(response.data.name).to.be.equal("Sunil");

        response.data.should.have.property("name");
        response.data.should.have.property("email");
        response.data.should.have.property("age");

        expect(response.status).to.be.equal(200);
		expect(response.data).to.be.an("object");
    });
});

//to get single user
describe("Get Single User Info", function () {});
