<template>
    <div class="card mt-4">
        <table class="table m-0">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{id,name,email,phone} in users" :key="id">
                    <td scope="row">{{name}}</td>
                    <td scope="row">{{email}}</td>
                    <td scope="row">{{phone}}</td>
                    <td>
                         <router-link :to="`/edit/${id}`">
                            <button class="btn btn-outline-warning btn-sm mr-2">Edit</button>
                        </router-link>
                            <button class="btn btn-outline-danger btn-sm" @click="deleteUser(id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import {useLoadUsers, deleteUser} from '@/firebase'
export default {
    setup () {
        const users = useLoadUsers()

        return {users,deleteUser}
    }
}
</script>

<style lang="scss" scoped>

</style>