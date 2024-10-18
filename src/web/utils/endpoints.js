import { API_URL } from '../config/variables'
import { generateQueryString } from './generateQuery'

const postEndpoints = {
    get: ({ filters }) => `${API_URL}/public/blog/post/all${generateQueryString(filters)}`,
    getById: ({ id }) => `${API_URL}/public/blog/post/${id}`,
}

export {
    postEndpoints
}