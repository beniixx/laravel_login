<template>
    <div class="dashboard">
        <PageTitle 
            title="Woops!"
        />
        <div class="not-found">
            <p>
                {{ 'Well, well, well...' }}
            </p>
            <p>
                {{ 'Someone is snooping around on pages that does not exist...' }}
            </p>
            <p>
                {{ 'If you are done with this app then perhaps I can help you back to your real work on ' }}
                <a href="https://autovex.fi">Autovex</a>.
            </p>
            <p>
                {{ 'Othervise I think you should go back to the ' }}
                <router-link to="/">start</router-link>.
            </p>
        </div>
    </div>
</template>
<script>
import PageTitle from '@/components/Base/PageTitle';
export default {
    name: '404',
    components: { PageTitle },
}
</script>

<style scoped lang="scss">

</style>