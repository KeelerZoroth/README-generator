import fs from "fs"
import inquirer from "inquirer"
import generateMarkdown from "./generateMarkdown.js";
import initFuncitons from "./initFuncitons.js";
import { assert } from "console";

// this is a test file to check if the base functionality is fine, but honostly, I don't think I am doing it quite right

try{

    const answers = {
        title: "Test File Input",
        description: "This was generated from the test.js file.",
        installPrerequisites: "-Test Input-",
        installation: "-Test Input 1-;-Test Input2-;-Test Input 3-",
        usage: "-Test Input 1-;-Test Input2-;-Test Input 3-",
        license: "Apache License 2.0",
        testSteps: "-Test Input 1-;-Test Input2-;-Test Input 3-",
        autherName: "Tester Teston",
        email: "test@email.com",
        GHUsername: "TestUsername"
    };
    inquirer
        .prompt(initFuncitons.questions, answers)
        .then((response) => {
            const fileText = generateMarkdown(response);
            initFuncitons.writeToFile("TestREADME.md", fileText);
            const compleatedFileText = fs.readFileSync("TestREADME.md", "utf8", (err) => {err ? console.log(err) : console.log("File Read")});
            fs.unlinkSync("TestREADME.md", (err) => {err ? console.log(err) : console.log("File Read")});
            assert((compleatedFileText === fileText), "They do not match");
            console.log("");
            console.log("Passed.");
        });
} catch (err) {
    console.log(err)
}




