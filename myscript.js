let app = new Vue({

    el: "#app",
    data : {
        toDos : [
            {
                task:"fai i compiti",
                done: true,

            },
            {
                task:"chiama quella persona",
                done: true,
            },
            {
                task:"fai la spesa",
                done: true,
            },
            {
                task:"leggi il libro",
                done: true,
            },
    ]
    },
    methods: {
        removeToDo(index) {
          this.toDos.splice(index, 1);
        },
        toggle(){
            this.done= !done
            console
        },
        
      }

      
})