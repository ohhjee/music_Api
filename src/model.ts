export interface Song {
  id: number;
  title: string;
  artist: string;
  src: any;
  timer: string;
  images: string;
}
export interface SportifySong {
  artists: [];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: string[];
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}
