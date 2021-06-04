<template>
    <div class="login__container">
        <form>
            <FormInput
                name="username"
                label="Username"
                inputType="text"
            />
            <FormInput
                name="password"
                label="Password"
                inputType="password"
            />
            <SubmitForm
                action="http://localhost/V1/login"
            />
        </form>
    </div>
</template>
<script>
import FormInput from '../Forms/Input';
import SubmitForm from '../Forms/Submit';
export default {
    name: 'LoginForm',
    components: { FormInput, SubmitForm },
}
</script>

<style scoped lang="scss">
    .login__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 40px 0;
    }
</style>