export const validation = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate({...req.body, ...req.params}, { abortEarly: false });

        if (error) {
            // const message = error.details.map(i => i.message).join(', ');
            const message = error.details.map(i => i.message);
            return res.status(400).json({ Error: "Middleware validation error", message: message });
        }

        next();
    }
};