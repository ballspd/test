import vue from 'vue'
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

vue.component('ValidationProvider', ValidationProvider)
vue.component('ValidationObserver', ValidationObserver)

extend('required', {
    ...required,
    message: "This field is required or your custom error message"
});

extend('email', {
...email,
message: "This email"
});