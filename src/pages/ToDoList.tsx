import React, { useState, useEffect } from "react";
import {
  Container,
  List,
  ListItem,
  IconButton,
  ListItemText,
  Typography,
  Box,
  AppBar,
  Toolbar,
  Grid,
  TextField,
  Button,
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
  const [searchText, setSearchText] = useState<string>("");
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const storedActivities = JSON.parse(
      localStorage.getItem("activities") ?? "[]"
    ) as Activity[];
    setActivities(storedActivities);
    handleSearch();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchText, activities]);

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

  // Filtro de atividades com base na cor de pesquisa
  const handleSearch = () => {
    let results = activities;
    if (searchText !== "") {
      results = activities.filter(
        (activity) =>
          activity.title.toLowerCase().includes(searchText.toLowerCase()) ||
          activity.description.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    setFilteredActivities(results);
  };

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">To-Do App</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4}>
          <Typography variant="h4" gutterBottom align="center">
            To-Do List
          </Typography>
          <Box mb={4}>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              value={searchText}
              onChange={handleSearchTextChange}
            />
          </Box>
          <Box>
            <Button onClick={() => navigate("/create-activity")}>
              Add a new to-do
            </Button>
          </Box>
          <List>
            {filteredActivities.map((activity, index) => (
              <ListItem
                key={index}
                sx={{
                  bgcolor: "#f5f5f5",
                  borderRadius: "8px",
                  padding: "16px",
                  boxShadow: 1,
                  marginBottom: "24px", // Aumentar o espaçamento entre os itens
                  "&:hover": {
                    bgcolor: "#e0e0e0",
                  },
                }}
              >
                <Grid container alignItems="center">
                  <Grid item>
                    <Box
                      sx={{
                        bgcolor: activity.color,
                        height: "20px",
                        width: "20px",
                        marginRight: "16px",
                        borderRadius: "50%",
                      }}
                    ></Box>
                  </Grid>
                  <Grid item xs>
                    <ListItemText
                      primary={activity.title}
                      secondary={activity.description}
                    />
                  </Grid>
                  <Grid item>
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
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </div>
  );
};

export default ToDoList;
