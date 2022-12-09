import multer from 'multer';
import { Router } from 'express';
import { readdir } from 'fs/promises';
import { ensureAuthenticated, ensureAdmin } from '../config/auth.js';
import {
  addProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/images/');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
  async fileFilter(req, file, cb) {
    const files = await readdir('public/images/');

    if (files.includes(file.originalname)) {
      cb(null, false);
    } else {
      cb(null, true);
    }
  },
});

const upload = multer({ storage });

const router = Router();

// Limit access to admin only
router.use(ensureAuthenticated, ensureAdmin);

// @route   POST /products
// @desc    Add a product
// @access  Private/Admin
router.post('/', upload.single('image'), addProduct);

// @route   PUT /products
// @desc    Update a product
// @access  Private/Admin
router.put('/:id', upload.single('image'), updateProduct);

// @route   DELETE /products/:id
// @desc    Delete a product
// @access  Private/Admin
router.delete('/:id', deleteProduct);

export default router;
