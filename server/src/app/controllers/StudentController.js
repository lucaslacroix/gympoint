import Student from '../models/Student';

class StudentController {
    async store(req, res) {
        const { name, email, age, weight, height } = req.body;

        const studentExists = await Student.findOne({
            where: { email },
        });

        if (studentExists) {
            return res
                .status(401)
                .json({ error: 'This student already exists' });
        }

        const student = await Student.create({
            name,
            email,
            age,
            weight,
            height,
        });

        return res.json(student);
    }
}

export default new StudentController();
