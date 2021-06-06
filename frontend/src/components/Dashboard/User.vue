<template>
    <div class="container user__container">
        <div class="container--left">
            <p>{{ user.name }}</p>
            <p>{{ user.email }}</p>
        </div>
        <div class="container--right">
            <p>{{ 'User has logged in:' }}</p>
            <p class="text--semibold">{{ '313 times' }}</p>
        </div>
    </div>
</template>
<script>
export default{
    name: 'UserDashboard',
    data() {
        return {
            user: {},
        };
    },
    beforeMount() {
        if (!localStorage.getItem('jwt')) {
            this.$router.push('/');
        } else {
            this.setUser();
        }
    },
    methods: {
        setUser() {
            this.axios.get(process.env.VUE_APP_BACKEND_URL + 'user/user', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            })
                .then(data => {
                    this.user = data.data;
                    console.log(this.user);
                })
        }
    }
}
</script>
<style lang="scss" scoped>
    .user__container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>