//function for add product

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image1[1];

    const image3 = req.files.image3 && req.files.image1[2];
    const image4 = req.files.image4 && req.files.image1[3];

    console.log(
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller
    );

    console.log(image1, image2, image3, image4);

    res.json({});
  } catch (err) {
    console.log(err);

    res.json({ success: false, message: err.message });
  }
};

//function for listproduct

const listProduct = async (req, res) => {};

//remove product

const removeProduct = async (req, res) => {};

const singleProduct = async (req, res) => {};

export { addProduct, listProduct, removeProduct, singleProduct };
