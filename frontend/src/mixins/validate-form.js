export default {
    methods: {
        validateRegistration(form) {
            let data = {};
            [...form.querySelectorAll('input')].forEach(i => {
                if (i.name !== 'password2') {
                    data[i.name] = i.value;
                } else {
                    if (!this.validatePasswords(data.password, i.value)) {
                        data = 'Error';
                    }
                }
            })
        
            return data;
        },
        validateLogin(form) {
            let data = {};
            [...form.querySelectorAll('input')].forEach(i => {
                data[i.name] = i.value;
            })

            if (data.email
                && data.password
                && this.validateEmail(data.email)
                && this.validatePassword(data.password)
                ) {
                return data;
            }
        
            return 'Error';
        },
        validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
            return re.test(email);
        },
        validatePassword(password) {
            return password.length > 5;
        },
        validatePassword2(password) {
            let parent = password.parentNode;

            while(parent.tagName !== 'FORM') {
                parent = parent.parentNode;
            }

            const original = parent.querySelector('input[name="password"]');

            return this.validatePasswords(original.value, password.value);
        },
        validatePasswords(password1, password2) {
            return password1 === password2;
        },
    }
}