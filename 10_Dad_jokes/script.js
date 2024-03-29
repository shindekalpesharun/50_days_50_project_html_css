const jokeEL = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': "Application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeEL.innerHTML = data.joke
//         })
// }

// USING ASYNC/AWAIT
async function generateJoke() {
    const config = {
        headers: {
            'Accept': "Application/json"
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEL.innerHTML = data.joke
}