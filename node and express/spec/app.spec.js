var Request = require("request");

var base_url = "http://localhost:3090/";


describe("Server", () => {
    var server;
    beforeAll(() => {
        server = require("../server");
    });
});
describe("POST /", () => {

    it("responds successfully", (done) => {
        Request.get("http://localhost:3090/", (error, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("the body of the request is a string", (done) => {
        Request.get("http://localhost:3090//add/:musician", (error, response, body) => {
            expect(body).toEqual(jasmine.any(String));
            done();
        });
    });
    it("the body of the response is an object", (done) => {
        Request.get("http://localhost:3090//add/:musician", (error, response, body) => {
            expect(response).toEqual(jasmine.any(Object));
            done();
        });
    });
})
describe("GET /", () => {

    it("responds successfully", (done) => {
        Request.get("http://localhost:3090/", (error, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("the body of the request is a string", (done) => {
        Request.get("http://localhost:3090/get", (error, response, body) => {
            expect(body).toEqual(jasmine.any(String));
            done();
        });
    });

})

describe("/:id", () => {

    it("responds successfully", (done) => {
        Request.get("http://localhost:3090/", (error, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("the body of the request is a string", (done) => {
        Request.get("http://localhost:3090//:id", (error, response, body) => {
            expect(body).toEqual(jasmine.any(String));
            done();
        });
    });

})