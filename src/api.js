// const API = '/api/';
// fetch(API + 'scrape')

export async function scrapeHeadlines() {
    return fetch('/api/scrape')
            .then(resp => {
                if(!resp.ok) {
                    if(resp.status >= 400 && resp.status < 500) {
                        return resp.json().then(data => {
                            let err = {errorMessage: data.message};
                            throw err;
                        })
                    } else {
                        let err = {errorMessage: 'Please try again later, server is currently offline'};
                        throw err;
                    }
                }
                return resp.json();
            });
}

export async function getHeadlines() {
    return fetch('/api/articles')
            .then(resp => {
                if(!resp.ok) {
                    if(resp.status >= 400 && resp.status < 500) {
                        return resp.json().then(data => {
                            let err = {errorMessage: data.message};
                            throw err;
                        })
                    } else {
                        let err = {errorMessage: 'Please try again later, server is currently offline'};
                        throw err;
                    }
                }
                return resp.json();
            });
}
export async function getNotes(id) {
    return fetch('/api/notes/'+ id)
            .then(resp => {
                if(!resp.ok) {
                    if(resp.status >= 400 && resp.status < 500) {
                        return resp.json().then(data => {
                            let err = {errorMessage: data.message};
                            throw err;
                        })
                    } else {
                        let err = {errorMessage: 'Please try again later, server is currently offline'};
                        throw err;
                    }
                }
                return resp.json();
            });
}

export async function updateArticle(article) {
    const updateURL = '/api/articles/' + article._id;
    return fetch(updateURL, {
        method: 'put',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({isSaved: !article.isSaved})
    })
        .then(resp => {
            if (!resp.ok) {
                if (resp.status >= 400 && resp.status < 500) {
                    return resp.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    })
                } else {
                    let err = {errorMessage: 'Please try again later, server is currently offline'};
                    throw err;
                }
            }
            return resp.json();
        })
}

export async function createNote(id, val) {
    return  fetch('/api/notes/' + id, {
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({body: val})
    })
        .then(resp => {
        if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then(data => {
                let err = {errorMessage: data.message};
            throw err;
        })
        } else {
            let err = {errorMessage: 'Please try again later, server is currently offline'};
            throw err;
        }
    }
    // console.log(resp.json());
    return resp.json();
})
}

export async function deleteNote(noteId, headlineId) {
    const deleteURL = '/api/notes/' + noteId +'/'+headlineId;
    return fetch(deleteURL, {
        method: 'delete'
    })
        .then(resp => {
        if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then(data => {
                let err = {errorMessage: data.message};
            throw err;
        })
        } else {
            let err = {errorMessage: 'Please try again later, server is currently offline'};
            throw err;
        }
    }
    return resp.json();
})
}
