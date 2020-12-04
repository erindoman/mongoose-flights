const mongoose = require('mongoose')

mongoose.connect(process.env.DATABSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})