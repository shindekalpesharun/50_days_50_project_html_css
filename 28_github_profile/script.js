const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) console.log("hey here error");
    createErrorCard("No profile with this username");
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    addResposToCard(data);
  } catch (err) {
    if (err.response.status == 404) console.log("hey here error");
    createErrorCard("Problem fetching repos");
  }
}

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
      <div>
        <img
          src="${user.avatar_url}"
          alt="${user.name}"
          class="avatar"
        />
      </div>
      <div class="user-info">
        <h2>${user.login}</h2>
        <p>
          ${user.bio}
        </p>
        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos">
          
        </div>
      </div>
    </div>
    `;

  main.innerHTML = cardHTML;
}

function createErrorCard(message) {
  const cardHTML = `
    <div class="card">
      <h1>${message}</h1>
    </div>
    `;

  main.innerHTML = cardHTML;
}

function addResposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.forEach((repo) => {
    repoEl = document.createElement("a");
    repoEl.classList.add("repos");
    // repoEl.href = repo.html_url;
    // repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });

  const cardHTML = `
    <div class="card">
      <h1>${message}</h1>
    </div>
    `;

  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});
