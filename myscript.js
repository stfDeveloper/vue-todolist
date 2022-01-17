let app = new Vue({
    el: "#app",
    
    data : {
        notDone:false,
        toDos : [
            "fai i compiti",
        ]
    },
    methods: {
        removeToDo(index) {
          this.toDos.splice(index, 1);
        },
        line: function(){
            this.notDone = !this.notDone
        }

      }
})