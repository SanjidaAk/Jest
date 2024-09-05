const puppeteer = require('puppeteer');
const { generateResult, validateInput, checkAndGenerate } = require('../js/lib');

// Unit test for generateResult()
test("testing generateResult function", () => {
    const userId = '1';
    const title = "This is a test";
    const expectedResult = "User ID: 1 created an article titled This is a test";
    expect(generateResult(userId, title)).toBe(expectedResult);
});

// Unit test for validateInput()
test("testing validateInput function", () => {
    expect(validateInput(1, true, true)).toBeTruthy();
    expect(validateInput("", true, false)).toBeFalsy();
    expect(validateInput("test", true, false)).toBeTruthy();
    expect(validateInput("123", true, true)).toBeTruthy();
    expect(validateInput("abc", true, true)).toBeFalsy();
});

// Integration test for checkAndGenerate()
test("testing checkAndGenerate function", async () => {
    // Mocking the postToServer function
    const mockPostToServer = jest.fn().mockResolvedValue({
        userId: 1,
        title: "Title 1",
    });

    const result = await checkAndGenerate(1, "Title 1", "This is a test", mockPostToServer);
    expect(result).toBe("User ID: 1 created an article titled Title 1");
});
