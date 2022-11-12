<template>
    <div>
        <form @submit.prevent="searchMusic()">
            <div>
                <input type="text" v-model="search" class="px-6 py-2 text-gray-200 focus:outline-1  bg-transparent"
                    placeholder="Search Artist">
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';


export default defineComponent({
    name: "Search",
    setup(props) {
        const search = ref("");

        onMounted(() => { });
        //Methods
        const searchMusic = () => {
            console.log(search.value)
        }

        return {
            search, 
            searchMusic
        }
    }

})

</script>