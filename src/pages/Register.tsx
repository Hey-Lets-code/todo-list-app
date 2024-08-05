import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

/**
 * Componente de registro para a aplicação To-Do.
 * Permite que o usuário insira um nome, e-mail e senha para criar uma nova conta.
 * Após o envio do formulário, o usuário é redirecionado para a página de atividades.
 *
 * Utiliza os seguintes componentes do Material-UI:
 * - Container: Para definir a largura máxima e o alinhamento do formulário.
 * - Box: Para estruturar e estilizar o layout do formulário.
 * - Typography: Para exibir o título da página de registro.
 * - TextField: Para os campos de entrada de nome, e-mail e senha.
 * - Button: Para o botão de envio do formulário.
 * - Link: Para fornecer um link para a página de login.
 *
 * @component
 * @returns {JSX.Element} Componente que renderiza o formulário de registro.
 */
const Register: React.FC = () => {
  // Hook para navegação programática
  const navigate = useNavigate();

  // Estados para armazenar o nome, e-mail e senha do usuário
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  /**
   * Função chamada quando o formulário é enviado.
   * - Previne o comportamento padrão do formulário.
   * - Lógica de registro (a ser implementada).
   * - Após o registro ser concluído, redireciona para a página de atividades.
   *
   * @param {React.FormEvent} event - Evento de submissão do formulário.
   * @function
   */
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica de registro
    // Após o registro ser aprovado, redireciona para a página de atividades
    navigate("/todos");
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          borderRadius: 4,
          boxShadow: 2,
          backgroundColor: "background.default",
          border: "1px solid #ccc",
        }}
      >
        <Typography variant="h2" component="h1">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          {/* Campo de entrada para o nome do usuário */}
          <TextField
            label="Name"
            type="text"
            fullWidth
            margin="normal"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* Campo de entrada para o e-mail do usuário */}
          <TextField
            label="E-mail"
            type="email"
            fullWidth
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Campo de entrada para a senha do usuário */}
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Botão para enviar o formulário de registro */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Register
          </Button>
          {/* Link para a página de login, caso o usuário já tenha uma conta */}
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link href="/login" variant="body2">
              Already have an account? Log in
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
