export default {
    methods: {
        validateRegistration(form) {
            const data = {};
            [...form.querySelectorAll('input')].forEach(i => {
                if (i.name !== 'password2') {
                    data[i.name] = i.value;
                } else {
                    if (!this.validatePasswords(data.password, i.value)) {
                        data = 'Error';
                    }
                }
            })
            
            console.log(data);
            return data;
        },
        validateLogin(form) {

        },
        validateEmail(email) {
            console.log(email);
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
            return re.test(email);
        },
        validatePassword(password) {
            return password.length > 6;
        },
        validatePasswords(password1, password2) {
            return password1 === password2;
        },
    }
}