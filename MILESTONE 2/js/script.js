/*
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
*/

/*
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": 
cliccando su di essa, il todo viene rimosso dalla lista.
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
        methods: {

            removeTodo: function(index){

                this.todo.splice(index, 1);

            }

        }
    }

);