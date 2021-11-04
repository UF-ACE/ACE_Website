import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const createVideo = payload => api.post(`/video`, payload)
export const getVideos = () => api.get(`/videos`)
export const getVideosbyTag = tag => api.get(`/videos/${tag}`)
export const updateVideobyTitle = (title, payload) => api.put(`/video/${title}`, payload)
export const updateVideobyID = (id, payload) => api.put(`/video/${id}`, payload)
export const deleteVideobyID = id => api.delete(`/video/${id}`)
export const deleteVideobyTitle = title => api.delete(`/video/${title}`)
export const getVideobyTitle = title => api.get(`/video/${title}`)

export const createPerson = payload => api.post(`/person`, payload)
export const getPeople = () => api.get(`/people`)
export const getPeoplebyOfficer = officer => api.get(`/people/${officer}`)
export const updatePersonbyName = (name, payload) => api.put(`/person/${name}`, payload)
export const updatePersonbyID = (id, payload) => api.put(`/person/${id}`, payload)
export const deletePersonbyID = id => api.delete(`/person/${id}`)
export const deletePersonbyName = name => api.delete(`/person/${name}`)
export const getPersonbyTitle = title => api.get(`/person/${title}`)
export const getPersonbyEmail = email => api.get(`/person/${email}`)

export const createSponsor = payload => api.post(`/sponsor`, payload)
export const getSponsors = () => api.get(`/sponsors`)
export const getSponsorbyName = name => api.get(`/sponsor/${name}`)
export const updateSponsorbyName = (name, payload) => api.put(`/sponsor/${name}`, payload)
export const updateSponsorbyID = (id, payload) => api.put(`/sponsor/${id}`, payload)
export const deleteSponsorbyID = id => api.delete(`/sponsor/${id}`)
export const deleteSponsorbyName = name => api.delete(`/sponsor/${name}`)

const apis = {
    createVideo,
    getVideos,
    getVideosbyTag,
    updateVideobyTitle,
    updateVideobyID,
    deleteVideobyID,
    deleteVideobyTitle,
    getVideobyTitle,
    createPerson,
    getPeople,
    getPeoplebyOfficer,
    updatePersonbyName,
    updatePersonbyID,
    deletePersonbyID,
    deletePersonbyName,
    getPersonbyTitle,
    getPersonbyEmail,
    createSponsor,
    getSponsors,
    getSponsorbyName,
    updateSponsorbyName,
    updateSponsorbyID,
    deleteSponsorbyID,
    deleteSponsorbyName,
}

export default apis