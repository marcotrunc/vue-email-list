console.log('axios ok', axios);
/* Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
Usando Vue.js, generare 10 indirizzi email e stamparli in 
pagina all'interno di una lista.*/
Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        emails: [],
        emailsItems: undefined,
        number: undefined,
        flag: false,
    },
    methods: {
        getEmails() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                const newEmail = resp.data.response;
                if (!this.emails.includes(newEmail)) {
                    this.emails.push(newEmail);
                }
                console.log(this.emails);
            })
        },
        printEmails() {
            this.flag = true;
            this.number = parseInt(this.emailsItems);
            this.emails = [];
            for (let i = 0; i < this.number; i++) {
                this.getEmails();
            }
            this.emailsItems = '';
        },
    },
})
