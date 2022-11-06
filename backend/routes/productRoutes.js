import { Router } from 'express';
import multer from 'multer';
import { readdir } from 'fs/promises';
import protect from '../middleware/authMiddleware.js';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'backend/public/');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
  async fileFilter(req, file, cb) {
    const files = await readdir('backend/public/');

    if (files.includes(file.originalname)) {
      cb(null, false);
    } else {
      cb(null, true);
    }
  },
});

const upload = multer({ storage });

const router = Router();

router
  .route('/')

  // @route   GET /api/products
  // @desc    Get all products
  // @access  Public
  .get(getProducts)

  // @route   POST /api/products
  // @desc    Create a product
  // @access  Private
  .post(protect, upload.single('image'), createProduct);

router
  .route('/:id')

  // @route   GET /api/products/:id
  // @desc    Get a product by id
  // @access  Private
  .get(protect, getProductById)

  // @route   PUT /api/products/:id
  // @desc    Update a product
  // @access  Private
  .put(protect, upload.single('image'), updateProduct)

  // @route   DELETE /api/products/:id
  // @desc    Delete a product
  // @access  Private
  .delete(protect, deleteProduct);

export default router;
