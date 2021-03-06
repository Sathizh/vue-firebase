<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CreateUser />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateUser from '@/components/UserCreate.vue'

export default {
  name: 'create',
  components: {
    CreateUser,
  }
}
</script>