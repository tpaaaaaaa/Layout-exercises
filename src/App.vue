<template>
  <div>
    <Nav />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
export default {
  name: 'App',
  components: { Nav }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}
</style>
