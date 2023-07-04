var chai = require("chai");
const axios = require("axios");
const { before } = require("mocha");
var assert = chai.assert; // Using Assert style
var expect = chai.expect; // Using Expect style
var should = chai.should(); // Using Should style

const { API_URL, createUserToDelete } = require("./test_utils");

before(async () => {
	userToDelete = await createUserToDelete();
});


describe("Delete user from database", function() {
    it("Delete Single User", async ()=>{
        const response = await axios.delete(API_URL + "/deleteuser/" + userToDelete._id);

        expect(response.status).to.be.equal(200);
        //expect(response.data).to.be.equal("object");
		
    })
});