<template>
    <div class="card card-body mt-4 container">
        <h3>Edit User</h3>
        <form @submit.prevent="Update">
            <div class="form-group">
                <label >Name</label>
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
            <button type="submit" class="btn btn-primary mt-3">Update</button>
        </form>

    </div>
</template>

<script>
    import {reactive, computed, onMounted} from 'vue'
    import {useRoute, useRouter} from 'vue-router'
    import {getUser,updateUser} from '@/firebase'
export default {
    setup () {
        const router = useRouter()
        const route = useRoute()
        const userId = computed(()=> route.params.id)

        const form = reactive({ name: '',email: '',phone: ''})
        onMounted(async()=>{
            const user = await getUser(userId.value)
            form.name=user.name
            form.email=user.email
            form.phone=user.phone
        })
        const Update = async()=>{
            await updateUser(userId.value, {...form})
            router.push('/list')
            form.name= ''
            form.email= ''
            form.phone= ''
    
        }


        return {form,Update}
    }
}
</script>

<style lang="scss" scoped>

</style>