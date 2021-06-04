<template>
    <div class="dashboard">
        <PageTitle 
            title="User"
        />
        <UserDashboard />
    </div>
</template>
<script>
import UserDashboard from '@/components/Dashboard/User';
import PageTitle from '@/components/Base/PageTitle';
export default {
    name: 'Dashboard',
    components: { UserDashboard, PageTitle },
}
</script>

<style scoped lang="scss">

</style>