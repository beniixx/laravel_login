<template>
    <div class="input input--submit">
        <button class="button" type="button">{{ label }}</button>
    </div>
</template>
<script>
export default {
    name: 'SubmitForm',
    props: {
        label: {
            type: String,
            required: false,
            default: () => { return 'Submit' },
        },
        action: {
            type: String,
            required: true,
        },
    }
}
</script>

<style scoped lang="scss">

</style>