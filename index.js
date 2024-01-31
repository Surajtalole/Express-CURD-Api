// const http = require("http");


const express = require('express');
const morgan= require('morgan')
const server =express();
 const productRouter =require('./routes/product');
const userRouter =require('./routes/user');

server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);
//MVC model-view-controller


server.listen(8080,()=>{
  console.log('server started')
});
// server.use((req,res,next)=>{
// console.log(req.method,req.ip,req.hostname,new Date(),req.get('User-Agent));
// next ();
// });

//  


//API-end point 

// server.get('/products',(req,res)=>{
//   res.json(products)
// })

//create POST /products
// server.post('/products',(req,res)=>{
//   console.log(req.body);
//   products.push(req.body);
//   res.json(req.body);
// })
//read GET /products
// server.get('/products/:id',(req,res)=>{
//   const id= +req.params.id;
//  const product= products.find(p=>p.id===id)
//   res.json(product)
// })
//Update PUT /products/:id
// server.put('/products/:id',(req,res)=>{
//   const id= +req.params.id;
//  const productIndex= products.findIndex(p=>p.id===id)
//  products.splice(productIndex,1,{...res.body,id:id})
//   res.status(201).json();
// })

//Delete
// server.delete('/products/:id',(req,res)=>{
//   const id= +req.params.id;
//  const productIndex= products.findIndex(p=>p.id===id)
//  const product = products[productIndex]; 
//  products.splice(productIndex,1)
//   res.status(201).json(product);
// })

// server.post('/',(req,res)=>{
//   res.json({type:'POST'})
// })

// server.put('/',(req,res)=>{
//   res.json({type:'PUT'})
// })

// server.delete('/',(req,res)=>{
//   res.json({type:'DELETE'})
// })

// server.patch('/',(req,res)=>{
//   res.json({type:'PATCH'})
// })

// server.get("/demo",(req,res)=>{
//   // res.send('<h1>hello</h1>')
//   // res.sendFile('D:\MERN Stack\index.html')
//   // res.json(products)
//   // res.sendStatus(201).send('<h1>hello</h1>');
// })



























//node
// const data = { age: 20 };
// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   if(req.url.startsWith('/product')){
//     const id =req.url.split('/')[2]
//     const product = products.find(p=>p.id===(+id))
//     res.setHeader("Content-Type", "text/html");

//        let modifiedIndex = index.replace('**title',product.title)
//        .replace('**url**',product.thumbnail)
//         res.end(modifiedIndex);
//         return;
//   }

// switch(req.url){
// case '/index' :
//     res.setHeader("Content-Type", "text/html");
//     res.end(index);
//     break;
// case '/api' :
//     res.setHeader("Content-Type", "application/json");
//     res.end(JSON.stringify(data));
//     break;

// default:
//     res.writeHead(400);
//     res.end(); 
// }
  
  
// });


