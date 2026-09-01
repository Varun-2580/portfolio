const Project = require('../models/Project');
const initialProjects = require('../utils/seedData');

let memoryProjects = [...initialProjects];

// GET /api/v1/projects
exports.getProjects = async (req, res) => {
  try {
    const { category } = req.query;
    let query = {};
    if (category && category !== 'All') {
      query.category = category;
    }

    // Try fetching from MongoDB if connected
    if (Project.db && Project.db.readyState === 1) {
      const dbProjects = await Project.find(query).sort({ orderIndex: 1, createdAt: -1 });
      if (dbProjects.length > 0) {
        return res.status(200).json({ success: true, count: dbProjects.length, data: dbProjects });
      }
    }

    // Fallback to in-memory seed dataset
    let filtered = memoryProjects;
    if (category && category !== 'All') {
      filtered = memoryProjects.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    return res.status(200).json({
      success: true,
      count: filtered.length,
      data: filtered,
      source: 'repository'
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ success: false, message: 'Server error retrieving project catalog' });
  }
};

// GET /api/v1/projects/:id
exports.getProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    if (Project.db && Project.db.readyState === 1) {
      const dbProject = await Project.findOne({
        $or: [{ _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }, { slug: id }]
      });
      if (dbProject) {
        return res.status(200).json({ success: true, data: dbProject });
      }
    }

    const found = memoryProjects.find(p => p._id === id || p.slug === id);
    if (!found) {
      return res.status(404).json({ success: false, message: 'Project entry not found' });
    }

    res.status(200).json({ success: true, data: found });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error retrieving single project' });
  }
};

// POST /api/v1/projects
exports.createProject = async (req, res) => {
  try {
    const newProjectData = req.body;
    if (!newProjectData.title || !newProjectData.category) {
      return res.status(400).json({ success: false, message: 'Title and category are required' });
    }

    newProjectData.slug = newProjectData.slug || newProjectData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    newProjectData._id = new Date().getTime().toString();

    if (Project.db && Project.db.readyState === 1) {
      const project = await Project.create(newProjectData);
      return res.status(201).json({ success: true, data: project });
    }

    memoryProjects.push(newProjectData);
    res.status(201).json({ success: true, data: newProjectData });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create project record' });
  }
};

// PUT /api/v1/projects/:id
exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    if (Project.db && Project.db.readyState === 1) {
      const updated = await Project.findByIdAndUpdate(id, req.body, { new: true });
      if (updated) return res.status(200).json({ success: true, data: updated });
    }

    const idx = memoryProjects.findIndex(p => p._id === id || p.slug === id);
    if (idx !== -1) {
      memoryProjects[idx] = { ...memoryProjects[idx], ...req.body };
      return res.status(200).json({ success: true, data: memoryProjects[idx] });
    }

    res.status(404).json({ success: false, message: 'Project not found for update' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating project' });
  }
};

// DELETE /api/v1/projects/:id
exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    if (Project.db && Project.db.readyState === 1) {
      await Project.findByIdAndDelete(id);
    }
    memoryProjects = memoryProjects.filter(p => p._id !== id && p.slug !== id);
    res.status(200).json({ success: true, message: 'Project removed successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting project' });
  }
};
