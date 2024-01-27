const express = require('express')

const endpoints = require('./endpoints')
var cors = require('cors')
const app = express()
const port = 5000

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./client'))
app.use(express.json())

// app.get('/populate_select_get', endpoints.populateSelectGet)

app.get('/populate_select', endpoints.populateSelect)
app.get('/search_data_candidate', endpoints.searchCandidate)
app.get('/search_data_candidate_by_cargo', endpoints.searchCandidateByCargo)
app.get('/search_data_candidate_by_municipio', endpoints.searchCandidateByMunicipio)
app.get('/geral_result', endpoints.generalResult)

app.listen(port, function () {
    console.log('Server listenning localhost:5000')
})
