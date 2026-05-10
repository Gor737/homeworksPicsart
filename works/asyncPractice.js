const api = 'https://dog.ceo/api/breeds/image/random';


//------task1------
async function getUser(){
    const response = await fetch(api);
    const data = await response.json();
    console.log(data); 
}
getUser();

// function getUser() {
//   fetch('/api/user')
//     .then(response => response.json())
//     .then(data => console.log('User:', data));
// }



//------task2------
async function getSettings() {
    try{
        const response = await fetch(api);
        // throw new Error("ALo");
        await response.json();
    }catch(err){
        console.log('An error occurred:', err);
    }
}

getSettings()

// function getSettings() {
//   fetch('/api/settings')
//     .then(res => res.json())
//     .catch(error => console.log('An error occurred:', error));
// }



//------task3------
async function loadData() {
    const response = await fetch('/api/user');
    const data = await response.json();
    const user = await fetch(`/api/posts/${data.id}`);
    const userData = await user.json();
    await console.log('Posts:', userData);  
}
loadData();

// function loadData() {
//   fetch('/api/user')
//     .then(res => res.json())
//     .then(user => {
//       return fetch(`/api/posts/${user.id}`);
//     })
//     .then(res => res.json())
//     .then(posts => console.log('Posts:', posts));
// }



//------task4------
async function showData() {
  let response = await fetch(api);
  let data = await response.json(); 
  console.log(data);
}
showData();



//------task5------
async function loadProfile() {
  let user = await fetch('https://dog.ceo/api/breeds/image/random');
  console.log('Profile loaded');
}
loadProfile();



//------task6------
async function sayHello() {
  return "Hello";
}

sayHello().then(console.log);




//------task7------
button.addEventListener('click', async (event) => {
  const data = await fetch('/api/click-stats'); // we need to wait for this!
  console.log('Saved');
});



//------task8------
function wait(delay){
    return new Promise(res => {
        setTimeout(res, delay);
    })
}

// wait(2000).then(() => console.log("ALO"));



//------task9------
wait(0)
    .then(() => console.log("Start"))
    .then(() => wait(2000))
    .then(() => console.log("End"))




//------task10------
async function downloadMovies(movies) {
    for(const movie of movies){
        await fetch(`/api/download/${movie}`);
        console.log(`Downloaded: ${movie}`);
    }

    console.log("Done!");
}

downloadMovies(['game of thrones', 'vikings']);




//------task11------
async function getNames(users) {

  const promises = users.map(async (user) => {
    let res = await fetch(`/api/name/${user}`);
    return res.text();
  });
  
  // Add Promise.all here:
  Promise.all(promises)
    .then(value => console.log(value));
//   const names = promises; 
//   console.log(names); 
}




//------task12------
async function getDashboard() {
  const weather = await fetch('/api/weather');
  const news = await fetch('/api/news');

  Promise.all([weather, news])
    .then(el => console.log(el));
//   console.log('Data collected');
}




//------task13------
console.log('1');
queueMicrotask(() => console.log('2'))
console.log('3');




//------task14------
Promise.resolve()
    .then(() => {
        setTimeout(() => console.log('End'),0);
        queueMicrotask(() => console.log('Hidden message'));
    })

console.log("Start");




//------task15------
function doHeavyMath() {
  for(let i = 0; i < 1000000; i++) {}
  console.log('Calculations finished');
}

console.log('Work started');
// Execute doHeavyMath here so that 'Work finished' is logged BEFORE the calculations.
setTimeout(() => doHeavyMath(),0);
console.log('Work finished, you can click buttons now');





//------task16------
async function getAvatar(username){
    const response = await fetch(`/api/users/${username}`);
    const user = await response.json();
    console.log('Avatar:', user.avatarUrl);
    return user.avatarUrl;
}


function getAvatar(username) {
  return fetch(`/api/users/${username}`)
    .then(response => response.json())
    .then(user => {
      console.log('Avatar:', user.avatarUrl);
      return user.avatarUrl;
    });
}



//------task17------
function fetchGreeting(){
    return fetch('/api/greeting')
        .then(response => {
            return response.text();
        })
        .then(text => {
            console.log(text);
            return text;
        })
}

async function fetchGreeting() {
  const response = await fetch('/api/greeting');
  const text = await response.text();
  console.log(text);
  return text;
}




//------task18------
async function deleteComment(id) {
    try{
        const response = await fetch(`/api/comments/${id}`, { method: 'DELETE' });
        console.log('Comment deleted');
    }catch(err){
        console.error('Failed to delete:', err);
    }
}

function deleteComment(id) {
  return fetch(`/api/comments/${id}`, { method: 'DELETE' })
    .then(() => console.log('Comment deleted'))
    .catch(error => console.error('Failed to delete:', error));
}




//------task19------
function savePlayerSettings(settings){
    return fetch('/api/settings', { method: 'POST', body: settings })
        .then(() => console.log('Settings saved'))
        .catch(err => console.log('Save error'))
}


async function savePlayerSettings(settings) {
  try {
    await fetch('/api/settings', { method: 'POST', body: settings });
    console.log('Settings saved');
  } catch (err) {
    console.log('Save error');
  }
}




//------task20------
async function getPlayerScore(playerId) {
    const response = await fetch(`/api/players/${playerId}`);
    const player = await response.json();
    const playerResponse = await fetch(`/api/scores/${player.gameId}`);
    const score = await playerResponse.json();
    console.log(`Current score: ${score.points}`); 
}


function getPlayerScore(playerId) {
  return fetch(`/api/players/${playerId}`)
    .then(response => response.json())
    .then(player => {
      return fetch(`/api/scores/${player.gameId}`);
    })
    .then(response => response.json())
    .then(score => {
      console.log(`Current score: ${score.points}`);
    });
}