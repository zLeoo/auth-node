const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors') 
require('dotenv').config()
//initialize express
const app = express()