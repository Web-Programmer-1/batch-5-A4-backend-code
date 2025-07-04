import express, { Application } from "express"
import cors from 'cors';
// import { config } from "dotenv";
import config from "./config/index";
import { bookRoutes } from "./MVC/Controller/book.controller";
import { borrowRoutes } from "./MVC/Controller/borrow.controller";





const app:Application = express();

app.use(express.json());
app.use(cors({
    origin:[  'http://localhost:5173' ,'https://batch-5-a4-76k1.vercel.app' ]
}));

// Children Routes Managements systerms 
app.use('/book', bookRoutes)

// Borrows Routes Managements Systerms 
app.use("/borrow", borrowRoutes);






app.get("/", (req, res) => {
    res.send("Libary Management Systerms")
});

app.listen(config.port, () => {

    console.log(`Server On the Port: ${config.port}`)

})





export default app;