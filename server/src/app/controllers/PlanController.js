import Plan from '../models/Plan';

class PlanController {
    async index(req, res) {
        const plans = await Plan.findAll();

        return res.json(plans);
    }

    async store(req, res) {
        const { title, duration, price } = req.body;

        const plan = await Plan.create({
            title,
            duration,
            price,
        });

        return res.json(plan);
    }

    async update(req, res) {
        const plan_id = req.params.planId;

        const plan = await Plan.findByPk(plan_id);

        plan.update(req.body);

        return res.json(plan);
    }

    async delete(req, res) {
        const plan_id = req.params.planId;

        const plan = await Plan.findByPk(plan_id);

        plan.destroy();

        return res.json(plan);
    }
}

export default new PlanController();
