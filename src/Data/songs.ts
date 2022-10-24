const songs = [
  {
    id: Math.floor(Math.random() * (999999999 - 999 + 1)) + 999,
    title: "Peace Be Unto You",
    artist: "Asake",
    timer: " 02:33",
    images: new URL("../assets/images/images/poster/Asake_peace.jpg", import.meta.url).href,
    src: new URL("../assets/audio/Asake-Peace-Be-Unto-You-PBUY.mp3", import.meta.url).href,
  },
  {
    id: Math.floor(Math.random() * (999999999 - 999 + 1)) + 999,
    title: "Buga",
    artist: "kiss dan",
    timer: "02:95",
    images: new URL("../assets/images/images/poster/Screenshot_20220505-140025.webp", import.meta.url).href,

    src: new URL("../assets/audio/Kizz-Daniel-Buga-ft-Tekno-(JustNaija.com).mp3", import.meta.url).href,
  },
  {
    id: Math.floor(Math.random() * (999999999 - 999 + 1)) + 999,
    title: "Back in uni",
    artist: "BlaqBonez",
    timer: "02:36",
    images: new URL("../assets/images/images/poster/Blaqbonez-–-Back-In-Uni-Ft.-Jae5-2.webp", import.meta.url).href,

    src: new URL("../assets/audio/Blaqbonez-Back-In-Uni.mp3", import.meta.url).href,
  },
  {
    id: Math.floor(Math.random() * (999999999 - 999 + 1)) + 999,
    title: "Terminator",
    artist: "Asake",
    timer: "02:35",
    images: new URL("../assets/images/images/poster/ab67616d0000b27358d5befffbc13092c8d43c5e.jpeg", import.meta.url)
      .href,
    src: new URL("../assets/audio/Asake-Terminator-file-1-(JustNaija.com).mp3", import.meta.url).href,
  },
];

export default songs;
