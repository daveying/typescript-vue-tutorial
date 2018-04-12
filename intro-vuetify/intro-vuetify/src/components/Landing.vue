<template>
  <div class="hello">
      <div>
      <split-pane>
      <section slot="left">Left Pane</section>
      <section slot="right">Right Pane</section>
    </split-pane>
    </div>
  </div>
</template>

<script>
//import Split from '@/../node_modules/split.js';
import SplitPane from 'vue-split-pane'
export default {
  name: 'Landing',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { SplitPane}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
