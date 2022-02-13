const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const youtube = require("ytdl-core")

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.post("/inputlink",(req, res)=>{

 const inputlink = req.body.link
console.log(inputlink); 
    youtube.getInfo(inputlink).then((data)=>{
        const thumbnail =  data.player_response.videoDetails.thumbnail.thumbnails[2].url
        const videolink = data.player_response.streamingData.formats[1].url

        res.send(`<center><img src=\"${thumbnail}\"></center><br><br><center><a href=\"${videolink}\">Download This Video </a></center><br><center><a href="/">Download More Videos</a></center>`)
    })
   
})
app.get("/daksh", (req, res)=>{

    youtube.getInfo("https://www.youtube.com/watch?v=jD7FnbI76Hg").then((data)=>{
      
        res.json(data)


    }) 

})

app.listen(PORT, () => {console.log("sever is live"); })

