import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    produktNamn: String,
    beskrivning: String,
    pris: Number,
    // produktBild: String,
    // produktNummer: Number,
    // lagerStatus: Boolean,
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("product", ProductSchema);

export default ProductModel;
