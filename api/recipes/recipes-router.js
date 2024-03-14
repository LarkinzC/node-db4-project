const router = require('express').Router()

router.use('*', (req, res ) => {
    res.json({api: 'FUNCTIONING'})
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'Oh no, something went wrong with router',
        message: err.message,
        stack: err.stack
    })
})


module.exports = router