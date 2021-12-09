/*
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
*/

/*
Bonus:
1- oltre al click sul pulsante, 
intercettare anche il tasto ENTER per aggiungere il todo 
alla lista
2- cliccando sul testo dell'item, 
invertire il valore della proprietà done 
del todo corrispondente (se done era uguale a false, 
    impostare true e viceversa)
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

            },

            addRemoveDone: function(index){
                
                if(this.todo[index].done){

                    this.todo[index].done = false;

                }else{
                    this.todo[index].done = true;
                }

            }

        }
    }

);