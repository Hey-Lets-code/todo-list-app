import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  AppBar,
  Toolbar,
} from "@mui/material";

interface Activity {
  title: string;
  description: string;
  color: string;
}

const EditActivity: React.FC = () => {
  const { index } = useParams<{ index: string }>();
  const navigate = useNavigate();
  const [activity, setActivity] = useState<Activity | null>(null);

  // Carregar a atividade com base no índice
  useEffect(() => {
    if (index !== undefined) {
      const storedActivities = JSON.parse(
        localStorage.getItem("activities") ?? "[]"
      ) as Activity[];
      const foundActivity = storedActivities[parseInt(index)];
      setActivity(foundActivity || null);
    }
  }, [index]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (activity) {
      setActivity({ ...activity, [name]: value });
    }
  };

  const handleSave = () => {
    if (activity && index !== undefined) {
      const storedActivities = JSON.parse(
        localStorage.getItem("activities") ?? "[]"
      ) as Activity[];
      storedActivities[parseInt(index)] = activity;
      localStorage.setItem("activities", JSON.stringify(storedActivities));
      navigate("/todos");
    }
  };

  if (!activity) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Edit Activity</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4}>
          <Typography variant="h4" gutterBottom align="center">
            Edit Activity
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <TextField
              label="Title"
              name="title"
              value={activity.title}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              label="Description"
              name="description"
              value={activity.description}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              label="Color"
              name="color"
              value={activity.color}
              onChange={handleChange}
              variant="outlined"
            />
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default EditActivity;
