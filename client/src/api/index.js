import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createVideo = payload => api.post(`/video`, payload)
export const getVideos = () => api.get(`/videos`)
export const getVideosbyTag = tag => api.get(`/videos/${tag}`)
export const updateVideo = (title, payload) => api.put(`/video/${title}`, payload)
export const deleteVideobyTitle = title => api.delete(`/video/${title}`)
export const getVideobyTitle = title => api.get(`/video/${title}`)

export const createPerson = payload => api.post(`/person`, payload)
export const getPeople = () => api.get(`/people`)
export const getPeoplebyTitle = title => api.get(`/people/${title}`)
export const updatePerson = (name, payload) => api.put(`/person/${name}`, payload)
export const deletePersonbyName = name => api.delete(`/person/${name}`)
export const getPersonbyTitle = title => api.get(`/person/${title}`)

const apis = {
    createVideo,
    getVideos,
    getVideosbyTag,
    updateVideo,
    deleteVideobyTitle,
    getVideobyTitle,
    createPerson,
    getPeople,
    getPeoplebyTitle,
    updatePerson,
    deletePersonbyName,
    getPersonbyTitle,
}

export default apis