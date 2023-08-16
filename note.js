// Packages:
// https://vee-validate.logaretm.com/v4/
// https://vee-validate.logaretm.com/v4/guide/overview/



// Installation:

// npm i vee - validate--save
// npm install @vee-validate / rules

// Imports:

// import { Form, Field, defineRule, ErrorMessage } from 'vee-validate';
// import { required, email, min, max, alpha_spaces, min_value, max_value, confirmed } from '@vee-validate/

// Define Rules:

// defineRule('required', required);
// defineRule('email', email);
// defineRule('min', min);
// defineRule('max', max);
// defineRule('alpha_spaces', alpha_spaces);
// defineRule('min_value', min_value);
// defineRule('max_value', max_value);
// defineRule('confirmed', confirmed);

// Schema:

// let schema = {
//     name: "required|min:3|max:100|alpha_spaces",
//     email: "required|min:3|max:100|email",
//     age: "required|min_value:18|max_value:100",
//     password: "required|min:3|max:100",
//     confirm_password: "confirmed:@password",
//     country: "",
//     tos: ""

// }

// Binding:

//  : validation - schema="schema"

//     < ErrorMessage class="text-red-600" name = "name" />