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
    },
    methods: {
        getEmails() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                const newEmail = resp.data.response;
                if (!this.emails.includes(newEmail)) {
                    this.emails.push(newEmail);
                }
                console.log(this.emails)
            })
        },
        printEmails() {
            this.emails = [];
            for (let i = 0; i < this.emailsItems; i++) {
                this.getEmails();
            }
        }
    },
})
