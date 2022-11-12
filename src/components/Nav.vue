<template>
    <div class="hidden lg:flex my-2 space-x-6">
        <div>
            <img src="../assets/images/images/logo.svg" class="" alt="">
        </div>
        <div class="flex items-center">
            <div class="h-full flex items-center absolute">
                <MagnifyingGlassIcon class="text-white w-4 h-4" />
    
            </div>
            <div class="">
                <input type="text" :value="search"  @input="searchMusic($event.target.value)" class="px-6 py-2 focus:outline-1  bg-transparent" placeholder="Search Artist">
    
            </div>
        </div>
    </div>
    <div class=" flex lg:hidden w-full justify-between">
        <div class="flex items-center space-x-3">
            <div class="w-10 h-10 flex m items-center space-y-2 justify-center flex-col">
                <span class="bg-white w-[100%] h-[.5vh]"></span>
    
                <span class="bg-white w-full h-[.5vh]"></span>
    
    
                <span></span>
    
            </div>
            <img src="../assets/images/images/logo.svg" class="" alt="">
        </div>
        <div class="flex items-center ">
            <div class="h-full flex items-center ">
                <MagnifyingGlassIcon class="text-white w-4 h-4" />
    
            </div>
    
        </div>
    </div>
    
    <!-- <div class="bg-white">
            {{searchResult}}
        </div> -->
</template>

<script lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { defineComponent, ref } from '@vue/runtime-core'
import axios from 'axios'
import store from '../store'
// import env from ''
export default defineComponent({
    props: {
        search: {
            type: String,
            required:false
        }
    },
    components: { MagnifyingGlassIcon },

    setup(props,{emit}) {
        // const modelValue= ref("")
     
        const searchMusic = (value:any) => {
           emit('input', value)
        console.log(value);
        
    }


        // const search = ref < string > ("")
        // const searchResult = ref < [] > ([])
        // async function searchMusic(e: any) {
        //     //    store.dispatch('search')
        //     const config = {
        //         headers: {
        //             "X-RapidAPI-Key": "0c0167ae13msh3a8f6aadfb958bbp137e9djsn0e0867be8aa9",
        //             "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        //         },
        //     };
        //     if (e.key === "Enter") {
        //     try {
        //         await axios
        //             .get(`https://spotify23.p.rapidapi.com/search/?q=${props.modelValue}&type=albums`, config)
        //             .then((res) => res.data.albums.items)
        //             .then(setResults)
        //         // .then((res) => console.log(res.albums.items));
        //     } catch (error: any) {
        //         console.log(error);
        //     }
        //     }
        // }

        // function setResults(result: []) {
        //     se.value.searchResult = result;
        //     // console.log(se.value.searchResult);
            
        // }
  
        return {
            // search,
            searchMusic,
            // modelValue
        }
    }

})
</script>

<style scoped>

</style>