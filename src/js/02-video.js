// localStorage.setItem("videoplayer-current-time")

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

// on(event: string, callback: function): void
// Add an event listener for the specified event.
// Will call the callback with a single parameter, data,
// that contains the data for that event.
// See events below for details.

const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('play', onPlay);

// You can listen for events in the player by attaching a callback using .on():

player.on('eventName', function (data) {
  // data is an object containing properties specific to that event
});

// setCurrentTime(seconds: number): Promise<number, (RangeError|Error)>
// // Set the current playback position in seconds. Once playback has started,
// if the player was paused, it will remain paused.Likewise, if the player was playing,
//     it will resume playing once the video has buffered.
//     Setting the current time before playback has started will cause playback to start.

// You can provide an accurate time and the player will attempt to seek to as close to that time as possible. The exact time will be the fulfilled value of the promise.

player
  .setCurrentTime(30.456)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
