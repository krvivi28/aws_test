import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

console.log(process.env);

const pattern = /^https?:\/\/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{1,5}$/;

const containsPattern = (inputString) => {
  return pattern.test(inputString);
};

describe("verifying deployment link", () => {
  it("deployment link should contain the specified format", () => {
    expect(containsPattern(process.env.AWS_LINK)).toBe(true);
  });

  it("deployment link does not contain the specified format", () => {
    const testString = "This is a random string without the expected format";
    expect(containsPattern(testString)).toBe(false);
  });
  it("should respond with status 200", async () => {
    const response = await axios.get(link);
    expect(response.status).toBe(200);
  });
});
