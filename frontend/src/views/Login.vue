<template>
    <div class="login">
        <PageTitle 
            title="Login"
        />
        <LoginForm />
    </div>
</template>
<script>
import LoginForm from '@/components/Login/Form';
import PageTitle from '@/components/Base/PageTitle';
export default {
    name: 'Login',
    components: { LoginForm, PageTitle },
}
</script>

<style scoped lang="scss">

</style>