<template>
    <div class="page-title">
            <h1 class="page-title__text">{{ title }}</h1>
        </div>
</template>
<script>
export default {
    name: 'PageTitle',
    props: {
        title: {
            type: String,
            required: true,
        }
    }
}
</script>
<style scoped lang="scss">

</style>
