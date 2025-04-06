
const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/analyze', upload.single('photo'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image uploaded' });
  }

  // Mock AI logic
  const result = {
    auraColor: "Violet",
    mood: "Peaceful but curious",
    personality: "The Mystic",
    compatibleWith: "Blue & Indigo Auras"
  };

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
