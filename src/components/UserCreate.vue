<template>
    <div class="card card-body mt-4 container">
        <form @submit.prevent="onSubmit">
            <div class="from-group">
                <label>Name</label>
                <input type="text" v-model="form.name" class="form-control" required/>
            </div>
            <div class="form-group mt-3">
                <label >Email</label>
                <input type="email" v-model="form.email" class="form-control" required/>
            </div>
            <div class="form-group mt-3">
                <label >Phone</label>
                <input type="tel" v-model="form.phone" class="form-control" required/>
            </div>
            <button type="submit" class="btn btn-success mt-3">Create User</button>
        </form>
    </div>
</template>

<script>
import { createUser} from '@/firebase'
import { reactive } from 'vue'
    export default {
        setup(){
            const form = reactive({name: '',email: '',phone: ''})
            const onSubmit = async()=>{
                await createUser({ ...form})
                form.name=''
                form.email=''
                form.phone=''
            }
            return {form,onSubmit}
        }
        
    }
</script>

<style lang="scss" scoped>

</style>