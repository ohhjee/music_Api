<template>
    <div>
        <Nav></Nav>
        <div class="lg:flex lg:space-x-3 mt-3 lg:mt-0">
            <Side></Side>
    
            <div class="w-full relative hidden lg:flex">
                <div class=" w-full lg:w-8/12 xl:w-7/12 bg-blue-300/40 lg:bg-blue-300/90 h-full rounded-[35px]">
                    <div class="text absolute w-full flex flex-col items-start justify-center lg:block lg:w-1/2 h-full space-y-3 p-[2rem] z-10">
                        <div id="current" class="text-[14px] text-white">
                            Current playlist
                        </div>
                        <div>
                            <div class="w-full lg:w-2/3">
                                <div class="text-[40px] text-white">
                                    R & B Hits
                                </div>
                                <small class="text-white w-2/4">
                                                All mine, Lie again, petty call everyday. <br>
                                                Out of time, No love, Bad habit, <br>
                                                and so much more
                                            </small>
                                <div class="mt-5">
                                    <div class="flex -space-x-1 overflow-hidden">
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute w-full lg:w-8/12 xl:w-7/12 h-full">
                        <div class="bg-[url('../../assets/images/images/Vector.svg')] overflow-hidden rounded-[35px] h-full bg-no-repeat absolute top-0 left-0 bottom-0 w-full bg-right-top right-0">
                        </div>
    
                        <div class="bg-[url('../../assets/images/images/singer.png')] h-full bg-no-repeat bottom-0 left-0 top-0 bg-right-top right-0 absolute w-full">
                        </div>
                    </div>
                </div>
                <div class="sm:w-full lg:w-4/12 xl:w-5/12 lg:pl-5 space-y-4 h-full ">
                  <router-link :to="{name: 'TopChart'}" class="text-[20px] font-bold text-white">
                        Top Charts
                    </router-link>
                    <div>
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-sm">
                            <div class="flex justify-between items-center">
                                <div class="flex">
                                    <div class="h-16 w-16 bg-red-500"></div>
    
                                    <div class="ml-3 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            Golden age of 80s
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                                        sean swadder
                                                    </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                            2:34:45
            
                                                        </small>
                                        </div>
                                    </div>
                                </div>
                                <div id="like">
                                    <div class="h-10 w-10 rounded-full border flex items-center justify-center">
                                        <HeartIcon class="w-5 h-5 text-[blue]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-sm">
                            <div class="flex justify-between items-center">
                                <div class="flex">
                                    <div class="h-16 w-16 bg-red-500"></div>
    
                                    <div class="ml-3 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            Golden age of 80s
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                                        sean swadder
                                                    </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                            2:34:45
                                                        </small>
                                        </div>
                                    </div>
                                </div>
                                <div id="like">
                                    <div class="h-10 w-10 rounded-full border flex items-center justify-center">
                                        <HeartIcon class="w-5 h-5 text-[blue]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-sm">
                            <div class="flex justify-between items-center">
                                <div class="flex">
                                    <div class="h-16 w-16 bg-red-500"></div>
                                    <div class="ml-3 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            Golden age of 80s
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                                        sean swadder
                                                    </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                            2:34:45
                                                        </small>
                                        </div>
                                    </div>
                                </div>
                                <div id="like">
                                    <div class="h-10 w-10 rounded-full border flex items-center justify-center">
                                        <HeartIcon class="w-5 h-5 text-[blue]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class=" sm:w-full  lg:hidden space-y-5 ">
                <div class=" w-full  bg-blue-300/40 relative lg:bg-blue-300/90  rounded-[35px]">
                    <div class="text relative w-full flex flex-col items-start justify-center lg:block h-full space-y-3 p-[2rem] z-10">
                        <div id="current" class="text-[14px] text-white">
                            Current playlist
                        </div>
                        <div>
                            <div class="w-full lg:w-2/3">
                                <div class="text-[40px] text-white">
                                    R & B Hits
                                </div>
                                <small class="text-white w-2/4">
                                                All mine, Lie again, petty call everyday. <br>
                                                Out of time, No love, Bad habit, <br>
                                                and so much more
                                            </small>
                                <div class="mt-5">
                                    <div class="flex -space-x-1 overflow-hidden">
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute top-0 w-full h-full">
                        <div class="bg-[url('../../assets/images/images/Vector.svg')] overflow-hidden rounded-[35px] h-full bg-no-repeat absolute top-0 left-0 bottom-0 w-full bg-right-top right-0">
                        </div>
                        <div class="bg-[url('../../assets/images/images/singer.png')] h-full bg-no-repeat bottom-0 left-0 top-0 bg-right-top right-0 absolute lg:w-8/12 xl:w-7/12">
                        </div>
                    </div>
                </div>
                <div class="w-full hidden sm:block  space-y-4 h-full ">
                    <router-link :to="{name: 'TopChart'}" class="text-[20px] font-bold text-white">
                        Top Charts
                    </router-link>
                    <div>
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-md">
                            <div class="flex justify-between sm:items-center">
                                <div class="flex flex-col sm:flex-row ">
                                    <div class="h-16 w-16 bg-red-500"></div>
                                    <div class=" mt-2 sm:mt-0 sm:ml-4 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            Golden age of 80s
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                                        sean swadder
                                                    </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                            2:34:45
                                                        </small>
                                        </div>
                                    </div>
                                </div>
                                <div id="like">
                                    <div class="h-10 w-10 rounded-full border flex items-center justify-center">
                                        <HeartIcon class="w-5 h-5 text-[blue]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-md">
                            <div class="flex justify-between sm:items-center">
                                <div class="flex flex-col sm:flex-row ">
                                    <div class="h-16 w-16 bg-red-500"></div>
                                    <div class=" mt-2 sm:mt-0 sm:ml-4 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            Golden age of 80s
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                                        sean swadder
                                                    </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                            2:34:45
            
                                                        </small>
                                        </div>
                                    </div>
                                </div>
                                <div id="like">
                                    <div class="h-10 w-10 rounded-full border flex items-center justify-center">
                                        <HeartIcon class="w-5 h-5 text-[blue]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-md">
                            <div class="flex justify-between sm:items-center">
                                <div class="flex flex-col sm:flex-row ">
                                    <div class="h-16 w-16 bg-red-500"></div>
    
                                    <div class=" mt-2 sm:mt-0 sm:ml-4 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            Golden age of 80s
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                                        sean swadder
                                                    </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                            2:34:45
            
                                                        </small>
                                        </div>
                                    </div>
                                </div>
                                <div id="like">
                                    <div class="h-10 w-10 rounded-full border flex items-center justify-center">
                                        <HeartIcon class="w-5 h-5 text-[blue]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full sm:hidden space-y-4 h-full ">
             <router-link :to="{name: 'TopChart'}" class="text-[20px] font-bold text-white">
                        Top Charts
                    </router-link>
                <div class="owl-carousel owl-theme block w-full z-[0] space-y-4 playlist" id="carousel">
                    <div class="w-full">
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-[30px]">
                            <div class="flex flex-col space-y-4 w-full justify-between items-center">
                                <div class="flex">
                                    <!-- <div class="h-16 w-16 bg-red-500"></div> -->
                                    <img src="../assets/images/images/Rectangle 14 (2).png" class="" alt="">
                                </div>
                                <div class="flex justify-between w-full items-center">
    
                                    <div class="ml-3 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            Golden age of 80s
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                                        sean swadder
                                                    </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                            2:34:45
            
                                                        </small>
                                        </div>
                                    </div>
                                    <div id="like">
                                        <div class="h-10 w-10 rounded-full border flex items-center justify-center">
                                            <HeartIcon class="w-5 h-5 text-[blue]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-[30px]">
                            <div class="flex flex-col space-y-4 w-full justify-between items-center">
                                <div class="flex">
                                    <!-- <div class="h-16 w-16 bg-red-500"></div> -->
                                    <img src="../assets/images/images/Rectangle 14 (2).png" class="" alt="">
                                </div>
                                <div class="flex justify-between w-full items-center">
    
                                    <div class="ml-3 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            Golden age of 80s
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                                        sean swadder
                                                    </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                            2:34:45
            
                                                        </small>
                                        </div>
                                    </div>
                                    <div id="like">
                                        <div class="h-10 w-10 rounded-full border flex items-center justify-center">
                                            <HeartIcon class="w-5 h-5 text-[blue]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-[30px]">
                            <div class="flex flex-col space-y-4 w-full justify-between items-center">
                                <div class="flex">
                                    <!-- <div class="h-16 w-16 bg-red-500"></div> -->
                                    <img src="../assets/images/images/Rectangle 14 (2).png" class="" alt="">
                                </div>
                                <div class="flex justify-between w-full items-center">
    
                                    <div class="ml-3 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            Golden age of 80s
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                                        sean swadder
                                                    </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                            2:34:45
            
                                                        </small>
                                        </div>
                                    </div>
                                    <div id="like">
                                        <div class="h-10 w-10 rounded-full border flex items-center justify-center">
                                            <HeartIcon class="w-5 h-5 text-[blue]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-10 mb-[8rem]">
            <div class="title">
                <div class="text-[20px] mb-4 text-white">
                    New Release.
                </div>
            </div>
            <div class="flex space-x-4 w-full">
                <div class="owl-carousel owl-theme block w-full z-[0] car" id="car">
                    <div class="w-2/4">
                        <img src="../assets/images/images/Rectangle_1.png" class="rounded-md w-full " alt="Sample 2">
                        <div class="text-[15px] text-center capitalize text-gray-300 mt-2">
                            life in a bubble
                        </div>
                    </div>
                    <div class="w-2/4">
                        <img src="../assets/images/images/Rectangle 14 (1).png" class="rounded-md w-full" alt="Sample 1">
                        <div class="text-[15px] text-center capitalize text-gray-300 mt-2">
                            Mountain
                        </div>
                    </div>
                    <div class="w-2/4">
                        <img src="../assets/images/images/Rectangle 14 (2).png" class="rounded-md w-full" alt="Sample 1">
                        <div class="text-[15px] text-center capitalize text-gray-300 mt-2">
                            limits
                        </div>
                    </div>
                    <div class="w-2/4">
                        <img src="../assets/images/images/Rectangle 14 (3).png" class="rounded-md w-full" alt="Sample 1">
                        <div class="text-[15px] text-center capitalize text-gray-300 mt-2">
                            everything black
                        </div>
                    </div>
                    <div class="w-2/4">
                        <img src="../assets/images/images/Rectangle 14 (4).png" class="rounded-md w-full" alt="Sample 1">
                        <div class="text-[15px] text-center capitalize text-gray-300 mt-2">
                            cancelled
                        </div>
                    </div>
                    <div class="w-2/4">
                        <img src="../assets/images/images/Rectangle 14 (5).png" class="rounded-md w-full" alt="Sample 1">
                        <div class="text-[15px] text-center capitalize text-gray-300 mt-2">
                            nomad
                        </div>
                    </div>
                    <div class="w-2/4">
                        <img src="../assets/images/images/Rectangle 14 (5).png" class="rounded-md w-full" alt="Sample 1">
                        <div class="text-[15px] text-center capitalize text-gray-300 mt-2">
                            nomad
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- play function -->
        <PlayFunction :play="play" :pause="pause" :control="control"></PlayFunction>
      
    </div>
</template>

<script lang="ts">
import 'jquery';
import { defineComponent, ref, onMounted } from 'vue';
import Nav from '../components/Nav.vue';
import Side from '../components/Side.vue';
import PlayFunction from '../components/PlayFunction.vue'
import { HeartIcon, ArrowPathRoundedSquareIcon } from '@heroicons/vue/24/outline'
import { Song } from '../model';

export default defineComponent({
    components: {
        Nav,
        Side,
        HeartIcon
    },

    setup() {
        $(document).ready(function() {
            $('.car').owlCarousel({
                loop: true,
                responsiveClass: true,
                center: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    640: {
                        items: 2
                    },
                    768: {
                        items: 3

                    },
                    1024: {
                        items: 4
                    }
                }
            });
            $('.playlist').owlCarousel({
                loop: true,
                responsiveClass: true,
                margin: 10,
                center: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    640: {
                        items: 2
                    },
                    768: {
                        items: 3

                    },
                    1024: {
                        items: 4
                    }
                }
            });

        });

          const songs = ref < Song[] > ([{
                id: Math.floor(Math.random() * (999999999 - 999 + 1)) + 999,
                title: 'Peace Be Unto You',
                artist: 'Asake',
            timer: " 02:33",
                images: new URL ('../assets/images/images/poster/Asake_peace.jpg', import.meta.url).href,
                src: new URL('../assets/audio/Asake-Peace-Be-Unto-You-PBUY.mp3',
                    import.meta.url).href
            },
            {
                id: Math.floor(Math.random() * (999999999 - 999 + 1)) + 999,
                title: 'Buga',
                artist: 'kiss dan',
                timer: "02:95",
                images: new URL ('../assets/images/images/poster/Screenshot_20220505-140025.webp', import.meta.url).href,

                src: new URL('../assets/audio/Kizz-Daniel-Buga-ft-Tekno-(JustNaija.com).mp3',
                    import.meta.url).href
            },
            {
                id: Math.floor(Math.random() * (999999999 - 999 + 1)) + 999,
                title: 'Back in uni',
                artist: 'BlaqBonez',
                timer: "02:36",
                images: new URL ('../assets/images/images/poster/Blaqbonez-–-Back-In-Uni-Ft.-Jae5-2.webp', import.meta.url).href,

                src: new URL('../assets/audio/Blaqbonez-Back-In-Uni.mp3',
                    import.meta.url).href
            },
            // {
            //     id: Math.floor(Math.random() * (999999999 - 999 + 1)) + 999,
            //     title: 'Terminator',
            //     artist: 'Asake',
            //     timer: "02:35",
            //     images: new URL('../assets/images/images/poster/ab67616d0000b27358d5befffbc13092c8d43c5e.jpeg', import.meta.url).href,
            //     src: new URL('../assets/audio/Asake-Terminator-file-1-(JustNaija.com).mp3',
            //         import.meta.url).href
            // }

        ])
        const muted = ref < boolean > (false)
        const isPlaying = ref < boolean > (false)
        const shuffles = ref([])
        const index = ref(0)
        const times = ref<string | number | null>(0)
        const duratiin=ref<string| number| null>(0)
        
        const currentSong = ref < Song | null > (null)
        const player = ref(new Audio())

        onMounted(() => {
            setMedia();
        })

        const setMedia = (music ? : Song) => {
            const newSong = music ? music : songs.value[index.value];

            currentSong.value = newSong
            player.value.src = newSong.src
        }

        const volume = () => {
            player.value.muted = true
            muted.value = true
        }

        const play = () => {
            isPlaying.value = false

            if (currentSong.value == null) setMedia()

            player.value.play()
            player.value.addEventListener('timeupdate', function () {
    times.value=player.value.currentTime.toFixed()
})
            player.value.addEventListener('ended', function() {
                index.value += 1

                if (index.value > songs.value.length - 1) index.value = 0;

                setMedia(songs.value[index.value])
                player.value.play()
            })

            isPlaying.value = true
        }

        const pause = () => {
            player.value.pause()
            isPlaying.value = false
        }

        const unMute = () => {
            player.value.muted = false
            muted.value = false
        }

        const control = (type: "next" | "prev") => {
            let SongIndex = 0

            if (type === "next") {
                index.value += 1
                SongIndex = index.value < songs.value.length ? index.value : 0
            };

            if (type === "prev") {
                index.value -= 1
                SongIndex = index.value > 0 ? index.value : 0
            };

            setMedia(songs.value[SongIndex])
            play()
        }

        return {
            muted,
            isPlaying,
            songs,
            currentSong,
            times,
            Side,
            Nav,
            volume,
            play,
            pause,
            unMute,
            control,
            PlayFunction
        }
    }
})
</script>

<!--<script setup lang="ts">

</script>-->
<!-- 
<script setup lang="ts">
import 'jquery'
import { SplideSlide } from '@splidejs/vue-splide';
import { HeartIcon, ArrowPathRoundedSquareIcon } from '@heroicons/vue/24/outline'
import Nav from '../components/Nav.vue';
import Side from '../components/Side.vue';
import { ref, onMounted } from 'vue'

$(document).ready(function() {
    $('.car').owlCarousel({
        loop: true,
        responsiveClass: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            768: {
                items: 3

            },
            1024: {
                items: 4
            }
        }
    });
    $('.playlist').owlCarousel({
        loop: true,
        responsiveClass: true,
        margin: 10,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            768: {
                items: 3

            },
            1024: {
                items: 4
            }
        }
    });

});

const muted = ref < boolean > (false)
const isPlaying = ref < boolean > (false)
const current = ref < { title: string, artist: string, src: any } > ({
    title: "",
    artist: "",
    src: ""
})
const index = ref(0)
const shuffles = ref([])
const song = ref < { title: string, artist: string, src: any }[] > ([{
        title: 'Peace Be Unto You',
        artist: 'Asake',
        src: new URL('../assets/audio/Asake-Peace-Be-Unto-You-PBUY.mp3',
            import.meta.url).href
    },
    {
        title: 'Buga',
        artist: 'kiss dan',
        src: new URL('../assets/audio/Kizz-Daniel-Buga-ft-Tekno-(JustNaija.com).mp3',
            import.meta.url).href
    },
    {
        title: 'Back in uni',
        artist: 'BlaqBonez',
        src: new URL('../assets/audio/Blaqbonez-Back-In-Uni.mp3',
            import.meta.url).href
    },
    {
        title: 'Terminator',
        artist: 'Asake',
        src: new URL('../assets/audio/Asake-Terminator-file-1-(JustNaija.com).mp3',
            import.meta.url).href
    }
])

const player = ref(new Audio())

current.value = song.value[index.value]
player.value.src = current.value.src

function volume() {
    player.value.muted = true
    muted.value = true
}

function unmute() {
    player.value.muted = false
    muted.value = false

}

// function shuffle() {
//     const numb = Math.floor(Math.random() * song.value.length)

//     current.value = song.value[numb]

//     shuffles.value.unshift({ text: song.value.src })

//     isPlaying.value = true

//     player.value.addEventListener('ended', () => {
//         index.value += 1

//         if (index.value > song.value.length - 1) {
//             index.value = 0
//         }
//         current.value = song.value[index.value]
//         plays(current.value)
//     })
//     plays(current.value)

// }

function plays() {
    console.log('songs')
    // if (typeof songs.src !== "undefined") {
    //     current.value = songs;
    //     player.value.src = current.value?.src
    // }
    // player.value.play()
    // player.value.addEventListener('ended', function () {
    //     index.value += 1
    //     if (index.value > song.value.length - 1) {
    //         index.value = 0
    //     }
    //     current.value = song.value[index.value]
    //     plays(current.value)
    // })
    // isPlaying.value = true
}

function pause() {
    player.value.pause()
    isPlaying.value = false
}

function next() {
    index.value++
        if (index.value > song.value.length - 1) {
            index.value = 0
        }
    current.value = song.value[index.value]
    // plays(current.value)
}

function prev() {
    index.value -= 1
    if (index.value < 0) {
        index.value = song.value.length - 1
    }
    current.value = song.value[index.value]
    // plays(current.value)

}
</script>-->

<style lang="scss">
.owl-carousel {
    .owl-stage-outer {
        .owl-stage {
            display: flex !important;
            .owl-item {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
}
</style>