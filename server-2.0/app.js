const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')

// Loading Database 
require('./database/mongoose')