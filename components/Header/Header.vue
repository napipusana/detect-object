<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="container">
        <b-navbar-brand href="/">HOME</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/nvisionRestful">NvisionRestful</b-nav-item>
            <b-nav-item href="/nvisionWebSocket">NvisionWebSocket</b-nav-item>
            <b-nav-item href="/about-vue">About vue</b-nav-item>
            <!-- <b-nav-item @click="navigateTo('test')" >Link</b-nav-item>
            <b-nav-item @click="navigateTo('test2')">Link</b-nav-item> -->
            <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
          </b-navbar-nav>

        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
// import Cookies from 'js-cookie'

export default {
  components: {
  },
  props: {
    msg: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
     
    }
  },
  mounted() {
    
  },
  created() {
    
  },
  methods: {
    
  }
}
</script>

<style>
/* h3 {
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
} */
</style>
