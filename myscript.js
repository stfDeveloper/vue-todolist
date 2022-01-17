let app = new Vue({

    el: "#app",
    data : {
        toDos : ["fai i compiti",
        "chiama quella persona",
        "fai la spesa",
        "leggi il libro"]
    },
    methods: {
        removeToDo(index) {
          this.toDos.splice(index, 1);
        }
      }


})