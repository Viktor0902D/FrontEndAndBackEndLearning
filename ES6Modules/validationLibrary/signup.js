import { isValidEmail,isValidPassword } from "./validators";
console.log(isValidEmail("test@example.com"));
console.log(isValidPassword("password123"));
console.log(isValidEmail("invalid-email"));
console.log(isValidPassword("short"));