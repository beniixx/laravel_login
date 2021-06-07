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
        <div 
            :class="['input__info', {'show': !isValid}]"
        >
            <p>{{ getInfoText() }}</p>
        </div>
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
        },
        validation: {
            type: String,
            required: false,
        }
    },
    data() {
        return {
            isValid: true,
            emailInfoText: 'This is not a valid email address',
            passwordInfoText: 'The password must be at least six (6) characters',
            password2InfoText: 'The passwords do not match',
        };
    },
    mounted() {
        this.$refs.input.addEventListener('keyup', this.checkInput);
    },
    methods: {
        checkInput(e) {
            const element = e.target;
            this.isValid = this.validateInput(element);
        },
        getInfoText() {
            if (this.validation) {
                switch(this.validation) {
                    case 'email':
                        return this.emailInfoText;
                    case 'password':
                        return this.passwordInfoText;
                    case 'password2':
                        return this.password2InfoText;
                    default:
                        return '';
                }
            }
        },
        validateInput(input) {
            if (this.validation) {
                switch(this.validation) {
                    case 'email':
                        return this.validateEmail(input.value);
                    case 'password':
                        return this.validatePassword(input.value);
                    case 'password2':
                        return this.validatePassword2(input);
                    default:
                        return true;
                }
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

    .input__info {
        display: none;
        color: red;

        &.show {
            display: block;
        }
    }
</style>