import axios from 'axios'

const api = axios.create({ 
    baseURL: '/api',
    headers: {
        'token': sessionStorage.getItem('token')
    }
})


export const createVideo = payload => api.post(`/video`, payload)
export const getVideos = () => api.get(`/videos`)
export const getVideosbyBlacklist = () => api.get(`/videos/BL`)
export const blacklistVideo = id => api.put(`/video/BL/${id}`)
export const unblacklistVideo = id => api.put(`/video/UBL/${id}`)
export const updateVideobyTitle = (title, payload) => api.put(`/video/${title}`, payload)
export const updateVideobyID = (id, payload) => api.put(`/video/id/${id}`, payload)
export const deleteVideobyID = id => api.delete(`/video/id/${id}`)
export const deleteVideobyTitle = title => api.delete(`/video/${title}`)
export const getVideobyTitle = payload => api.post(`/video/search`, payload)
export const getVideosbyTitle = payload => api.post(`/videos/search`, payload)
export const getVideosbyTag = payload => api.post(`videos/tags`, payload)

export const createPerson = payload => api.post(`/person`, payload, { headers: { 'content-type': 'multipart/form-data' } })
export const getPeople = () => api.get(`/people`)
export const getPeoplebyOfficer = officer => api.get(`/people/${officer}`)
export const updatePersonbyName = (name, payload) => api.put(`/person/${name}`, payload, { headers: { 'content-type': 'multipart/form-data' } })
export const updatePersonbyID = (id, payload) => api.put(`/person/id/${id}`, payload, { headers: { 'content-type': 'multipart/form-data' } })
export const deletePersonbyID = id => api.delete(`/person/id/${id}`)
export const deletePersonbyName = name => api.delete(`/person/${name}`)
export const getPersonbyTitle = title => api.get(`/person/${title}`)
export const getPersonbyEmail = email => api.get(`/person/${email}`)

export const createSponsor = payload => api.post(`/sponsor`, payload)
export const getSponsors = () => api.get(`/sponsors`)
export const getSponsorbyName = name => api.get(`/sponsor/${name}`)
export const updateSponsorbyName = (name, payload) => api.put(`/sponsor/${name}`, payload)
export const updateSponsorbyID = (id, payload) => api.put(`/sponsor/id/${id}`, payload)
export const deleteSponsorbyID = id => api.delete(`/sponsor/id/${id}`)
export const deleteSponsorbyName = name => api.delete(`/sponsor/${name}`)

export const sendEmail = payload => api.post(`/email`, payload)
export const logEmail = payload => api.post(`/email/db`, payload)
export const getEmails = () => api.get(`/email/db`)

export const login = (username, password) => api.get(`/login/${username}/${password}`)
export const checkToken = token => api.get(`/token/${token}`)

const apis = {
    createVideo,
    getVideos,
    getVideosbyBlacklist,
    blacklistVideo,
    unblacklistVideo,
    updateVideobyTitle,
    updateVideobyID,
    deleteVideobyID,
    deleteVideobyTitle,
    getVideobyTitle,
    getVideosbyTitle,
    getVideosbyTag,
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
    sendEmail,
    logEmail,
    getEmails,
    login,
    checkToken,
}

export default apis