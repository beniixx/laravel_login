<template>
    <div class="input">
        <label class="input__label" :for="name">{{label}}</label>
        <input :type="inputType" :name="name" :id="name" />
    </div>
</template>
<script>
export default {
    name: 'FormTextInput',
    props: {
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        inputType: {
            type: String,
            required: false,
            default: () => { return 'text' },
        }
    }
}
</script>

<style scoped lang="scss">
    .input {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .input__label {
        margin-bottom: 10px;
    }
</style>