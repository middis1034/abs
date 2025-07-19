// GitHub API integration
async function saveToGitHub(content, token, repo) {
    const fileName = 'content.json';
    const message = 'Update content.json via painel';
    
    try {
        // Get current file SHA (if exists)
        const currentFile = await fetchCurrentFile(token, repo, fileName);
        
        // Prepare the content
        const contentBase64 = btoa(JSON.stringify(content, null, 2));
        
        // Prepare the request body
        const body = {
            message: message,
            content: contentBase64,
            ...(currentFile && { sha: currentFile.sha })
        };
        
        // Make the API call
        const response = await fetch(`https://api.github.com/repos/${repo}/contents/${fileName}`, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3+json'
            },
            body: JSON.stringify(body)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`GitHub API error: ${errorData.message}`);
        }
        
        const responseData = await response.json();
        return responseData;
        
    } catch (error) {
        console.error('Error saving to GitHub:', error);
        throw error;
    }
}

async function fetchCurrentFile(token, repo, fileName) {
    try {
        const response = await fetch(`https://api.github.com/repos/${repo}/contents/${fileName}`, {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (response.ok) {
            return await response.json();
        } else if (response.status === 404) {
            // File doesn't exist yet
            return null;
        } else {
            throw new Error(`Failed to fetch current file: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error fetching current file:', error);
        return null;
    }
}