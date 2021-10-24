var app = new Vue({
    el: '#app',

    data() {
        return{
            covers: [],
            genresList: [],
            authorsList: [],
            genreSelected: '',
            authorSelected: ''
        }
    },
    methods:{

      // getQuery(api, query, arr){
      //   axios
      //     .get(api,{
      //       params:{
      //           queryValue: query
      //       }
      //     })
      //     .then((response) => {
      //       arr = response.data
      //     });
      // },


      choosenGenre(){

        // this.getQuery("http://localhost:8888/php-ajax-dischi/partials/api/index.php", this.genreSelected, this.covers);

        axios
          .get("http://localhost:8888/php-ajax-dischi/partials/api/index.php",{
            params:{
              queryValue: this.genreSelected
            }
          })
          .then((response) => {
            this.covers = response.data;
          });
          
      },
      
    
        
    },
    created() {
      // this.getQuery("http://localhost:8888/php-ajax-dischi/partials/api/genresListApi.php", null,this.genresList)
      // this.getQuery("http://localhost:8888/php-ajax-dischi/partials/api/index.php", null, this.covers);

      // Album call
      axios
      .get("http://localhost:8888/php-ajax-dischi/partials/api/index.php")
      .then((response) => {
        this.covers = response.data;
      }); 
      // genres call
      axios
      .get("http://localhost:8888/php-ajax-dischi/partials/api/genresListApi.php")
      .then((response) => {
        this.genresList = response.data;
      }); 
     
     
      }
    
    
})