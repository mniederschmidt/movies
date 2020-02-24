const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema(
    {
        Title: { type: String, required: true },
        Year: { type: String, required: true },
        imdbID: { type: String, required: true },
        Type: { type: String, required: true },
        Poster: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('movies', Movie)