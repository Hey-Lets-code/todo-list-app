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

/**
 * Componente de formulário para criar uma nova atividade na aplicação To-Do.
 * Este componente permite que o usuário insira um título, uma descrição e escolha uma cor para a nova atividade.
 * Os dados da atividade são armazenados no localStorage e o usuário é redirecionado para a página de atividades.
 *
 * Utiliza os seguintes componentes do Material-UI:
 * - AppBar: Para a barra de navegação superior.
 * - Box: Para adicionar espaçamento ao redor do conteúdo.
 * - Button: Para os botões de criação e navegação.
 * - FormControl: Para o controle do campo de seleção.
 * - InputLabel: Para o rótulo do campo de seleção.
 * - MenuItem: Para as opções de cor na seleção.
 * - Select: Para a seleção da cor da atividade.
 * - TextField: Para os campos de entrada de título e descrição.
 * - Toolbar: Para o contêiner da barra de navegação.
 * - Typography: Para a exibição de textos.
 *
 * @component
 * @returns {JSX.Element} Componente que renderiza um formulário para adicionar atividades.
 */
const ActivityForm: React.FC = () => {
  // Estado para armazenar o título da atividade
  const [title, setTitle] = useState<string>("");

  // Estado para armazenar a descrição da atividade
  const [description, setDescription] = useState<string>("");

  // Estado para armazenar a cor selecionada da atividade
  const [color, setColor] = useState<string>("");

  // Hook para navegação programática
  const navigate = useNavigate();

  /**
   * Função para adicionar uma nova atividade ao localStorage e redirecionar para a lista de atividades.
   * - Cria um objeto de atividade com título, descrição e cor.
   * - Obtém a lista de atividades existente do localStorage. Se não existir, cria um array vazio.
   * - Adiciona a nova atividade à lista de atividades.
   * - Atualiza o localStorage com a lista de atividades atualizada.
   * - Redireciona para a página de atividades.
   */
  const addActivity = () => {
    const newActivity = { title, description, color };

    // Obtém o conteúdo do localStorage para atividades
    const stringifiedActivities = localStorage.getItem("activities");

    // Verifica se existem atividades armazenadas; se não, inicializa um array vazio
    const allActivities = stringifiedActivities
      ? JSON.parse(stringifiedActivities)
      : [];

    // Adiciona a nova atividade à lista existente
    allActivities.push(newActivity);

    // Salva a lista atualizada de atividades no localStorage
    localStorage.setItem("activities", JSON.stringify(allActivities));

    // Navega para a página de atividades
    navigate("/todos");
  };

  return (
    <div>
      {/* Barra de navegação superior */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">To-Do App</Typography>
        </Toolbar>
      </AppBar>
      {/* Container para espaçamento e título do formulário */}
      <Box my={4}>
        <Typography variant="h4" gutterBottom align="center">
          Create a new to-do
        </Typography>
      </Box>
      {/* Controle de seleção para escolher a cor da atividade */}
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
      {/* Campo de entrada para o título da atividade */}
      <TextField
        label="Title"
        type="text"
        fullWidth
        margin="normal"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* Campo de entrada para a descrição da atividade */}
      <TextField
        label="Description"
        type="text"
        fullWidth
        margin="normal"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {/* Botão para criar a nova atividade */}
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
      {/* Botão para retornar à página anterior */}
      <Button onClick={() => navigate("/todos")}>Previous</Button>
    </div>
  );
};

export default ActivityForm;
