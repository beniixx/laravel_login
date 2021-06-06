<template>
    <div class="input">
        <label 
            :class="['input__label', { 'required': requiredInput }]" 
            :for="name"
        >
            {{label}}
        </label>
        <input
            :class="['input__value', {'valid': isValid}]"
            :type="inputType" 
            :name="name" 
            :id="name"
            ref="input"
        />
    </div>
</template>
<script>
import ValidateForm from '@/mixins/validate-form';
export default {
    name: 'FormTextInput',
    mixins: [ValidateForm],
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
        },
        requiredInput: {
            type: Boolean,
            required: false,
            default: () => { return false }
        }
    },
    data() {
        return {
            isValid: false,
        };
    },
    mounted() {
        this.$refs.input.addEventListener('keyup', this.checkInput);
    },
    methods: {
        checkInput(e) {
            const element = e.target;
            if (element.type === 'text') {
                this.isValid = this.validateEmail(element.value);
            } else if (element.type === 'password') {
                this.isValid = this.validatePassword(element.value);
            }
        },
    }
}
</script>

<style scoped lang="scss">
    .valid {
        border: 2px solid green;
    }

    .required {
        display: flex;
        flex-direction: row;

        &:after {
            content: '*';
            display: block;
            margin-left: .2em;
        }
    }
</style>