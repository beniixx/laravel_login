<template>
    <div class="container login__container">
        <form>
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
                action="login"
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
    beforeMount() {
        if (localStorage.getItem('jwt')) {
            this.$router.push('dashboard');
        }
    }
}
</script>

<style scoped lang="scss">
</style>