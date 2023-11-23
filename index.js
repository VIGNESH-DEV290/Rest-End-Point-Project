const express=require('express')
const app=express()
const questions=[
    {
     question:'how to install react.js',
     slug:'how-to-install-react.js',
     votes:89,
     views:68,
     tags:'React.js'
    },
    {
        question:'how to install node.js',
        slug:'how-to-install-node.js',
        votes:45,
        views:90,
        tags:'node.js'
       },
       {
        question:'how to install express.js',
        slug:'how-to-install-express.js',
        votes:35,
        views:305,
        tags:'express.js'
       },
       {
        question:'how to install mongodb',
        slug:'how-to-install-mongodb',
        votes:51,
        views:35,
        tags:'mongodb'
       }  
]

const users=[
    {
    name:'vignesh',
    location:'hyd',
    followers:1800
   },
   {
    name:'praveen',
    location:'nalgonda',
    followers:2000
   },
   {
    name:'vineeth',
    location:'secundrabad',
    followers:1040
   },
   {
    name:'pavan',
    location:'khammam',
    followers:10
   }
   
]
const tags=[
    {
        name:'Expesses.js',
        tags:'express.js,js,express'
    },
    {
        name:'Node.js',
        tags:'node.js,js,node'
    },
    {
        name:'react.js',
        tags:'react.js,js,react'
    },

    {
        name:'monogodb',
        tags:'mongodb'
    }



]

app.get('/',(req,res)=>{
    res.send('home')
})

app.get('/questions',(req,res)=>{
    res.send(questions)
})

app.get('/questions/:slug',(req,res)=>{
    console.log(req.params.slug)
    const slug=req.params.slug
 const found=  questions.find(obj=>obj.slug === slug);
    if(found){
        res.send(found)
    }else{
        res.send('question not found')
    }
  
  
})

app.get('/tags',(req,res)=>{
    res.send(tags)
})

app.get('/users',(req,res)=>{
    res.send(users)
})




app.listen(12345,()=>{
    console.log('server is running....')
})




