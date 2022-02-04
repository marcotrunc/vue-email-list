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
                this.emails.push(resp.data.response);
                console.log(this.emails)
            })
        },
        printEmails() {
            for (let i = 0; i < this.emailsItems; i++) {
                this.getEmails();
            }
            console.log(this.emails)

        }
    },
})
