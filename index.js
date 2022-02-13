const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})




app.post("/link",(req, res)=>{

    
})

app.listen(PORT, () => {console.log("sever is live"); })

