import supertest from "supertest"
import server from "../../src/app"

afterAll(() => {
  console.info("All the test has been executed ! \n The server is closing...")
  server.close();
  console.info("Server closed !")
});

describe("Test the hello path", () => {
  test("It should response the GET method", done => {
    supertest(server)
      .get("/V1/hello")
      .then(response => {
        expect(response.statusCode).toBe(400);
        done();
      });
  });
});