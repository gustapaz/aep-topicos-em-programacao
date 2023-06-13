import { Schema, model } from "mongoose";

const pokemonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: Array,
    required: true,
  },
  status: {
    type: Array,
    required: true,
  },
  dex: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  moves: {
    type: Array,
    required: true,
  },
});

export default model("Pokemon", pokemonSchema);
