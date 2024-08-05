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

/**
 * Interface que define o formato de uma atividade.
 */
interface Activity {
  id: string;
  title: string;
  description: string;
  color: string;
}

const ToDoList: React.FC = () => {
  // Hook para navegação
  const navigate = useNavigate();

  // Estado para armazenar todas as atividades
  const [activities, setActivities] = useState<Activity[]>([]);
  // Estado para armazenar o texto de pesquisa
  const [searchText, setSearchText] = useState<string>("");
  // Estado para armazenar as atividades filtradas com base na pesquisa
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);

  /**
   * Efeito que carrega as atividades armazenadas no local storage quando o componente é montado.
   * Também chama a função de pesquisa para atualizar a lista de atividades filtradas.
   */
  useEffect(() => {
    const storedActivities = JSON.parse(
      localStorage.getItem("activities") ?? "[]"
    ) as Activity[];
    setActivities(storedActivities);
    handleSearch();
  }, []);

  /**
   * Efeito que atualiza a lista de atividades filtradas sempre que o texto de pesquisa ou as atividades mudam.
   */
  useEffect(() => {
    handleSearch();
  }, [searchText, activities]);

  /**
   * Função para excluir uma atividade com base no índice fornecido.
   * Atualiza o estado e o local storage após a exclusão.
   *
   * @param {number} index - Índice da atividade a ser excluída.
   */
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

  /**
   * Função para filtrar atividades com base no texto de pesquisa.
   * Atualiza a lista de atividades filtradas com os resultados da pesquisa.
   */
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

  /**
   * Função chamada quando o texto de pesquisa muda.
   * Atualiza o estado do texto de pesquisa.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - Evento de alteração do campo de texto.
   */
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
              label="Buscar"
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
