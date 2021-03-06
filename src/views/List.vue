
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <UserList />
  </div>
</template>

<script>
// @ is an alias to /src
import UserList from '@/components/UserList.vue'


export default {
  name: 'create',
  components: {
    UserList,
  }
}
</script>