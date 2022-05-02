import ProductModel from "../models/Product.model.js";
import StatusCodes from "../helpers/StatusCodes.js";

const getAllProducts = async (req, res) => {
  try {
    const response = await ProductModel.find();
    res.status(StatusCodes.OK).send(response);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  const product = new ProductModel({
    produktNamn: req.body.produktNamn,
    beskrivning: req.body.beskrivning,
    pris: req.body.pris,
  });

  try {
    const response = await product.save();
    res.status(StatusCodes.CREATED).send(response);
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send({ message: err.message });
  }
};

const getProductWithId = async (req, res) => {
  try {
    const response = await ProductModel.findById(req.params.productId);
    res.status(StatusCodes.OK).send(response);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message:
        "Error occured while trying to retrive product with id:" +
        req.params.productId,
      error: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    if (!req.body) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .send({ message: "Content can not be empty!" });
    }
    const response = await ProductModel.findByIdAndUpdate(
      req.params.productId,
      {
        produktNamn: req.body.produktNamn,
        beskrivning: req.body.beskrivning,
        pris: req.body.pris,
      },
      { new: true }
    );
    res.status(StatusCodes.OK).send(response);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message:
        "Error occured while trying to update Product with id:" +
        req.params.productId,
      error: err.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const response = await ProductModel.findByIdAndDelete(req.params.productId);
    res.status(StatusCodes.OK).send({
      message: `Product: ${response.produktNamn}, deleted successfully!`,
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message:
        "Error occured while trying to delete Produkt with id:" +
        req.params.productId,
      error: err.message,
    });
  }
};

export default {
  getAllProducts,
  createProduct,
  getProductWithId,
  updateProduct,
  deleteProduct,
};
