const db = require('../../database/connection'); // Assuming you move DB logic to db.js


const getAllProjects = (req, res) => {
  const sql = 'SELECT * FROM projects';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching projects:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }

    res.status(200).json(results);
  });
};



const AddProject = (req, res) => {
  const { tittle, website_url } = req.body;
  const image_url = req.file ?  req.file.filename : null;

  if (!tittle || !image_url ||  !website_url) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const sql = 'INSERT INTO projects (tittle, image_url, website_url) VALUES (?, ?, ?)';
  const values = [tittle, image_url, website_url];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error adding project:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }

    res.status(201).json({ message: 'Project added successfully', projectId: results.insertId });
  });
}; 


const DeleteProject = (req , res)=>{
  const {id} = req.params;
  const sql = 'DELETE FROM projects WHERE id = ?';
  db.query(sql , [id] , (err, result)=>{
    if(err){
      console.error('Error deleting project:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.status(200).json({ message: 'Project deleted successfully' });
  })
}



module.exports = {
  getAllProjects,
  AddProject,
  DeleteProject
};
