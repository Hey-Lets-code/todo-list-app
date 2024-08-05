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
 * Componente de login para a aplicação To-Do.
 * Permite que o usuário insira um e-mail e uma senha para fazer login.
 * Após o envio do formulário, o usuário é redirecionado para a página de atividades.
 *
 * Utiliza os seguintes componentes do Material-UI:
 * - Container: Para definir a largura máxima e o alinhamento do formulário.
 * - Box: Para estruturar e estilizar o layout do formulário.
 * - Typography: Para exibir o título da página de login.
 * - TextField: Para os campos de entrada de e-mail e senha.
 * - Button: Para o botão de envio do formulário.
 * - Link: Para fornecer um link para a página de registro.
 *
 * @component
 * @returns {JSX.Element} Componente que renderiza o formulário de login.
 */
const Login: React.FC = () => {
  // Hook para navegação
  const navigate = useNavigate();

  // Estados para armazenar o e-mail e a senha do usuário
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  /**
   * Função chamada quando o formulário é enviado.
   * - Previne o comportamento padrão do formulário.
   * - Lógica do login (a ser implementada).
   * - Após o login ser aprovado, redireciona para a página de atividades.
   *
   * @param {React.FormEvent} event - Evento de submissão do formulário.
   * @function
   */
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica do login
    // Após o login ser aprovado, redireciona para a página de atividades
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
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
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
          {/* Botão para enviar o formulário de login */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
          {/* Link para a página de registro, caso o usuário não tenha uma conta */}
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link href="/register" variant="body2">
              Don't have an account? Sign up
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
