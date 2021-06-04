<template>
    <div class="register__container">
        <form>
            <FormInput
                name="username"
                label="Username or email"
                inputType="text"
            />
            <FormInput
                name="password"
                label="Password"
                inputType="password"
            />
            <SubmitForm
                action="http://localhost/V1/register"
            />
        </form>
        <router-link to="/">Login</router-link>
    </div>
</template>
<script>
import FormInput from '../Forms/Input';
import SubmitForm from '../Forms/Submit';
export default {
    name: 'RegisterForm',
    components: { FormInput, SubmitForm },
}
</script>

<style scoped lang="scss">
    .register__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 40px 0;
    }
</style>