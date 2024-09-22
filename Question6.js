// Task 1: Create a function to create a playlist
function createPlaylist(playlistName) {
    // Private array to hold the songs
    let songs = [];

    // Closure that returns methods to manipulate the playlist
    return {
        // Task 2: Function to add a song to the playlist
        addSong: function(songName, artist) {
            songs.push({ songName, artist });
        },

        // Task 3: Function to list all songs in the playlist
        listSongs: function() {
            console.log(`Songs in "${playlistName}":`);
            songs.forEach((song, index) => {
                console.log(`${index + 1}. ${song.songName} by ${song.artist}`);
            });
        }
    };
}

// Creating a playlist
const myPlaylist = createPlaylist("My Favorites");

// Adding songs to the playlist
myPlaylist.addSong("Song 1", "Artist 1");
myPlaylist.addSong("Song 2", "Artist 2");
myPlaylist.addSong("Song 3", "Artist 3");

// Listing songs in the playlist
myPlaylist.listSongs();
