import axios from 'axios'

const getAll =  async ( organizers ) => {
    const allPages = await organizers.map(async p => {
        const requestCurrentPage = await axios.get('https://graph.facebook.com/v2.11/' + p.fbpage_id + '/events?access_token=' + window.localStorage.getItem('user'))
        const currentPage = await requestCurrentPage.data.data.map(i => {
        return { ...i, organizer: p}
        })
    return currentPage
    })
    const unMerged = await Promise.all(allPages)
    const merged = [].concat.apply([], unMerged);

    return merged
}

const getOrganizers = async () => {
    const o = await axios.get('http://localhost:3001/pages')
    return o.data
}

export default { getAll, getOrganizers }