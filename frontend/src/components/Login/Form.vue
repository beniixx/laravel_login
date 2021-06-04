<template>
    <div class="container login__container">
        <form>
            <FormInput
                name="username"
                label="Username or email:"
                inputType="text"
                :requiredInput="true"
            />
            <FormInput
                name="password"
                label="Password:"
                inputType="password"
                :requiredInput="true"
            />
            <div class="info info__required">
                <span> {{ '* required input' }} </span>
            </div>
            <div class="info">
                <p>
                    {{ 'Don\'t have an account?' }}
                    <router-link to="/register">Register here</router-link>
                </p>
            </div>
            <SubmitForm
                action="http://localhost/V1/login"
                label="Login"
            />
        </form>
    </div>
</template>
<script>
import FormInput from '@/components/Forms/Input';
import SubmitForm from '@/components/Forms/Submit';
export default {
    name: 'LoginForm',
    components: { FormInput, SubmitForm },
}
</script>

<style scoped lang="scss">
</style>