<template>
    <div class="container user__container">
        <div class="container--left">
            <p>{{ user.name }}</p>
            <p>{{ user.email }}</p>
        </div>
        <div class="container--right">
            <span>{{ 'User has logged in: ' }}</span>
            <span class="text--semibold">{{ getCounterText }}</span>
            <button 
                type="button"
                @click="logout"
            >
                {{ 'Logout' }}
            </button>
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
    computed: {
        getCounterText() {
            if (this.user.login_counter > 1) {
                return `${this.user.login_counter} times.`;
            }

            return `${this.user.login_counter} time.`;
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
        },
        logout() {
            localStorage.removeItem('jwt');
            this.$router.push('/');
        },
    }
}
</script>
<style lang="scss" scoped>
    .user__container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media screen and(min-width: 768px) {
        .user__container {
            flex-direction: row;
        }
    }
</style>