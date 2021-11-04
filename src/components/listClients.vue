<template>
  <div class="hello">
      <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
import { requestApi } from "@/api/index.js"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    data() {
      return {
        items: [
      ///    {  client_name: 'Dickerson', DOB: 'Macdonald', Phone: 'Macdonald', Email: 'Macdonald', Address: 'Macdonald', Payments: 'Macdonald', Total: 'Macdonald', Actions: 'Macdonald' },
        ]
      }
    },
    methods: {
      async listarData(){
        try {
          let respon=await requestApi(
            `listClient`,
            {},
            "GET"
          );
          let data=respon.data.state ? respon.data.data : [];       
          //data;
          data.forEach((item)=>{
            this.items.push({  client_name: item.firstname, DOB: item.dob, Phone: item.phone, Email: item.email, Address: item.address, Payments: 'Macdonald', Total: 'Macdonald', Actions: 'Macdonald' });
          });
          console.log("ResultFilter",respon.data.data);
        } catch (error) {
            console.log("error",error);
        }finally {
          // I’ll fire either way
        }
      }
     },
    async mounted() {
        await this.listarData();
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
