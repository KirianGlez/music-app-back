import { Router } from "express";
import { CancionModel, ICancion } from "../models/cancion";

const routes = Router();

routes.get("/", async (req, res) => {
  try {
    const countries: ICancion[] = await CancionModel.find().exec();
    return res.json(countries);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

routes.post("/", async (req, res) => {
  try {
    const Cancion: ICancion = req.body;

    const CancionExists = await CancionModel.findOne({
      name: Cancion.name,
    }).exec();

    if (CancionExists) {
      return res
        .status(409)
        .json({ error: "There is already another Cancion with this name" });
    }

    const newCancion = await CancionModel.create(Cancion);
    return res.status(201).json(newCancion);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

export default routes;
