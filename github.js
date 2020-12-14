class GitHub {
  constructor() {
    this.client_id = 'b1e529cac662af0a733f';
    this.clent_secret = '2c8742c310956bd3dfbb4e0bec32e65859683a84';
    this.repos_count = 5;
    this.repos_sort = 'created_asc';
  }

  async getUser(user) {

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.clent_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }
}