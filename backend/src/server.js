const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Backend is running' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Execute C program
app.post('/api/execute', (req, res) => {
  const { project, input } = req.body;

  // Validate project
  const validProjects = ['minishell', 'philosophers', 'push-swap'];
  if (!validProjects.includes(project)) {
    return res.status(400).json({ error: 'Invalid project' });
  }

  // Build command based on project
  let command;
  
  switch(project) {
    case 'minishell':
      command = `./c_programs/minishell/minishell -c "${input}"`;
      break;
    case 'philosophers':
      command = `./c_programs/philosophers/philo ${input}`;
      break;
    case 'push-swap':
      command = `./c_programs/push_swap/push_swap ${input}`;
      break;
    default:
      return res.status(400).json({ error: 'Unknown project' });
  }

  // Execute with timeout
  exec(command, { timeout: 5000 }, (error, stdout, stderr) => {
    if (error) {
      return res.json({
        output: stderr || error.message,
        error: true
      });
    }
    
    res.json({
      output: stdout || stderr || 'Command executed successfully',
      error: false
    });
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});