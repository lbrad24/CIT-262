import assert from "assert";
import login from "../utils/login.mjs";

it("Login API should return a valid token",async ()=>{ 

    const loginToken= await login({userName:"lbradford2400@gmail.com", password:"Th1s1S@pa66w0r9"});
 
    assert.equal(loginToken.length,36);//check for a valid token 

});