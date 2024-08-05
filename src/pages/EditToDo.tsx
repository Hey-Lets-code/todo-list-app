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
  MenuItem,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";

interface Activity {
  title: string;
  description: string;
  color: string;
}

const EditActivity: React.FC = () => {
  const { index } = useParams<{ index: string }>(); // não tenho certeza se o index será capturado aqui ou se existe
  const navigate = useNavigate(); // permite a navegação pela aplicação criando uma função para navegação através do useNavigate
  const [activity, setActivity] = useState<Activity | null>(null);

  // Carregar a atividade com base no índice, além disso o useEffect serve para carregar dados quando o componente monta
  useEffect(() => {
    if (index !== undefined) {
      const storedActivities = JSON.parse(
        localStorage.getItem("activities") ?? "[]"
      ) as Activity[];
      const foundActivity = storedActivities[parseInt(index)];
      setActivity(foundActivity || null);
    }
  }, [index]);

  // Função utilizada para quando o valor de um campo de texto muda. Atualiza a propriedade correspondente da atividade ('activity)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (activity) {
      setActivity({ ...activity, [name]: value });
    }
  };

  // Função chamada quando o botão "Save" é clicado. Atualiza a atividade no local storage e navega de volta para a lista de atividades
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

  // Mostra o texto "Loading..." enquanto a atividade é carregada
  if (!activity) {
    return <div>Loading...</div>;
  }

  // AppBar, Toolbar e Typography: basicamente cria a barra de navegação com o título "Edit Activity"
  // Container, Box: define a estrutura e layout do formulário de edição
  // TextField: campos de texto para editar 'title', 'description' e 'color'
  // Button: é onde eu salvo as mudanças
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
            Edit your to-do
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
            <FormControl fullWidth>
              <InputLabel>Color</InputLabel>
              <Select
                value={activity.color}
                label="Color"
                onChange={(e) =>
                  setActivity({ ...activity, color: e.target.value })
                }
              >
                <MenuItem value={"red"}>Red</MenuItem>
                <MenuItem value={"orange"}>Orange</MenuItem>
                <MenuItem value={"green"}>Green</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
            <Button onClick={() => navigate("/todos")}>Previous</Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default EditActivity;
