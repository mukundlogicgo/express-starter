const express = require("express")
const morgan = require("morgan")
const app = express()

const port = process.env.PORT || 8080

app.use(express.json())
app.use(morgan("dev"))

app.get("/", async (req, res) => {
    return res.status(200).json({
        message: "server is running."
    })
})

app.listen(port, () => console.log(`server running ${port}`))