const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const youtube = require("ytdl-core")

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.post("/inputlink",(req, res)=>{

 var inputlink = req.body.link
 
  
    youtube.getInfo(inputlink).then((data)=>{
        const thumbnail =  data.player_response.videoDetails.thumbnail.thumbnails[2].url
        const videolink = data.player_response.streamingData.formats[1].url

        res.send(`<center><img src=\"${thumbnail}\"></center><br><br><center><a href=\"${videolink}\">Download This Video </a></center><br><center><a href="/">Download More Videos</a></center>`)
    }).catch(()=>{res.send("no file found")})
  
   
})


app.listen(PORT, () => {console.log("sever is live"); })

