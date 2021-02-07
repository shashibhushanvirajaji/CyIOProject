
import { testData } from './cypress/fixtures/example.json';
testData.forEach(element => {
    console.log(element.username) 
    console.log(element.emailaddress)
});