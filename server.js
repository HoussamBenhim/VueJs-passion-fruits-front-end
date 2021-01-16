require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const app = express()
const port = 3000
const users = [
  {
    id: 1,
    nom: 'Houssam',
    prenom: 'Benhim',
    email: 'benhim.houssam@gmail.com',
    telephone: '0761596621',
    password: 'benhim123',
  },
]
var userId = 0

app.use(express.json())
app.use(cors())
app.get('/fruits', (req, res) => {
  const { authorization } = req.headers

  try {
    const token = authorization.split(' ')

    jwt.verify(token[1], process.env.JWT_KEY)
    res.json({
      message: 'yo',
    })
  } catch (err) {
    res.status(401)
    res.json({
      error: err,
    })
  }
})
app.post('/login', (req, res) => {
  const { email, password } = req.body
  console.log(email)
  console.log(password)
  const user = users.find(
    (user) => user.email === email && user.password === password
  )
  if (user) {
    const user = {
      id: 1,
      nom: 'benhim',
      prenom: 'houssam',
    }
    const token = jwt.sign(user, process.env.JWT_KEY)
    res.json({
      token,
      user,
    })
  } else {
    res.status(403)
    res.json({
      message: 'invalid login informations',
    })
  }
})
//------------------Register Function--------------------------------------------------------------

app.post('/register', (req, res) => {
  const { nom, prenom, telephone, email, password } = req.body

  if (
    nom.length > 3 &&
    prenom.length > 3 &&
    telephone.length > 0 &&
    email.length > 0 &&
    password.length > 5
  ) {
    users.push({
      id: userId++,
      nom,
      prenom,
      telephone,
      email,
      password,
    })
    const user = users.find((user) => user.nom === nom)
    const token = jwt.sign(user, process.env.JWT_KEY)
    res.json({
      token,
      user,
    })
  } else {
    res.status(403)
    res.json({
      message: 'Une des données est erronée',
    })
  }
})

app.listen(port, () => {
  console.log('listen at port 3000')
})
