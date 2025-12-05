import { writeFileSync } from 'fs';

const content = "Test Content";

try {
    writeFileSync("./test.txt", content);
    console.log("Successfully written");
} catch (error) {
    console.log(error);
}