import express from "express"
import api from "./routes/index"
import dotenv from "dotenv"
import helmet from "helmet"

dotenv.config()

const port = 3001

const app = express()
app.use(helmet()); // Ajout de middleware de sécurité
app.disable('x-powered-by'); // Désactiver l'en-tête X-Powered-By (sonarqube security)
app.use(express.json())
app.use('/V1', api)

const router = express.Router()
router.get("/", async (req, res) => {
    res.status(200).json({message: "Claquetteuuuh api works !"})
}) 

app.use("/", router)

const server = app.listen(port, () => {
    if (process.env.CURRENT_MODE === 'development') {
        console.info(`   >> Using port: [${port}] | http://localhost:${port} `)
    } else {
        console.info(`   >> Using port: [${port}]`)
    }
})

export default server