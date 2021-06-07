<template>
    <div class="input input--submit">
        <button 
            class="button" 
            type="button"
            :disabled="!canSubmit"
            @click="send"
        >
            {{ label }}
        </button>
        <div
            :class="['input__info', {'show': error}]"
        >
            <p>{{ 'Something went wrong, please try again' }}</p>
        </div>
    </div>
</template>
<script>
import ValidateForm from '@/mixins/validate-form';
export default {
    name: 'SubmitForm',
    mixins: [ValidateForm],
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
    },
    data() {
        return {
            error: false,
            loginError: 'Something went wrong, please try again',
            registrationError: 'The email is already registered. Please try again or if you already have an account try login',
            canSubmit: false,
            form: '',
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.form = this.getForm();
            document.addEventListener('keyup', e => {
                if (this.action === 'login') {
                    this.canSubmit = typeof this.validateLogin(this.form) === 'object';
                }

                if (this.action === 'register') {
                    this.canSubmit = typeof this.validateRegistration(this.form) === 'object';
                }
            })
        })
    },
    methods: {
        send() {
            if (this.action === 'login') {
                const data = this.validateLogin(this.form);
                if (typeof data === 'object') {
                    this.sendLogin(data);
                }
            }

            if (this.action === 'register') {
                const data = this.validateRegistration(this.form);
                if (this.action === 'register') {
                    this.sendRegistration(data);
                }
            }
        },
        getForm() {
            let form = this.$el.parentNode;

            while(form.tagName !== 'FORM') {
                form = form.parentNode;
            }

            return form;
        },
        sendRegistration(data) {
            this.sendRequest('user/create', data);
        },
        sendLogin(data) {
            this.sendRequest('user/login', data);
        },
        sendRequest(path, data) {
            this.axios.post(`${process.env.VUE_APP_BACKEND_URL}${path}`, data)
                .then(data => {
                    if (data.data.user) {
                        localStorage.setItem('jwt', data.data.user);
                        this.$router.push('dashboard');
                    } else {
                        this.error = true;
                    }
                })
                .catch(error => {
                    this.error = true;
                })
        },
        getErrorMessage() {
            if (this.action === 'login') {
                return this.loginError;
            }

            if (this.action === 'register') {
                return this.registrationError;
            }

            return '';
        },
    }
}
</script>

<style scoped lang="scss">
    .input__info {
        display: none;
        color: red;

        &.error {
            display: block;
        }
    }
</style>