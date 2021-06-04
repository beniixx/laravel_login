<template>
    <div class="login">
        <div class="page-title">
            <h1 class="page-title__text">Login</h1>
        </div>
        <LoginForm />
    </div>
</template>
<script>
import LoginForm from '../components/Login/Form';
export default {
    name: 'Login',
    components: { LoginForm },
}
</script>

<style scoped lang="scss">
    .login {
        
    }
</style>