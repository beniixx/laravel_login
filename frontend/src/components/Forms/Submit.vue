<template>
    <div class="input input--submit">
        <button 
        class="button" 
        type="button"
        @click="send"
        >
            {{ label }}
        </button>
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
    methods: {
        send() {
            const form = this.getForm(this.$el);
            const data = this.validateRegistration(form);

            if (typeof data === 'object') {
                console.log(process.env);
                this.axios.post(process.env.VUE_APP_BACKEND_URL + 'user/create', data)
                .then(data => {
                    if (data.data.success) {
                        localStorage.setItem('jwt', data.data.success);
                        this.$router.push('dashboard');
                    } else {
                        console.log(data);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
            }
        },
        getForm(element) {
            let form = element.parentNode;

            while(form.tagName !== 'FORM') {
                form = form.parentNode;
            }

            return form;
        },
    }
}
</script>

<style scoped lang="scss">

</style>