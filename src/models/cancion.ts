import { model, Schema, Document } from "mongoose";

interface ICancion extends Document {
  name: string;
  iso2code: string;
}

const CancionSchema = new Schema({
  titulo: {
    type: String,
    unique: true,
  },
  iso2code: {
    type: String,
  },
});

const CancionModel = model<ICancion>("Cancion", CancionSchema);

export { CancionModel, ICancion };
