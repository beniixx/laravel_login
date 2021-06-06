<template>
    <div class="container register__container">
        <form>
            <FormInput
                name="username"
                label="Username:"
                inputType="text"
                :requiredInput="true"
            />
            <FormInput
                name="email"
                label="Email:"
                inputType="text"
                :requiredInput="true"
            />
            <FormInput
                name="password"
                label="Password:"
                inputType="password"
                :requiredInput="true"
            />
            <FormInput
                name="password2"
                label="Password again:"
                inputType="password"
                :requiredInput="true"
            />
            <div class="info info__required">
                <span> {{ '* required input' }} </span>
            </div>
            <div class="info">
                <p>
                    {{ 'Already have an account?' }}
                    <router-link to="/">Login here</router-link>
                </p>
            </div>
            <SubmitForm
                action="http://localhost/V1/register"
                label="Register"
            />
        </form>
    </div>
</template>
<script>
import FormInput from '@/components/Forms/Input';
import SubmitForm from '@/components/Forms/Submit';
export default {
    name: 'RegisterForm',
    components: { FormInput, SubmitForm },
}
</script>

<style scoped lang="scss">
</style>