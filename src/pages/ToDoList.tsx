import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  List,
  ListItem,
  IconButton,
  ListItemText,
  Typography,
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

interface Activity {
  id: string;
  title: string;
  description: string;
  color: string;
}

const ToDoList: React.FC = () => {
  const navigate = useNavigate();
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const storedActivities = JSON.parse(
      localStorage.getItem("activities") ?? "[]"
    ) as Activity[];
    setActivities(storedActivities);
  }, []);

  const handleDelete = (index: number) => {
    if (index !== undefined) {
      console.log("Deletando atividade com índice:", index);
      const updatedActivities = activities.filter((_, i) => i !== index);
      console.log("Atualizando as atividades:", updatedActivities);
      setActivities(updatedActivities);
      localStorage.setItem("activities", JSON.stringify(updatedActivities));
    } else {
      console.error("Índice da atividade não definido.");
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">ToDo App</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4}>
          <Typography variant="h4" gutterBottom align="center">
            To Dos
          </Typography>
          <Grid container spacing={3}>
            {activities.map((activity, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <List>
                  <ListItem
                    sx={{
                      bgcolor: "#f5f5f5",
                      borderRadius: "8px",
                      padding: "16px",
                      boxShadow: 1,
                      alignItems: "flex-start",
                      "&:hover": {
                        bgcolor: "#e0e0e0",
                      },
                    }}
                    secondaryAction={
                      <>
                        <IconButton
                          aria-label="edit"
                          onClick={() => navigate(`/edit/${index}`)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          aria-label="delete"
                          onClick={() => handleDelete(index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </>
                    }
                  >
                    <Box
                      sx={{
                        bgcolor: activity.color,
                        height: "20px",
                        width: "20px",
                        marginRight: "16px",
                        borderRadius: "50%",
                      }}
                    ></Box>
                    <ListItemText
                      primary={activity.title}
                      secondary={activity.description}
                    />
                  </ListItem>
                </List>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ToDoList;
