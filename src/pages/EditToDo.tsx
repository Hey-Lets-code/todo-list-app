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

// Interface que define a estrutura dos dados de uma atividade
interface Activity {
  title: string;
  description: string;
  color: string;
}

/**
 * Componente para editar uma atividade existente na aplicação To-Do.
 * Permite ao usuário modificar o título, descrição e cor da atividade selecionada.
 * Os dados são carregados do localStorage com base no índice fornecido na URL.
 * Após a edição, as alterações são salvas no localStorage e o usuário é redirecionado para a lista de atividades.
 *
 * Utiliza os seguintes componentes do Material-UI:
 * - AppBar: Para a barra de navegação superior.
 * - Toolbar: Para o contêiner da barra de navegação.
 * - Typography: Para exibir textos.
 * - Container e Box: Para a estrutura e layout do formulário.
 * - TextField: Para os campos de entrada de título e descrição.
 * - FormControl: Para o controle de seleção da cor.
 * - InputLabel: Para o rótulo do campo de seleção.
 * - Select e MenuItem: Para a seleção da cor da atividade.
 * - Button: Para os botões de salvar e navegar para a página anterior.
 *
 * @component
 * @returns {JSX.Element} Componente que renderiza um formulário para editar uma atividade.
 */
const EditActivity: React.FC = () => {
  // Obtém o índice da atividade a ser editada da URL
  const { index } = useParams<{ index: string }>();

  // Hook para navegação programática
  const navigate = useNavigate();

  // Estado para armazenar a atividade a ser editada
  const [activity, setActivity] = useState<Activity | null>(null);

  /**
   * Carrega a atividade com base no índice fornecido na URL.
   * - Obtém a lista de atividades do localStorage.
   * - Encontra a atividade com base no índice e atualiza o estado.
   *
   * @function
   */
  useEffect(() => {
    if (index !== undefined) {
      const storedActivities = JSON.parse(
        localStorage.getItem("activities") ?? "[]"
      ) as Activity[];
      const foundActivity = storedActivities[parseInt(index)];
      setActivity(foundActivity || null);
    }
  }, [index]);

  /**
   * Função chamada quando o valor de um campo de texto muda.
   * Atualiza o estado da atividade com base no nome e valor do campo alterado.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - Evento de mudança no campo de texto.
   * @function
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (activity) {
      setActivity({ ...activity, [name]: value });
    }
  };

  /**
   * Função chamada quando o botão "Save" é clicado.
   * Atualiza a atividade no localStorage e navega de volta para a lista de atividades.
   *
   * @function
   */
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

  return (
    <div>
      {/* Barra de navegação superior */}
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
            {/* Campo de entrada para o título da atividade */}
            <TextField
              label="Title"
              name="title"
              value={activity.title}
              onChange={handleChange}
              variant="outlined"
            />
            {/* Campo de entrada para a descrição da atividade */}
            <TextField
              label="Description"
              name="description"
              value={activity.description}
              onChange={handleChange}
              variant="outlined"
            />
            {/* Controle de seleção para escolher a cor da atividade */}
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
            {/* Botão para salvar as alterações */}
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
            {/* Botão para retornar à página anterior */}
            <Button onClick={() => navigate("/todos")}>Previous</Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default EditActivity;
