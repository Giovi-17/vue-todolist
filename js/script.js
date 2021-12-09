/*
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
*/

/*
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
*/

Vue.config.devtools = true;

const app = new Vue(

    {
        el: "#root",
        data: {

            todo:[

                {
                    text: "Andare al supermercato",
                    done: false
                },

                {
                    text: "Andare dal barbiere",
                    done: true
                },

                {
                    text: "Portare a spasso il cane",
                    done: false
                },

                {
                    text: "Svaligiare una banca",
                    done: false
                },

            ]

        },
        methods: {}
    }

);