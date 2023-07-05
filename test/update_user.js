var chai = require("chai");
const axios = require("axios");
const { before } = require("mocha");

var Fakerator = require("fakerator");
var fakerator = Fakerator();


var assert = chai.assert; // Using Assert style
var expect = chai.expect; // Using Expect style
var should = chai.should(); // Using Should style

const { API_URL, createUser, createPayload } = require("./test_utils");
const { updateuser } = require("../controller/user");
let newUser = undefined;
before(async () => {
	newUser = await createUser();
    updatedUser = await createPayload();
});


describe("Update user info", function(){
    it("Update Single User All the Information Together", async ()=>{ 
        //const updatedUser = await createPayload();
        //console.log(newUser);

        const response = await axios.put(API_URL + "/updateuser/" + newUser._id, updatedUser);        
        //console.log(updatedUser);
        //console.log(response.data);

        expect(response.data.name).to.be.equal(updatedUser.name);
		expect(response.data.email).to.be.equal(updatedUser.email);
		expect(response.data.age).to.be.equal(updatedUser.age);

		response.data.should.have.property("name");
		response.data.should.have.property("email");
		response.data.should.have.property("age");

		expect(response.status).to.be.equal(200);
		expect(response.data).to.be.an("object");
    });

    it("Update Single User Only Name", async ()=>{ 
        const updatedName = {
            ...newUser,
            name: updatedUser.name
        }

        const response = await axios.put(API_URL + "/updateuser/" + newUser._id, updatedName); 

        expect(response.data.name).to.be.equal(updatedUser.name);
		expect(response.data.email).to.be.equal(newUser.email);
		expect(response.data.age).to.be.equal(newUser.age);

		response.data.should.have.property("name");
		response.data.should.have.property("email");
		response.data.should.have.property("age");

		expect(response.status).to.be.equal(200);
		expect(response.data).to.be.an("object");
    });
    it("Update Single User Only Email", async ()=>{ 
        const updatedName = {
            ...newUser,
            email: updatedUser.email
        }

        const response = await axios.put(API_URL + "/updateuser/" + newUser._id, updatedName); 

        expect(response.data.name).to.be.equal(newUser.name);
		expect(response.data.email).to.be.equal(updatedUser.email);
		expect(response.data.email).not.to.be.equal(newUser.email);
		expect(response.data.age).to.be.equal(newUser.age);

		response.data.should.have.property("name");
		response.data.should.have.property("email");
		response.data.should.have.property("age");

		expect(response.status).to.be.equal(200);
		expect(response.data).to.be.an("object");
    });
});