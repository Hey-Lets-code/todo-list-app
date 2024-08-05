import {
  AppBar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ActivityForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const navigate = useNavigate();

  const addActivity = () => {
    const newActivity = { title, description, color };
    // Sempre que for rodar em outra maquina é preciso inicializar um array vazio, para ser salvo no banco de dados do local storage, exemplo: const allActiviites = [];
    const stringifiedActivities = localStorage.getItem("activities");
    // Ternário para identificar se existe já conteúdo no banco de dados do local storage, se não exisitr ele cria um array vazio.
    const allActivities = stringifiedActivities
      ? JSON.parse(stringifiedActivities)
      : [];
    allActivities.push(newActivity);
    localStorage.setItem("activities", JSON.stringify(allActivities));
    navigate("/todos");
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">To-Do App</Typography>
        </Toolbar>
      </AppBar>
      <Box my={4}>
        <Typography variant="h4" gutterBottom align="center">
          Create a new to-do
        </Typography>
      </Box>
      <FormControl fullWidth>
        <InputLabel>Color</InputLabel>
        <Select
          value={color}
          label="Color"
          onChange={(e) => setColor(e.target.value)}
        >
          <MenuItem value={"red"}>Red</MenuItem>
          <MenuItem value={"orange"}>Orange</MenuItem>
          <MenuItem value={"green"}>Green</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Title"
        type="text"
        fullWidth
        margin="normal"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Description"
        type="text"
        fullWidth
        margin="normal"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        onClick={addActivity}
        sx={{ mt: 2 }}
      >
        Create
      </Button>
      <Button onClick={() => navigate("/todos")}>Previous</Button>
    </div>
  );
};

export default ActivityForm;
