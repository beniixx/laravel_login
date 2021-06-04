<template>
    <div class="register">
        <div class="page-title">
            <h1 class="page-title__text">Register</h1>
        </div>
        <RegisterForm />
    </div>
</template>
<script>
import RegisterForm from '../components/Register/Form';
export default {
    name: 'Register',
    components: { RegisterForm },
}
</script>

<style scoped lang="scss">

</style>