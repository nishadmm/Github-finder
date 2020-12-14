class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="profile">
      <div>
        <div>      
          <img src="${user.avatar_url}" id="profile-img"></img>
          <a href="${user.html_url}" target="_blank" class="btn">View Profile</a>
        </div>      
      </div>
      <div>
        <div>                
            <span class="badge badge-one">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-two">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-three">Followers: ${user.followers}</span>
            <span class="badge badge-four">Following: ${user.following}</span>
            <ul>
              <li>Comapny: ${user.company}</li>
              <li>Website/Blog: ${user.blog}</li>
              <li>Location: ${user.location}</li>
              <li>Member Since: ${user.created_at}</li>
            </ul>
        </div>         
      </div>
      </div> 
      <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    let output = '<h1>Latest Repos</h1>';
    repos.forEach(function (repo) {
      output += `
        <div class="repo">
          <a href=${repo.avatar_url}>${repo.name}</a>
          <div class="repo-badges">
            <span class="badge-one repo-badge">Stars: ${repo.stargazers_count}</span>
            <span class="badge-two repo-badge">Watchers: ${repo.watchers}</span>
            <span class="badge-three repo-badge">Forks: ${repo.forks}</span>
          </div>
        </div>
      `;
    });
    // Output repos
    document.getElementById('repos').innerHTML = output;
  }

  // Show alert Message
  showAlert(message) {
    // Clear aby remaining alerts
    this.clearAlert();
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = 'alert';
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const body = document.getElementById('body');
    // Get search box
    const searchBox = document.querySelector('.search-box');
    // Insert Alert
    body.insertBefore(div, searchBox);

    //Timeout after 3 Sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000)
  }


  // Clear Alert Message
  clearAlert() {
    const current = document.querySelector('.alert')

    if (current) {
      current.remove();
    }
  }

  // Clear Profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}