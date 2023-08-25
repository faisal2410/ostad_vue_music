<script setup>
import { Form, Field, defineRule, ErrorMessage, configure } from 'vee-validate'
import {
  required,
  email,
  min,
  max,
  alpha_spaces,
  min_value,
  max_value,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules'

defineRule('required', required)
defineRule('tos', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('alpha_spaces', alpha_spaces)
defineRule('min_value', min_value)
defineRule('max_value', max_value)
defineRule('passwords_mismatch', confirmed)
defineRule('excluded', excluded)
defineRule('country_excluded', excluded)


let schema = {
  name: 'required|min:3|max:100|alpha_spaces',
  email: 'required|min:3|max:100|email',
  age: 'required|min_value:18|max_value:100',
  password: 'required|min:9|max:100|excluded:password',
  confirm_password: 'passwords_mismatch:@password',
  country: 'required|country_excluded:Antarctica',
  tos: 'tos'
}

let userData = {
  country: 'USA',
  
}
let reg_in_submission = false;
let reg_show_alert = false;
let reg_alert_variant = 'bg-blue-500';
let reg_alert_msg = "Please wait! Your account is being created.";

configure({
  generateMessage: (ctx) => {
    const messages = {
      required: `The field ${ctx.field} is required`,
      min: `The field ${ctx.field} is too short`,
      max: `The field ${ctx.field} is too long`,
      alpha_spaces: `The field ${ctx.field} may only contain alphabetical characters and spaces`,
      email: `The field ${ctx.field} must be valid email`,
      min_value: `The field ${ctx.field} is too low`,
      max_value: `The field ${ctx.field} is too high`,
      excluded: `YOu are not allowed to use this value for the field ${ctx.field}`,
      country_excluded: `Due to restrictions, we do not accept users from this location.`,
      passwords_mismatch: `The passwords don't match`,
      tos: `You must accept the Terms of Service`
    }
    const message = messages[ctx.rule.name]
      ? messages[ctx.rule.name]
      : `The field ${ctx.field} is invalid`;

    return message;
  },
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: true
  
})

 const register=(values)=> {  
  console.log("=====>Submitted Data====>",values)
}
</script>
<template>
  
          <!-- Registration Form -->
          <div class="text-white text-center font-bold p-4 rounded mb-4"
          v-if="reg_show_alert"
          :class="reg_alert_variant"
          >
        {{ reg_alert_msg }}
        </div>
          <Form
           
            :validation-schema="schema"
            @submit="register"
            :initial-values="userData"
          >
            <!-- Name -->
            <div class="mb-3">
              <label class="inline-block mb-2">Name</label>
              <Field
                type="text"
                name="name"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Name"
              />
              <ErrorMessage class="text-red-600" name="name" />
            </div>
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <Field
                type="email"
                name="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email"
              />
              <ErrorMessage class="text-red-600" name="email" />
            </div>
            <!-- Age -->
            <div class="mb-3">
              <label class="inline-block mb-2">Age</label>
              <Field
                type="number"
                name="age"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
              />
              <ErrorMessage class="text-red-600" name="age" />
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <Field name="password" :bails="false" v-slot="{ field, errors }">
                <input
                  type="password"
                  class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                  placeholder="Password"
                  v-bind="field"
                />
                <div class="text-red-600" v-for="error in errors" :key="error">
                  {{ error }}
                </div>
              </Field>

              <ErrorMessage class="text-red-600" name="password" />
            </div>
            <!-- Confirm Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Confirm Password</label>
              <Field
                type="password"
                name="confirm_password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Confirm Password"
              />
              <ErrorMessage class="text-red-600" name="confirm_password" />
            </div>
            <!-- Country -->
            <div class="mb-3">
              <label class="inline-block mb-2">Country</label>
              <Field
                as="select"
                name="country"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
              >
                <option value="USA">USA</option>
                <option value="Mexico">Mexico</option>
                <option value="Germany">Germany</option>
                <option value="Antarctica">Antarctica</option>
              </Field>
              <ErrorMessage class="text-red-600" name="country" />
            </div>
            <!-- TOS -->
            <div class="mb-3 pl-6">
              <Field
                type="checkbox"
                class="w-4 h-4 float-left -ml-6 mt-1 rounded"
                name="tos"
                value="1"
              />
              <label class="inline-block">Accept terms of service</label>
              <ErrorMessage class="text-red-600 block" name="tos" />
            </div>
            <button
              type="submit"
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
              :disabled="reg_in_submission"
            >
              Submit
            </button>
          </Form>
</template>


