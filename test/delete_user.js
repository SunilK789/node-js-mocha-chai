var chai = require("chai");
const axios = require("axios");
const { before } = require("mocha");
var assert = chai.assert; // Using Assert style
var expect = chai.expect; // Using Expect style
var should = chai.should(); // Using Should style

const { API_URL, createUser } = require("./test_utils");
let newUser = undefined;
before(async () => {
	newUser = await createUser();
});


describe("Delete user from database", function() {
    it("Delete Single User", async ()=>{
        const response = await axios.delete(API_URL + "/deleteuser/" + newUser._id);

        expect(response.status).to.be.equal(200);
        //expect(response.data).to.be.equal("object");
		
    })
});