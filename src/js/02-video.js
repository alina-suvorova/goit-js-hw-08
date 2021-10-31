import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localeStorageKey = "videoplayer-current-time";

player.on('timeupdate', throttle(data => localStorage.setItem(localeStorageKey, data.seconds), 1000));
player.setCurrentTime(localStorage.getItem(localeStorageKey));