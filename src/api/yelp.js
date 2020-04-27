import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Jn8DdGRnpIXnlFhGwLmEqfhDGvMwWnqbpl7fn2imbY00zNN-KEJJ-bp5CD-h2G32lzWzj1jk1PvPleymKKwIyjvP1efuywM6Gk78skzs80WxEKpbprFka2O2wS2eXnYx'
    }
})