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

                this.isValid = this.validEmail(element.value);

            } else if (element.type === 'password') {
                this.isValid = this.validPassword(element.value);
            }
        },
        validEmail: function (email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
            return re.test(email);
        },
        validPassword(password) {
            return password.length > 5;
        }
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