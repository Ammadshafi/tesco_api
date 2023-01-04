
const express=require('express')
const db=require('./database/db')
const TeacherRoute=require('./route/Teacher_route')
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinition=require('./swagger.doc')
const app= express()
const PORT=8000
app.use(express.json());

//Here is the APi of the different routing
app.use('/api',TeacherRoute)

db.connection()

  
  const options = {
    swaggerDefinition,
    apis: ['./route/*.js'],
  };
  
  const swaggerSpec = swaggerJSDoc(options);
  
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.get('/',(req,res)=>{
    res.end("Welcome to tesoc backend")
})
app.listen(PORT,()=>{
    console.log(`Serve is running on port:${PORT}`)
})