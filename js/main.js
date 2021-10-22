var app = new Vue({
    el: '#app',

    data() {
        return{
            covers: [],
            
        }
    },
    methods:{
        
    },
    created() {
        axios
          .get("http://localhost:8888/php-ajax-dischi/api/index.php")
          .then((response) => {
            this.covers = response.data;
            console.log(this.covers);
          });
      }
    
    
})