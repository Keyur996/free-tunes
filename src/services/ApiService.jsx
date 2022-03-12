const config = {
    api: 'http://ws.audioscrobbler.com/2.0/',
    sharedSecret: '34eea21efb2024a068fa7f90063b4be7',
    options: {
      headers: { 'content-type': 'application/json' }
    },
    staticParam: {
        api_key: 'a55f29ea6534942cdba3b6d049c57fb9',
        format: 'json',
        limit: 10
    }
};

const ApiService = () => {
    const get = (endpoint, params) => {
        let finalParams = {
            ...params,
            ...config.staticParam
        }
        return fetch(`${config.api}${endpoint}?${new URLSearchParams(finalParams)}`)
        .then((response) => response)
        .catch((error) => {
            console.error(error);
            throw Error(error);
        });
    }
    const put = () => {
        console.log(' Hi Put here ')
    }
    const post = () => {
        console.log(' Hi Post here ')
    }
    const patch = () => {
        console.log(' Hi Patch here ')
    }
    return {
        get: get,
        put: put,
        post: post,
        patch: patch
    }
}

export default ApiService()
