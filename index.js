/* eslint-disable no-undef */
//Used to access process enviroment variables
require('dotenv').config()
//Express used to create REST API Calls
const express = require('express')
//Morgan used to log whenever api calls are made.
const morgan = require('morgan')
//Cross origin browsing
const cors = require('cors')
const Person = require('./modules/person')

const app = express()
app.use(express.static('build'))
app.use(cors())
app.use(express.json())

morgan.token('personObject', req => {
    return JSON.stringify(req.body)
})
app.use(morgan(':method :url :response-time :personObject'))

app.get('/api/persons', (req, res) => {
    Person.find({}).then(people => {
        console.log(people)
        res.json(people)
    })
})

app.get('/info', (req, res) => {
    Person.find({}).then(people => {
        res.send(`<p>Phonebook has info for ${people.length} people</p>
        <p>${new Date()}</p>`)
    })
})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id).then(person => {
        if (person) {
            res.json(person)
        }
        else {
            res.status(404).end()
        }
    })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {

    Person.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(204).end()
        })
        .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
    const body = req.body

    if (!body.name || !body.number) {
        return res.status(400).json({
            error: 'content: missing'
        })
    }

    Person.find({}).then(array => {
        if (array.find(x => x.name === body.name)) {
            return res.status(400).json({
                error: 'name must be unique'
            })
        }
    })

    const person = new Person({ ...body })

    person.save().then(savedPerson => {
        res.json(savedPerson)
    })
        .catch(error => next(error))
})
app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body
    Person.findByIdAndUpdate(req.params.id, body, { new: true })
        .then(updatedNotes => {
            res.json(updatedNotes)
        })
        .catch(error => next(error))

})


const errorHandler = ((error, req, res, next) => {
    console.error(error.message)
    if (error.name === 'CastError') {
        return res.status(400).send({ error: 'malformatted id' })
    }
    else if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message })
    }
    next(error)
})

app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})