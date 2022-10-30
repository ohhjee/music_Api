<template>
  <div>
    <Nav></Nav>
    <div class="lg:flex lg:space-x-3 mt-3 lg:mt-0">
      <Side></Side>

      <div class="w-full relative hidden lg:flex">
        <div class="w-full space-y-4 h-full ml-[4rem]">
          <div class="text-[20px] font-bold text-white">Top Charts</div>
          <!-- {{getSong.description }} -->
          <!-- {{ rep }} -->

          <div class="space-y-4" v-for="song in SongData" :key="song.id">
            <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-sm">
              <div class="flex justify-between items-center">
                <div class="flex">
                  <div class="h-20 w-5/12"></div>

                  <div class="ml-3 leading-[20px]">
                    <div class="text-white text-[17px] font-light">
                      {{ song.artists[0].name }}
                    </div>
                    <small class="text-gray-300 text-[12px]">
                      {{ song.name }}
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
                    <div id="audio" @click="play()" v-if="!isPlaying"
                      class="h-7 w-7 rounded-full bg-[blue] overflow-hidden flex items-center justify-center">
                      <i class="fa-solid fa-play text-white flex items-center justify-center w-full"></i>
                    </div>
                    <div @click="pause()" v-else
                      class="h-7 w-7 rounded-full bg-[blue] overflow-hidden flex items-center justify-center">
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

      <div class="sm:w-full lg:hidden space-y-5">
        <div class="w-full bg-blue-300/40 relative lg:bg-blue-300/90 rounded-[35px]">
          <div
            class="text relative w-full flex flex-col items-start justify-center lg:block h-full space-y-3 p-[2rem] z-10">
            <div id="current" class="text-[14px] text-white">Current playlist</div>
            <div>
              <div class="w-full lg:w-2/3">
                <div class="text-[40px] text-white">R & B Hits</div>
                <small class="text-white w-2/4">
                  All mine, Lie again, petty call everyday. <br />
                  Out of time, No love, Bad habit, <br />
                  and so much more
                </small>
                <div class="mt-5">
                  <div class="flex -space-x-1 overflow-hidden">
                    <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="" />
                    <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="" />
                    <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      alt="" />
                    <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute top-0 w-full h-full">
            <div
              class="bg-[url('../../assets/images/images/Vector.svg')] overflow-hidden rounded-[35px] h-full bg-no-repeat absolute top-0 left-0 bottom-0 w-full bg-right-top right-0">
            </div>
            <div
              class="bg-[url('../../assets/images/images/singer.png')] h-full bg-no-repeat bottom-0 left-0 top-0 bg-right-top right-0 absolute lg:w-8/12 xl:w-7/12">
            </div>
          </div>
        </div>
        <div class="w-full hidden sm:block space-y-4 h-full">
          <div class="text-[20px] font-bold text-white">Top Charts</div>
          <div class="space-y-4">
            <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-sm">
              <div class="flex justify-between items-center">
                <div class="flex">
                  <div class="h-16 w-16 bg-red-500"></div>

                  <div class="ml-3 leading-[20px]">
                    <div class="text-white text-[17px] font-light">
                      <!-- {{song.title}} -->
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
                    <button @click="play()" v-if="!isPlaying"
                      class="h-7 w-7 rounded-full bg-[blue] overflow-hidden flex items-center justify-center">
                      <i class="fa-solid fa-play text-white flex items-center justify-center w-full"></i>
                    </button>
                    <div @click="pause()" v-else
                      class="h-7 w-7 rounded-full bg-[blue] overflow-hidden flex items-center justify-center">
                      <i class="fa-solid fa-pause text-white flex items-center justify-center w-full"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full sm:hidden space-y-4 h-full">
        <div class="text-[20px] font-bold text-white">Top Charts</div>
        <div class="owl-carousel owl-theme block w-full z-[0] space-y-4 playlist" id="carousel">
          <keep-alive> </keep-alive>
          <div v-for="idks in idk" :key="idks.id"></div>
          <div class="p-3 bg-[rgba(0,0,0,.5)] rounded-sm w-full">
            <div class="w-full">
              <div class="flex items-center justify-between w-full">
                <div class="flex">
                  <div class="h-16 w-16 bg-red-500"></div>

                  <div class="ml-3 leading-[20px]">
                    <div class="text-white text-[17px] font-light">
                      <!-- {{ song.title }} -->
                    </div>
                    <small class="text-gray-300 text-[12px]">
                      <!-- {{ song.artist }} -->
                    </small>
                    <div>
                      <small class="text-white text-[12px]">
                        <!-- {{ song.timer }} -->
                      </small>
                    </div>
                  </div>
                </div>
                <div id="like">
                  <div class="">
                    <button @click="play()" v-if="!isPlaying"
                      class="h-7 w-7 rounded-full bg-[blue] overflow-hidden flex items-center justify-center">
                      <i class="fa-solid fa-play text-white flex items-center justify-center w-full"></i>
                    </button>
                    <div @click="pause()" v-else
                      class="h-7 w-7 rounded-full bg-[blue] overflow-hidden flex items-center justify-center">
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
        <div class="text-[20px] mb-4 text-white">New Release.</div>
      </div>
      <div class="flex space-x-4 w-full">
        <div class="owl-carousel owl-theme block w-full z-[0] car" id="car">
          <div class="w-2/4">
            <img src="../assets/images/images/Rectangle_1.png" class="rounded-md w-full" alt="Sample 2" />
            <div class="text-[15px] text-center capitalize text-gray-300 mt-2">
              life in a bubble
            </div>
          </div>
          <div class="w-2/4">
            <img src="../assets/images/images/Rectangle 14 (1).png" class="rounded-md w-full" alt="Sample 1" />
            <div class="text-[15px] text-center capitalize text-gray-300 mt-2">
              Mountain
            </div>
          </div>
          <div class="w-2/4">
            <img src="../assets/images/images/Rectangle 14 (2).png" class="rounded-md w-full" alt="Sample 1" />
            <div class="text-[15px] text-center capitalize text-gray-300 mt-2">
              limits
            </div>
          </div>
          <div class="w-2/4">
            <img src="../assets/images/images/Rectangle 14 (3).png" class="rounded-md w-full" alt="Sample 1" />
            <div class="text-[15px] text-center capitalize text-gray-300 mt-2">
              everything black
            </div>
          </div>
          <div class="w-2/4">
            <img src="../assets/images/images/Rectangle 14 (4).png" class="rounded-md w-full" alt="Sample 1" />
            <div class="text-[15px] text-center capitalize text-gray-300 mt-2">
              cancelled
            </div>
          </div>
          <div class="w-2/4">
            <img src="../assets/images/images/Rectangle 14 (5).png" class="rounded-md w-full" alt="Sample 1" />
            <div class="text-[15px] text-center capitalize text-gray-300 mt-2">nomad</div>
          </div>
          <div class="w-2/4">
            <img src="../assets/images/images/Rectangle 14 (5).png" class="rounded-md w-full" alt="Sample 1" />
            <div class="text-[15px] text-center capitalize text-gray-300 mt-2">nomad</div>
          </div>
        </div>
      </div>
    </div>
    <!-- play function -->
    <!-- </div> -->
    <div class="w-full bg-black/20 backdrop-blur-md px-5 py-[10px] fixed left-0 bottom-0">
      <div class="absolute w-full h-full top-0 left-0 bottom-0 -z-10 right-0">
        <div class="bg-[url('../../assets/images/images/Rectangle 14 (1).png')] w-full h-full blur-sm bg-no-repeat">
        </div>
      </div>
      <div class="flex items-center justify-between lg:container lg:mx-auto">
        <div class="w-2/12 md:w-2/12 flex items-center space-x-2">
          <img src="../assets/images/images/Rectangle 14 (1).png" class="h-[50%] w-[50%]" alt="" />
          <div>
            <div class="title">
              {{ title }}
            </div>
            <div class="name text-white text-[14px]">
              {{ name }}
            </div>
          </div>
        </div>
        <div class="w-8/12 mx-auto">
          <!-- <audio :src="{{audio}}" id="audio" controls></audio> -->
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
                <div class="hidden sm:flex border rounded-full h-7 w-7 items-center justify-center" id="prev">
                  <i class="fa-solid fa-backward-step text-white flex items-center justify-center"></i>
                </div>
                <!-- PLAY -->
                <div class="">
                  <button @click="play()" v-if="!isPlaying"
                    class="h-7 w-7 rounded-full bg-[blue] overflow-hidden flex items-center justify-center">
                    <i class="fa-solid fa-play text-white flex items-center justify-center w-full"></i>
                  </button>
                  <div @click="pause()" v-else
                    class="h-7 w-7 rounded-full bg-[blue] overflow-hidden flex items-center justify-center">
                    <!-- <i class="fa-solid fa-play text-white flex items-center justify-center w-full"></i> -->
                    <i class="fa-solid fa-pause text-white flex items-center justify-center w-full"></i>
                  </div>
                </div>
                <!-- NEXT -->
                <div>
                  <div id="next" class="next h-7 w-7 border rounded-full flex items-center justify-center">
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
            <!-- TIMER -->
            <div class="w-full hidden sm:block">
              {{ times }}
              <!-- <div class="relative">
                                                                <div class="border w-full h-[2px] relative"></div>
                                                                <div class="absolute top-0 left-0 w-full">
                                                                    <div class="bg-[blue] w-7/12 h-[2px]"></div>
                                                                </div>
                                                            </div> -->
              <div class="range">
                <div class="thumb"><span></span></div>
                <div class="progress-bar"></div>
                <input type="range" id="range" min="0" max="100" value="5" class="w-full h-[5px]" />
              </div>
              <!-- <div class="h-6 w-6 flex items-center justify-center absolute top-[90px]  left-[61%]  md:top-[85px] xl:top-[6px] md:left-1/2 bg-white/20 rounded-full">
                                                                <div class="h-3 w-3 bg-white rounded-full flex items-center justify-center"></div>
                                                            </div> -->
            </div>
          </div>
        </div>

        <div class="w-2/12 hidden md:block h-[84.34px]">
          <div class="">
            <!-- <div class=" w-4/12 md:w-3/12 lg:w-2/12">
                                                            <div class="" @click="volume()" v-if="!muted">
                                                                <i class="fa-solid fa-volume-high text-white"></i>
                                    
                                                            </div>
                                                            <div v-else @click="unMute()">
                                                                <i class="fa-solid fa-volume-xmark  text-white"></i>
                                                            </div>
                                                        </div> -->
            <div class="speaker flex items-center justify-center space-x-2 text-[24px]">
              <i class="fa-solid fa-volume-low text-white"></i>
              <div class="volume rounded-[25px] h-[5px] w-full bg-white my-[10px] mx-0" id="volume">
                <div class="volume-pro rounded-[5px] h-full w-1/2 bg-black" id="volume-pro"></div>
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

    <!-- <PlayFunction :currentSong="currentSong" :isPlaying="isPlaying" :play="play" :pause="pause" :volume="volume" :unMut="unMute" :control="control" :muted="muted" :times="times" /> -->
  </div>
</template>

<script lang="ts">
import "jquery";
import { defineComponent, ref, onMounted, computed } from "vue";
import Nav from "../components/Nav.vue";
import Side from "../components/Side.vue";
import { HeartIcon, ArrowPathRoundedSquareIcon } from "@heroicons/vue/24/outline";
import { Song, SportifySong } from "../model";
import store from "../store";
import PlayFunction from "../components/PlayFunction.vue";
import axios from "axios";
import Songs from "../Data/songs";
import { arrayToMap } from "../util/arrayToMap";

export default defineComponent({
  props: ["searchResult"],
  components: {
    Nav,
    Side,
    HeartIcon,
    PlayFunction,
  },
  setup() {
    $(document).ready(function () {
      $(".car").owlCarousel({
        loop: true,
        responsiveClass: true,
        center: true,
        responsive: {
          0: {
            items: 1,
          },
          640: {
            items: 2,
          },
          768: {
            items: 3,
          },
          1024: {
            items: 4,
          },
        },
      });
      $(".playlist").owlCarousel({
        loop: true,
        responsiveClass: true,
        margin: 10,
        center: true,
        responsive: {
          0: {
            items: 1,
          },
          640: {
            items: 2,
          },
          768: {
            items: 3,
          },
          1024: {
            items: 4,
          },
        },
      });
    });

    // store.commit('music')
    const isPlaying = ref<boolean>(false);
    const muted = ref<boolean>(false);
    const songIndex = ref<number>(0);
    const songData = ref<SportifySong[]>();
    const currentSong = ref<SportifySong>()

    const idk = computed(() => store.state.songs.data);
    const getSong = ref<[]>();
    const audio = ref(new Audio());
    const title = ref(document.querySelector(".title") as HTMLDivElement) as any;
    const name = ref(document.querySelector(".name") as HTMLDivElement) as any;
    const search = ref<string>("");
    const searchResult = ref<[]>([]);
    const shuffles = ref([]);
    const times = ref<string | number | null>(0);
    // let audio = ref(document.getElementById('audio') as HTMLAudioElement ) as any
    // const play = ref();
    // const nextSong = ref(document.querySelector(".next") as HTMLDivElement) as any;
    // const index = 19;
    // const isPlaying = ref < boolean > (false)
    // const index = ref(0)
    // const duratiin = ref < string | number | null > (0)

    // const currentSong = getSong
    // const player = ref(new Audio())
    // const rep

    onMounted(() => {
      getMusic();
    });

    //Methods
    const getMusic = async () => {
      const config = {
        headers: {
          "X-RapidAPI-Key": "5cacc090e1msh85573da32b12038p1e45a7jsnefe71fbf3f8f",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      };
      try {
        const res = await axios
          .get(
            `https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv`,
            config
          )
          .then((res) => res.data);

        const result = res.albums;

        const rep = result.map((res: any) => res.tracks.items);

        const mappedSong = arrayToMap(rep) as unknown as SportifySong[];

        songData.value = mappedSong;

        currentSong.value = mappedSong[songIndex.value]
      } catch (error: any) {
        console.log(error);
      }
      // console.log(res);
    };

    function loadSong() {
      currentSong.value = songData.value?.[songIndex.value]

      name.value = currentSong.value?.name;

      audio.value.src = currentSong.value?.preview_url as unknown as string;
    }

    function play() {
      isPlaying.value = true;
      loadSong();
      audio.value.play();
    }

    function prev() {
      // songIndex--;

      if (songIndex.value < 0) {
        // songIndex = items.length - 1;
      }

      // loadSong(items[songIndex]);

      play();
    }

    function next() {
      // songIndex++;

      // if (songIndex > items.length - 1) {
      //     songIndex = 0;
      // }

      // loadSong(items[songIndex]);

      play();
      console.log("hey");
    }

    function pause() {
      isPlaying.value = false;
      // audio.value.pause()
    }
    const volume = () => {
      player.value.muted = true;
      muted.value = true;
    };
    const unMute = () => {
      player.value.muted = false;
      muted.value = false;
    };
    async function searchMusic(e: any) {
      const config = {
        headers: {
          "X-RapidAPI-Key": "0c0167ae13msh3a8f6aadfb958bbp137e9djsn0e0867be8aa9",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      };
      if (e.key === "Enter") {
        try {
          await axios
            .get(
              `https://spotify23.p.rapidapi.com/search/?q=${search.value}&type=albums`,
              config
            )
            .then((res) => res.data.albums.items)
            .then(setResults);
          // .then((res) => console.log(res.albums.items));
        } catch (error: any) {
          console.log(error.response);
        }
      }
    }

    function setResults(result: []) {
      searchResult.value = result;
      console.log(search.value);
    }

    return {
      idk,
      search,
      muted,
      SongData: songData,
      isPlaying,
      // Songs,
      // currentSong,
      times,
      getSong,
      name,
      title,
      audio,
      getMusic,
      currentSong,
      Side,
      Nav,
      volume,
      play,
      pause,
      unMute,
    };
  },
});
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

<!-- 
// onMounted(() => {
    //     setMedia();
    // })

    // const setMedia = (music ? : Song) => {
    //     const newSong = music ? music : songs.value[index.value];

    //     currentSong.value = newSong
    //     player.value.src = newSong.src
    // }


    // const play = () => {
    //     isPlaying.value = false

    //     if (currentSong.value == null) setMedia()

    //     player.value.play()
    //     player.value.addEventListener('timeupdate', function() {
    //         times.value = player.value.currentTime.toFixed()
    //     })
    //     player.value.addEventListener('ended', function() {
    //         index.value += 1

    //         if (index.value > songs.value.length - 1) index.value = 0;

    //         setMedia(songs.value[index.value])
    //         player.value.play()
    //     })

    //     isPlaying.value = true
    // }

    // const pause = () => {
    //     player.value.pause()
    //     isPlaying.value = false
    // }

    // const control = (type: "next" | "prev") => {
    //     let SongIndex = 0

    //     if (type === "next") {
    //         index.value += 1
    //         SongIndex = index.value < songs.value.length ? index.value : 0
    //     };

    //     if (type === "prev") {
    //         index.value -= 1
    //         SongIndex = index.value > 0 ? index.value : 0
    //     };

    //     setMedia(songs.value[SongIndex])
    //     play()
    // }

     -->
