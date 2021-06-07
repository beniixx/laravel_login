<template>
    <div class="container register__container">
        <form>
            <FormInput
                name="name"
                label="Name:"
                inputType="text"
                :requiredInput="true"
            />
            <FormInput
                name="email"
                label="Email:"
                inputType="text"
                :requiredInput="true"
                validation="email"
            />
            <FormInput
                name="password"
                label="Password:"
                inputType="password"
                :requiredInput="true"
                validation="password"
            />
            <FormInput
                name="password2"
                label="Password again:"
                inputType="password"
                :requiredInput="true"
                validation="password2"
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
                action="register"
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
    beforeMount() {
        if (localStorage.getItem('jwt')) {
            this.$router.push('dashboard');
        }
    }
}
</script>

<style scoped lang="scss">
</style>