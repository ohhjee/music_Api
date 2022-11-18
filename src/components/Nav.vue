<template>
    <div class="hidden lg:flex my-2 space-x-6">
        <div>
            <img src="../assets/images/images/logo.svg" class="" alt="">
        </div>
        <div class="flex items-center">
            <div class="h-full flex items-center absolute">
                <MagnifyingGlassIcon class="text-white w-4 h-4" />
            </div>
            <Search></Search>
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
        <div class="flex items-center">
            <div class="h-full flex items-center ">
                <MagnifyingGlassIcon class="text-white w-4 h-4 cursor-pointer" @click="Mobilesearch()" />
            </div>
        </div>
    </div>
    <div class="lg:hidden  fixed w-full z-[20] left-0 top-0 min-h-screen" id="searchId" >
        <div class="flex w-full  justify-center min-h-screen">
            <div class="w-11/12">
<div class="flex items-center justify-between  w-full">
    <div class="cursor-pointer mr-3" @click="hidSearchBar()">
        <XMarkIcon class="w-8 h-8 mt-[10px] text-white flex items-center"></XMarkIcon>
    </div>
        <Search class="z-[30]"></Search>
</div>
            </div>
    </div>
    </div>

    <!-- <div class="bg-white">
            {{searchResult}}
        </div> -->
</template>

<script lang="ts">
import { MagnifyingGlassIcon,XMarkIcon } from '@heroicons/vue/24/outline'
import { defineComponent, ref } from '@vue/runtime-core'
import Search from './app/Seach.vue';
import axios from 'axios'
import store from '../store'
// import env from ''
export default defineComponent({

    components: { MagnifyingGlassIcon,XMarkIcon, Search },

    setup() {
        const Mobilesearch = () => {
            document.getElementById("searchId")?.classList.add("show")
        }
        const hidSearchBar = () => {
            document.getElementById("searchId")?.classList.remove("show") 
            console.log("remove");
        }
        return {
            Mobilesearch,
            hidSearchBar
        }
    }

})
</script>

<style scoped lang="scss">
#searchId{
    opacity: 0;
    transition: 200ms ease-in;
    pointer-events: none;
}

.show{
    pointer-events: all !important;
    opacity: 1 !important;
    background-color: rgb(0 0 0 / 0.6);
}
</style>