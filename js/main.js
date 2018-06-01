---
---

$(document).ready(function () {
    // Mobile navigation toggle handling
    $('.nav-toggle').click(function () {
        $(this).toggleClass('open');
        $('body').toggleClass('nav-open');
        $('.nav-container').slideToggle(200);
    });

    // Get Lastfm Currently playing track or Monthly Top Track
    var lastfmStatusField = document.getElementById('lastfmStatus');

    if (lastfmStatusField) {
        const USERNAME = 'ajaykarwal';
        const API_KEY = '965b2342a5837db0942394bbc9a31157'
        const LIMIT = 1;
        const PERIOD = '1month';
        const RECENT_TRACKS = `http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=${LIMIT}`;
        const TOP_TRACKS = `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=${LIMIT}&period=${PERIOD}&extended=1`;
    
        function updateDOM(topTrack, isTrackPlaying) {
            var trackTitle = topTrack.name;
            var trackArtist = topTrack.artist.name;
            var trackArtwork = topTrack.image[2]['#text'];
            var trackUrl = topTrack.url;
            
            if (isTrackPlaying) {
                trackArtist = topTrack.artist['#text'];
                lastfmStatusField.innerHTML = `Right now I'm currenly listening to <a href="${trackUrl}" target="_blank"><span>${trackTitle}</span></a> by <span>${trackArtist}</span>`;
            } else {
                lastfmStatusField.innerHTML = `This month I've mainly been listening to <a href="${trackUrl}" target="_blank"><span>${trackTitle}</span></a> by <span>${trackArtist}</span>`;
            }
        }
    
        fetch(RECENT_TRACKS).then((response) => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }
            response.json().then(function (data) {
                var currentlyPlaying = data.recenttracks.track[0]['@attr'] ? data.recenttracks.track[0]['@attr'].nowplaying : null;
                var topTrack;
    
                if (currentlyPlaying) {
                    console.log('song is currently playing');
    
                    topTrack = data.recenttracks.track[0];
                    updateDOM(topTrack, true);
                } else {
                    console.log('nothing playing, showing top track for the past month instead');
    
                    fetch(TOP_TRACKS).then((response) => {
                        if (response.status !== 200) {
                            console.log('Looks like there was a problem. Status Code: ' + response.status);
                            return;
                        }
                        response.json().then(function (trackData) {
                            topTrack = trackData.toptracks.track[0];
                            updateDOM(topTrack, false);
                        });
                    })
                    .catch(function (err) {
                        console.log('Fetch Error :-S', err);
                    });
                }
    
            });
        })
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });

    }
    
});
