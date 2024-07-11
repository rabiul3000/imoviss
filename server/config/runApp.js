import { connectDB } from "./database";




const port = process.env.PORT || 5000;



const runApp = (app) => {
    try {
        app.listen(port, () => {
            connectDB();
            console.log(`server: http://localhost:${port}`);
        });

    } catch (error) {
        console.log(error)
    }

}

export default runApp;





