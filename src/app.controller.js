import connection from "./DB/connection.js";
import AuthRouter from "./modules/auth/auth.controller.js";

const bootstrap = (app, express) => {
    app.use(express.json());
    app.get('/', (req, res) => res.status(200).json({ message: "Welcome to our saraha app (app.config)" }))
    app.use('/auth', AuthRouter)
    connection()
    app.all("*", (req, res) => res.status(404).json({ message: "API not found (app.config)" }))
}

export default bootstrap;