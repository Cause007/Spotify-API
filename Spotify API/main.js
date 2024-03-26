//Declarations for our song values
let song;
let playSong;

//Spotify client credentials
const clientId ="5d9b40903fdb424eb2a1547ce1c350d2";
const clientSecret ="4be233fcaf8d4899afbb2f58c8e4b5b8";

const _getToken = async () => {
    const result = await fetch(`https://accounts.spotify.com/api.token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await result.json();
    return data.access_token;
}

// Function to get song info when the image is clicked
/*
*@param img index
*@param item_index
*
*/
async function clickedEvent(img_index, item_index) {
    //get track name
    let track = document.getElementsByTagName('img')[img_index].attributes[1].value;

    //get token
    let token = await _getToken();

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept','application/json'],
        ['Authorization', `Bearer ${token}`]
    ]);

    let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`, {
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);

    let response = await result.json();

    console.log(response)
    let song = response.tracks.items[item_index].preview_url
}

//Check if song is playing and stop it
if (playSong) {
    stopSnippet();
}
songSnippet(song);

/**
*@param url
*@param event
*
*id = image if for geller image
*event = Mouse event given by the action from our user
*
*Function produces songs from the clieckedEvent based on index of image
*/

function getSong(id, event) {
    switch(id){
        case 'fig1': {
            event.stopPropagation();
            clickedEvent(0,3)
            break;
        }
        case 'fig2': {
            event.stopPropagation();
            clickedEvent(1,3)
            break;
        }
        case 'fig3': {
            event.stopPropagation();
            clickedEvent(2,3)
            break;
        }
        case 'fig4': {
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
        case 'fig5': {
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        }
        case 'fig6': {
            event.stopPropagation();
            clickedEvent(5,1)
            break;
        }
    }
}

/**
*@param url
*
*url = Song Preview_url
*
*Function will return an audio clip given by th epreview url
*/
function songSnippet(url){
    playSong = new Audio(url);
    return playSong.play()
}

/**
*No param
*
*Function returns event to stop song snippet
*/
function stopSnippet() {
    return playSong.pause();
}