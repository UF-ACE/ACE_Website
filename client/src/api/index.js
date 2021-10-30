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
export const getPersonbyEmail = email => api.get(`/person/${email}`)

export const createSponsor = payload => api.post(`/sponsor`, payload)
export const getSponsors = () => api.get(`/sponsors`)
export const getSponsorbyName = name => api.get(`/sponsor/${name}`)
export const updateSponsor = (name, payload) => api.put(`/sponsor/${name}`, payload)
export const deleteSponsorbyName = name => api.delete(`/sponsor/${name}`)

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
    getPersonbyEmail,
    createSponsor,
    getSponsors,
    getSponsorbyName,
    updateSponsor,
    deleteSponsorbyName,
}

export default apis