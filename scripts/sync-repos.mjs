import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const USERNAME = 'architect4182';

async function syncPublicRepos() {
  console.log(`Fetching public repositories for ${USERNAME}...`);
  const headers = {
    'User-Agent': 'Portfolio-Sync',
    'Accept': 'application/vnd.github.v3+json',
  };

  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (token) {
    headers['Authorization'] = `token ${token}`;
    console.log('Using authenticated GitHub token.');
  }

  try {
    const res = await fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&type=public`, { headers });
    if (!res.ok) {
      if (res.status === 403) {
        console.warn('GitHub rate limit reached for unauthenticated requests.');
      } else {
        throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
      }
      return;
    }

    const repos = await res.json();
    if (!Array.isArray(repos)) {
      throw new Error('Unexpected response format from GitHub API');
    }

    // Filter strictly for public non-fork repos
    const publicRepos = repos
      .filter(r => !r.private && !r.fork && r.name !== USERNAME)
      .map(r => ({
        name: r.name,
        title: r.name.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        description: r.description || '',
        html_url: r.html_url,
        homepage: r.homepage || '',
        language: r.language || '',
        visibility: r.visibility || 'public',
        private: r.private,
        fork: r.fork,
        topics: r.topics || []
      }));

    const reposFilePath = path.join(rootDir, 'repos.json');
    fs.writeFileSync(reposFilePath, JSON.stringify(publicRepos, null, 2), 'utf8');
    console.log(`Successfully synced ${publicRepos.length} public repos to repos.json!`);
  } catch (err) {
    console.error('Failed to sync public repositories:', err.message);
  }
}

syncPublicRepos();
