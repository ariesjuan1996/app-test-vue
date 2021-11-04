<template>
  <div class="hello">
      <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: 'formClient',
  props: {
    msg: String
  },
    data() {
      return {
        items: [
          {  client_name: 'Dickerson', DOB: 'Macdonald', Phone: 'Macdonald', Email: 'Macdonald', Address: 'Macdonald', Payments: 'Macdonald', Total: 'Macdonald', Actions: 'Macdonald' },
        ]
      }
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
