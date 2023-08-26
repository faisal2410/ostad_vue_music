<script setup>
import { Form, Field, defineRule, ErrorMessage } from 'vee-validate'
import {
  required,
  email,
  min,
  max,
  alpha_spaces,

} from '@vee-validate/rules'
import {useUserStore} from '../stores/user.js'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('alpha_spaces', alpha_spaces)

const userStore=useUserStore()

let loginSchema = {
  email: 'required|email',
  password:'required|min:9|max:100'
}



</script>
<template>
     <!-- Login Form -->
          <Form  
           :validation-schema="loginSchema" 
            @submit="userStore.authenticate"
            >
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
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <Field
                type="password"
                name="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Password"
              />
              <ErrorMessage class="text-red-600" name="password" />
            </div>
            <button
              type="submit"
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
            >
              Submit
            </button>
          </Form>
</template>


