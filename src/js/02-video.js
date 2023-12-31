import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  _.throttle(e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
    console.log(localStorage);
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log('RangeError');
        break;

      default:
        // some other error occurred
        console.log(error.name);
        break;
    }
  });
console.log(localStorage);
