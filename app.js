// Init github
const github = new GitHub;
// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('search-user');

// Search input event listner
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userInput = e.target.value;

  if (userInput !== '') {
    // Make HTTP call
    github.getUser(userInput)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert
          ui.showAlert('User Not Found');
          // Clear previous profile
          ui.clearProfile();
        } else {
          // Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // Clear profile
    ui.clearProfile();
  }
});