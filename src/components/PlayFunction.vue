<template>
  <div class="w-full bg-black/20  backdrop-blur-md px-5 py-[10px] fixed left-0 bottom-0">
            <div class="absolute w-full h-full top-0 left-0 bottom-0 -z-10 right-0">
                <div class="bg-[url('../../assets/images/images/Rectangle 14 (1).png')] w-full h-full blur-sm bg-no-repeat">
                </div>
            </div>
            <div class="flex items-center justify-between  lg:container lg:mx-auto">
                <div class="w-2/12 md:w-1/12">
                    <!-- <div class=""></div> -->
                    <img src="../assets/images/images/Rectangle 14 (1).png" class="h-[50%] w-[50%]" alt="">
                </div>
                <div class="w-8/12 mx-auto ">
    
                    <!-- MUSIC CONTROLLER -->
                    <div class="items-center flex flex-col space-y-[.5rem] justify-center">
    
                        <div id="Music_controller" class="flex space-x-[2rem] items-center">
    
                            <div class="flex flex-row items-center space-x-[2rem]">
                                <!-- SHUFFLE -->
                                <div class="hidden sm:block">
                                    <!-- @click="shuffle" -->
                                    <div>
                                        <i class="fa-solid fa-shuffle text-white"></i>
                                    </div>
                                </div>
                                <!-- PREV -->
                                <div class="hidden sm:flex border rounded-full h-7 w-7 items-center justify-center" @click="control('prev')">
                                    <i class="fa-solid fa-backward-step text-white  flex items-center justify-center"></i>
                                </div>
                                <!-- PLAY -->
                                <div class="">
                                    <button @click="play()" v-if="!isPlaying" class="h-7 w-7 rounded-full bg-[blue] overflow-hidden flex items-center justify-center ">
                                                    <i
                                                        class="fa-solid fa-play text-white flex items-center justify-center w-full"></i>
                                                </button>
                                    <div @click="pause()" v-else class="h-7 w-7 rounded-full bg-[blue] overflow-hidden flex items-center justify-center ">
                                        <!-- <i class="fa-solid fa-play text-white flex items-center justify-center w-full"></i> -->
                                        <i class="fa-solid fa-pause text-white flex items-center justify-center w-full"></i>
                                    </div>
                                </div>
                                <!-- NEXT -->
                                <div>
                                    <div @click="control('next')" class="h-7 w-7 border rounded-full flex items-center justify-center">
                                        <i class="fa-solid fa-forward-step text-white flex items-center justify-center"></i>
                                    </div>
                                </div>
                                <!-- REPEAT -->
                                <div class="hidden sm:block">
                                    <div>
                                        <i class="fa-solid fa-repeat text-white"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-white text-[14px]">
                            {{currentSong?.title}} - {{currentSong?.artist}}
                        </div>
                        <!-- TIMER -->
                        <div class="w-full hidden sm:block">
                            {{times}}
                            <div class="relative">
                                <div class="border w-full h-[2px] relative"></div>
                                <div class="absolute top-0 left-0 w-full">
                                    <div class="bg-[blue] w-7/12 h-[2px]"></div>
                                </div>
                            </div>
                            <div class="h-6 w-6 flex items-center justify-center absolute top-[90px]  left-[61%]  md:top-[85px] xl:top-[6px] md:left-1/2 bg-white/20 rounded-full">
                                <div class="h-3 w-3 bg-white rounded-full flex items-center justify-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="w-2/12 hidden md:block h-[84.34px]">
                    <div class="flex items-center  justify-center space-x-2">
                        <div class=" w-4/12 md:w-3/12 lg:w-2/12">
                            <div class="" @click="volume()" v-if="!muted">
                                <i class="fa-solid fa-volume-high text-white"></i>
    
                            </div>
                            <div v-else @click="unMute()">
                                <i class="fa-solid fa-volume-xmark  text-white"></i>
                            </div>
                        </div>
                        <!-- <div class="w-full">
                                               <div class="relative">
                                                 <div class="border w-full h-[2px] relative"></div>
                                                <div class="absolute top-0 left-0 w-full">
                                                    <div class="bg-[blue] w-7/12 h-[2px]"></div>
                                                </div>
                                               </div>
                                                <div class="h-6 w-6 flex items-center justify-center absolute top-[37px] right-1/2 bg-white/20 rounded-full">
                                                    <div class="h-3 w-3 bg-white rounded-full flex items-center justify-center"></div>
                                                </div>
                                            </div> -->
                    </div>
                </div>
            </div>
        </div>
   
</template>

<script lang="ts">
import 'jquery';
import { defineComponent, ref, onMounted } from 'vue';
import { Song } from '../model';

export default defineComponent({
    components: {
        // Nav,
        // Side,
        // HeartIcon
    },
//     props: {
//         currentSong: Array,
//     play
// },
props:['currentSong', 'play', 'isPlaying', 'pause', 'volume', 'unMute', 'control', 'muted', 'times' ],
    setup() {
       
        // const songs = ref < Song[] > ([{
        //         id: Math.floor(Math.random() * (999999999 - 999 + 1)) + 999,
        //         title: 'Peace Be Unto You',
        //         artist: 'Asake',
        //         timer: " 02:33",
        //         src: new URL('../assets/audio/Asake-Peace-Be-Unto-You-PBUY.mp3',
        //             import.meta.url).href
        //     },
        //     {
        //         id: Math.floor(Math.random() * (999999999 - 999 + 1)) + 999,
        //         title: 'Buga',
        //         artist: 'kiss dan',
        //         timer: "02:95",
        //         src: new URL('../assets/audio/Kizz-Daniel-Buga-ft-Tekno-(JustNaija.com).mp3',
        //             import.meta.url).href
        //     },
        //     {
        //         id: Math.floor(Math.random() * (999999999 - 999 + 1)) + 999,
        //         title: 'Back in uni',
        //         artist: 'BlaqBonez',
        //         timer: "02:36",
        //         src: new URL('../assets/audio/Blaqbonez-Back-In-Uni.mp3',
        //             import.meta.url).href
        //     },
        //     {
        //         id: Math.floor(Math.random() * (999999999 - 999 + 1)) + 999,
        //         title: 'Terminator',
        //         artist: 'Asake',
        //         timer: "02:35",
        //         src: new URL('../assets/audio/Asake-Terminator-file-1-(JustNaija.com).mp3',
        //             import.meta.url).href
        //     }

        // ])

//         const muted = ref < boolean > (false)
//         const isPlaying = ref < boolean > (false)
//         const shuffles = ref([])
//         const index = ref(0)
//         const times = ref<string | number | null>(0)
//         const duratiin=ref<string| number| null>(0)
        
//         const currentSong = ref < Song | null > (null)
//         const player = ref(new Audio())

//         onMounted(() => {
//             setMedia();
//         })

//         const setMedia = (music ? : Song) => {
//             const newSong = music ? music : songs.value[index.value];

//             currentSong.value = newSong
//             player.value.src = newSong.src
//         }

//         const volume = () => {
//             player.value.muted = true
//             muted.value = true
//         }

//         const play = () => {
//             isPlaying.value = false

//             if (currentSong.value == null) setMedia()

//             player.value.play()
//             player.value.addEventListener('timeupdate', function () {
//     times.value=player.value.currentTime.toFixed()
// })
//             player.value.addEventListener('ended', function() {
//                 index.value += 1

//                 if (index.value > songs.value.length - 1) index.value = 0;

//                 setMedia(songs.value[index.value])
//                 player.value.play()
//             })

//             isPlaying.value = true
//         }

//         const pause = () => {
//             player.value.pause()
//             isPlaying.value = false
//         }

//         const unMute = () => {
//             player.value.muted = false
//             muted.value = false
//         }

//         const control = (type: "next" | "prev") => {
//             let SongIndex = 0

//             if (type === "next") {
//                 index.value += 1
//                 SongIndex = index.value < songs.value.length ? index.value : 0
//             };

//             if (type === "prev") {
//                 index.value -= 1
//                 SongIndex = index.value > 0 ? index.value : 0
//             };

//             setMedia(songs.value[SongIndex])
//             play()
//         }

//         return {
//             muted,
//             isPlaying,
//             songs,
//             currentSong,
//             times,
//             Side,
//             Nav,
//             volume,
//             play,
//             pause,
//             unMute,
//             control,
//         }
    }
})
</script>


<style scoped>

</style>