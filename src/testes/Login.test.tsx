import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../pages/Login";

test("renders login form and handles submit", () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  // Verifica se o título está presente
  expect(screen.getByText(/Login/i)).toBeInTheDocument();

  // Simula a digitação no campo de email
  fireEvent.change(screen.getByLabelText(/E-mail/i), {
    target: { value: "test@example.com" },
  });

  // Simula a digitação no campo de senha
  fireEvent.change(screen.getByLabelText(/Password/i), {
    target: { value: "password123" },
  });

  // Simula o clique no botão de submit
  fireEvent.click(screen.getByText(/Login/i));

  // Verifica se a navegação para "/todos" ocorreu
  // (depende de como você está testando a navegação, pode ser necessário ajustar)
});
