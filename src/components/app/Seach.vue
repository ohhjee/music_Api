<template>
    <div>
        <form @submit.prevent="searchMusic()" class="mt-[10px]">
            <div>
                <input type="text" v-model="search" class="px-6 py-2 w-full rounded-md lg:rounded-none text-black lg:text-gray-200 focus:outline-none lg:focus-visible:outline-none  lg:bg-transparent"
                    placeholder="Search Artist">
            </div>
        </form>


<div v-if="search" class="bg-gray-800 lg:h-[40vh] lg:w-[40vw] h-[80vh]  scrollbar-thin w-11/12 absolute z-[40]  p-4" id="show">
    <router-link to="#" v-for="output in searchOutput" :key="output"  class="">
        <!-- Image -->
        <div class="flex items-center ">
            <div>
                <img :src="output.images.coverart" class="w-10 h-10" @click="play()" alt="">
            </div>
            <div class="ml-6">
                <div class="text-white">
                    {{output.subtitle}}
                </div>
                <div class="text-[12px] text-gray-300">
                    {{output.title}}
                </div>
            </div>
        </div>
        <hr class="my-3">
    </router-link>
</div>

    </div>

</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import axios from 'axios';
import { arrayToMap } from '../../util/arrayToMap';


export default defineComponent({
    name: "Search",
    setup(props) {
        const search = ref();
        const searchOutput = ref()
        const show = ref(document.querySelector("#show") as HTMLElement) as any
        const audio = ref(new Audio())
        const player =ref()
        onMounted(() => { });

      async function searchMusic() {
            const config = {
                headers: {
                    "X-RapidAPI-Key": "5cacc090e1msh85573da32b12038p1e45a7jsnefe71fbf3f8f",
                    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
                },
            };
            
            try {
               const res = await axios
                    .get(`https://shazam-core.p.rapidapi.com/v1/search/multi?query=${search.value}&search_type=SONGS_ARTISTS`, config)
                    .then((res) => res.data)
                    
              
                const result = res.tracks
                const searchMap = result.hits
                const mappingSongs = searchMap.map((res: any) => res.track)
                searchOutput.value = mappingSongs
              const  playfunc= mappingSongs.map((plays:any)=>plays.hub.providers[0].actions[0].uri)
              player.value = playfunc
                console.log(player.value);
                
            } catch (error: any) {
                console.log(error);
            }
            
      }
        const loadSearchedSong = () => {
        
            audio.value.src = player.value
      }
        const play = () => {
            loadSearchedSong()
            audio.value.play()
        }

        return {
            search, 
            searchOutput,
            play,
            searchMusic
        }
    }

})

</script>
<style lang="scss" >
#show{
transform: translate(-17%,10px);
}
</style>