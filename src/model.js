const mongoose = require('mongoose')

const datamodel = mongoose.model('Question',
    new mongoose.Schema({
        id: String,
        type: String,
        url: String,
        created_at: String,
        company: String,
        company_url: String,
        location: String,
        title: String,
        description: String,
        how_to_apply: String,
        company_logo: String

    }), 'jobs');
  module.exports = datamodel