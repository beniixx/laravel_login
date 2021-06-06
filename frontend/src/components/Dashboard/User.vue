<template>
    <div class="container user__container">
        <div class="container--left">
            <p>{{ 'Username' }}</p>
            <p>{{ 'Email@user.com' }}</p>
        </div>
        <div class="container--right">
            <p>{{ 'User has been logged in' }}</p>
            <p class="text--semibold">{{ '313 times' }}</p>
        </div>
    </div>
</template>
<script>
export default{
    name: 'UserDashboard',
}
</script>
<style lang="scss" scoped>
    .user__container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>