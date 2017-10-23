<template>
    <div>
        <h1>{{post.title[0].value}}</h1>
        <p>{{post.body[0].value}}</p>
        <router-link :to="'/create'">Nieuw artikel</router-link>
    </div>
</template>

<script>
export default {
  name: "readarticle",
  data() {
    return {
      post: []
    };
  },
  mounted() {
    let self = this;
    console.log("Read Article Component Mounted");
    axios.get("http://localhost/vue-01/drupal/node/1?_format=hal_json").then(
      response => {
        console.log(response.data);
        self.post = response.data
      },
      errorResponse => {
        console.log(errorResponse);
      }
    );
  }
};
</script>

<style>

</style>