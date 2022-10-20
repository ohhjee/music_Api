<template>
    <div>
        <Nav></Nav>
        <div class="lg:flex lg:space-x-3 mt-3 lg:mt-0">
            <Side></Side>
    
            <div class="w-full relative hidden lg:flex">
    
                <div class="w-full space-y-4 h-full ">
                    <div class="text-[20px] font-bold text-white">
                        Top Charts
                    </div>
                    {{getSong.description   }}

                    <div class="space-y-4">
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-sm ">
                            <div class="flex justify-between items-center">
                                <div class="flex">
                                    <div class="h-20 w-5/12">
                                        <!-- {{songs}} -->
                                        <img :src="getSong.images[0].url" class="h-full full" alt="">
                <!-- console.log(getSong.value.items[0].track.album.external_urls.spotify); -->

                                        <!-- {{song.images}} -->
                                    </div>
    
                                    <div class="ml-3 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            {{getSong.name}}
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                                                       <!-- {{song.artist}} -->
                                                                    </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                                         <!-- {{song.timer}} -->
                            
                                                                        </small>
                                        </div>
                                    </div>
                                </div>
                                <div id="like">
                                    <div class="">
                                        <button @click="play(getSong)" v-if="!isPlaying" class="h-7 w-7 rounded-full bg-[blue] overflow-hidden flex items-center justify-center ">
                                                                    <i
                                                                        class="fa-solid fa-play text-white flex items-center justify-center w-full"></i>
                                                                </button>
                                        <div @click="pause()" v-else class="h-7 w-7 rounded-full bg-[blue] overflow-hidden flex items-center justify-center ">
                                            <!-- <i class="fa-solid fa-play text-white flex items-center justify-center w-full"></i> -->
                                            <i class="fa-solid fa-pause text-white flex items-center justify-center w-full"></i>
                                        </div>
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
                    <div class="text-[20px] font-bold text-white">
                        Top Charts
                    </div>
                    <div class="space-y-4">
                        <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-sm " v-for="song in songs" :key="song.id">
                            <div class="flex justify-between items-center">
                                <div class="flex">
                                    <div class="h-16 w-16 bg-red-500"></div>
    
                                    <div class="ml-3 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            {{song.title}}
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                                                       {{song.artist}}
                                                                    </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                                         {{song.timer}}
                            
                                                                        </small>
                                        </div>
                                    </div>
                                </div>
                                <div id="like">
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
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
            <div class="w-full sm:hidden space-y-4 h-full ">
                <div class="text-[20px] font-bold text-white">
                    Top Charts
                </div>
                <div class="owl-carousel owl-theme block w-full z-[0] space-y-4 playlist" id="carousel">
                    <!-- {{idk}} -->
                    <keep-alive>
    
                        <!-- {{options}} -->
                    </keep-alive>
                    <div v-for="idks in idk" :key="idks.id">
                    </div>
                    <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-sm w-full" v-for="song in songs" :key="song.id">
                        <div class="w-full">
                            <div class="flex items-center justify-between w-full">
                                <div class="flex">
                                    <div class="h-16 w-16 bg-red-500"></div>
    
                                    <div class="ml-3 leading-[20px]">
                                        <div class="text-white text-[17px] font-light">
                                            {{song.title}}
                                        </div>
                                        <small class="text-gray-300 text-[12px]">
                                                                       {{song.artist}}
                                                                    </small>
                                        <div>
                                            <small class="text-white text-[12px]">
                                                                         {{song.timer}}
                            
                                                                        </small>
                                        </div>
                                    </div>
                                </div>
                                <div id="like">
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
    
        <PlayFunction :currentSong="currentSong" :isPlaying="isPlaying" :play="play" :pause="pause" :volume="volume" :unMut="unMute" :control="control" :muted="muted" :times="times" />
    </div>
</template>

<script lang="ts">
import 'jquery';
import { defineComponent, ref, onMounted, computed } from 'vue';
import Nav from '../components/Nav.vue';
import Side from '../components/Side.vue';
import { HeartIcon, ArrowPathRoundedSquareIcon } from '@heroicons/vue/24/outline'
import { Song } from '../model';
import store from '../store'
import PlayFunction from '../components/PlayFunction.vue';
import axios from 'axios'

export default defineComponent({
    props: ['searchResult'],
    components: {
        Nav,
        Side,
        HeartIcon,
        PlayFunction
    },
    setup() {
        // store.commit('music')
        const idk = computed(() => store.state.songs.data)
        console.log(idk);



        //  async function searchMusic(e: any) {
        //             //    store.dispatch('search')
        //             const config = {
        //                 headers: {
        //                     "X-RapidAPI-Key": "0c0167ae13msh3a8f6aadfb958bbp137e9djsn0e0867be8aa9",
        //                     "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        //                 },
        //             };
        //             // if (e.key === "Enter") {
        //             try {
        //                 await axios
        //                     .get(`https://spotify23.p.rapidapi.com/playlist/?id=37i9dQZF1DX4Wsb4d7NKfP`, config)
        //                     .then((res) => res.data)
        //                     // .then(setResults)
        //                 // .then((res) => console.log(res.albums.items));
        //             } catch (error: any) {
        //                 console.log(error);
        //             }
        //             // }
        //         }
     
        const getSong = ref < [] > ([])
       

        const getMusic = async () => {
            const config = {
                headers: {
                    "X-RapidAPI-Key": "0c0167ae13msh3a8f6aadfb958bbp137e9djsn0e0867be8aa9",
                    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
                },
            };
            try {
                const res = await axios
                    .get(`https://spotify23.p.rapidapi.com/playlist/?id=37i9dQZF1DX4Wsb4d7NKfP`, config)
                // .then((res) => res.data)
                getSong.value = res.data
         
                console.log(getSong.value)
            } catch (error: any) {
                console.log(error);
            }
        }
        // setInterval(() => {
        getMusic()
        // },1000)

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
                images: new URL('../assets/images/images/poster/Asake_peace.jpg',
                    import.meta.url).href,
                src: new URL('../assets/audio/Asake-Peace-Be-Unto-You-PBUY.mp3',
                    import.meta.url).href
            },
            {
                id: Math.floor(Math.random() * (999999999 - 999 + 1)) + 999,
                title: 'Buga',
                artist: 'kiss dan',
                timer: "02:95",
                images: new URL('../assets/images/images/poster/Screenshot_20220505-140025.webp',
                    import.meta.url).href,

                src: new URL('../assets/audio/Kizz-Daniel-Buga-ft-Tekno-(JustNaija.com).mp3',
                    import.meta.url).href
            },
            {
                id: Math.floor(Math.random() * (999999999 - 999 + 1)) + 999,
                title: 'Back in uni',
                artist: 'BlaqBonez',
                timer: "02:36",
                images: new URL('../assets/images/images/poster/Blaqbonez-–-Back-In-Uni-Ft.-Jae5-2.webp',
                    import.meta.url).href,

                src: new URL('../assets/audio/Blaqbonez-Back-In-Uni.mp3',
                    import.meta.url).href
            },
            {
                id: Math.floor(Math.random() * (999999999 - 999 + 1)) + 999,
                title: 'Terminator',
                artist: 'Asake',
                timer: "02:35",
                images: new URL('../assets/images/images/poster/ab67616d0000b27358d5befffbc13092c8d43c5e.jpeg',
                    import.meta.url).href,
                src: new URL('../assets/audio/Asake-Terminator-file-1-(JustNaija.com).mp3',
                    import.meta.url).href
            }

        ])

        const search = ref < string > ("")
        const searchResult = ref < [] > ([])

        const muted = ref < boolean > (false)
        const isPlaying = ref < boolean > (false)
        const shuffles = ref([])
        const index = ref(0)
        const times = ref < string | number | null > (0)
        const duratiin = ref < string | number | null > (0)

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
            player.value.addEventListener('timeupdate', function() {
                times.value = player.value.currentTime.toFixed()
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
        // async function searchMusic(e: any) {
        //                const config = {
        //             headers: {
        //               "X-RapidAPI-Key": "0c0167ae13msh3a8f6aadfb958bbp137e9djsn0e0867be8aa9",
        //               "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        //             },
        //           };
        //           if (e.key === "Enter") {
        //             try {
        //                 await axios
        //                     .get(`https://spotify23.p.rapidapi.com/search/?q=${search.value}&type=albums`, config)
        //                     .then((res) => res.data.albums.items)
        //                     .then(setResults)
        //                     // .then((res) => console.log(res.albums.items));
        //             } catch (error: any) {
        //               console.log(error.response);
        //             }
        //           }
        //            }

        //     function setResults(result: []) {
        //       searchResult.value = result;
        //       console.log(search.value);
        //     }
        return {
            idk,
            // searchMusic,
            search,
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
            getSong
        }
    }
})
</script>



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