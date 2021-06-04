<template>
    <div class="register">
        <PageTitle 
            title="Register"
        />
        <RegisterForm />
    </div>
</template>
<script>
import RegisterForm from '@/components/Register/Form';
import PageTitle from '@/components/Base/PageTitle';
export default {
    name: 'Register',
    components: { RegisterForm, PageTitle },
}
</script>

<style scoped lang="scss">

</style>