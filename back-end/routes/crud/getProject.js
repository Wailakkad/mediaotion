const express = require('express');
const router = express.Router();
const { getAllProjects , AddProject , DeleteProject } = require('../../controllers/crud/projects');
const VerifyToken = require('../../outils/VerificationToken.js');
const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/images/portfolio'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

router.get('/projects', getAllProjects);

router.post('/Addproject', VerifyToken ,  upload.single('image') , AddProject);

router.delete('/DeleteProject/:id', DeleteProject);

module.exports = router;
