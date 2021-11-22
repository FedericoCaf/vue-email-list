const app = new Vue({

 el: '#app',


 data: {

  emailArray: [],
  maxEmail: 10,
  isError: false,
  isLoading: true,

 },

 methods:{
  getEmail(){
   
   for (let i = 0; i < this.maxEmail; i++) {
    
       axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((response) =>{
  
        // console.log(response);
        const data = response.data
       // console.log(data);
  
        this.emailArray.push(data.response)
        console.log(this.emailArray);

        if(this.emailArray.length === this.maxEmail){
          this.isLoading = false;
        }
  
      } )
  
      .catch((error) => {
        console.log(error);
        this.isError = true;
      } ) 

   }
  
  }
 },

 mounted(){
   this.getEmail();
 }



})