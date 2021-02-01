const { expect } = require("chai");
const app = require("supertest")(require("../app"));


describe("Routes",  () => {
  describe("GET /",  () => {
    it ("shows informaton about the api", async () => {
      const response = await app.get("/");
      expect (repsonse.status.to.equal(200));
      expect(response.text).to.include("The ACME API");
    })
  })
})
