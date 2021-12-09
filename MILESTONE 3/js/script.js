/*
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
*/

/*
MILESTONE 3
Predisporre un campo di input testuale e 
un pulsante "aggiungi": cliccando sul pulsante, 
il testo digitato viene letto e utilizzato per creare 
un nuovo todo, che quindi viene aggiunto alla lista 
dei todo esistenti.
*/

Vue.config.devtools = true;

const app = new Vue(

    {
        el: "#root",
        data: {

            textInputTodo: "",

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

            },

            addTodo: function(textInputTodo){

                if(this.textInputTodo.trim().length > 2){

                    this.todo.push({

                        text: textInputTodo,
                        done: false
    
                    });
    
                    this.textInputTodo = "";

                }

            }

        }
    }

);