-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 07-Dez-2023 às 15:27
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_pizza`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_cardapio`
--

CREATE TABLE `tb_cardapio` (
  `idcardapio` int(11) NOT NULL,
  `ds_sabor` varchar(45) NOT NULL,
  `ds_detalhes` varchar(200) NOT NULL,
  `ds_preco` varchar(45) NOT NULL,
  `ds_img` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_cardapio`
--

INSERT INTO `tb_cardapio` (`idcardapio`, `ds_sabor`, `ds_detalhes`, `ds_preco`, `ds_img`) VALUES
(2, 'Frango com Requeijão', 'Frango, queijo Hut e requeijão cremoso', '29.90', 'https://firebasestorage.googleapis.com/v0/b/imc-digital-p-delivery.appspot.com/o/816x408%2FPizzas%2Ffrango-e-requeijao-v1.jpg?alt=media&token=dde66ed4-4d4e-45f7-bcf9-1f77b249e242'),
(3, 'Brasileira', 'Molho de tomate, queijo Hut, requeijão, presunto e..', '24.90', 'https://storage.googleapis.com/imc-digital-p-delivery.appspot.com/816x408/Pizzas/brasileira.jpg'),
(25, 'Pepperoni', 'Fatias de pepperoni servidas sobre generosa camada de queijo hut e molho de tomate', '26.90', 'https://firebasestorage.googleapis.com/v0/b/imc-digital-p-delivery.appspot.com/o/816x408%2FPizzas%2Fpepperoni-v1.jpg?alt=media&token=33fa61dd-636c-4924-a9e6-407bd16966ac'),
(26, 'Calabresa', 'Fatias de calabresa acompanhadas de cebola, azeitonas verdes e queijo hut', '24.90', 'https://storage.googleapis.com/imc-digital-p-delivery.appspot.com/816x408/Pizzas/calabresa.jpg'),
(27, 'Marguerita', 'Queijo Hut coberto com tomates fatiados com um toque de manjericão', '24.90', 'https://storage.googleapis.com/imc-digital-p-delivery.appspot.com/816x408/Pizzas/marguerita.jpg'),
(28, 'Queijo Hut', 'Queijo Hut servido sobre molho de tomate especial pizza hut', '24.90', 'https://firebasestorage.googleapis.com/v0/b/imc-digital-p-delivery.appspot.com/o/816x408%2FPizzas%2Fqueijo_hut.jpg?alt=media&token=0e3f41b1-5a92-44c5-8693-26b2dc8410d8');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_usuarios`
--

CREATE TABLE `tb_usuarios` (
  `id` int(11) NOT NULL,
  `nm_usuario` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `cep` varchar(20) NOT NULL,
  `rua` varchar(100) NOT NULL,
  `numero` varchar(100) NOT NULL,
  `bairro` varchar(100) NOT NULL,
  `cidade` varchar(100) NOT NULL,
  `uf` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `tb_usuarios`
--

INSERT INTO `tb_usuarios` (`id`, `nm_usuario`, `email`, `password`, `cep`, `rua`, `numero`, `bairro`, `cidade`, `uf`) VALUES
(30, 'Dai', 'dai@gmail.com', '$2b$10$dB.VFZ4BAzItLvpRwdZCvulFlijIiZqSweh96fW6pmwLj/wMuUPJC', '11714490', 'Avenida Ascenso Ferreira', '1234', 'Ribeirópolis', 'Praia Grande', 'SP'),
(31, 'Gui', 'gui@gmail.com', '$2b$10$5Oa0GQl.CG3trw6dn2GZH.zP5EzeImc4L4sgq5P5BbW4ismaO1t66', '11714490', 'Avenida Ascenso Ferreira', '1234', 'Ribeirópolis', 'Praia Grande', 'SP'),
(34, 'Jurandi', 'Jurandi@gmail.com', '$2b$10$fKaAxURTAc0/Mpsmdb8uZOrwpqqOtIhZPab/ze7aQLCDcXMaqLYGq', '11714490', 'Avenida Ascenso Ferreira', '1234', 'Ribeirópolis', 'Praia Grande', 'SP'),
(36, 'Junin99', 'junim244@gmail.com', '$2b$10$Y562JQ95yyy2iPhE85n.y.tdXqkjVlVEk3kiyWSrZiKIYjU/GbCXy', '11714490', 'Avenida Ascenso Ferreira', '123', 'Ribeirópolis', 'Praia Grande', 'SP'),
(37, 'Fulano da Silva', 'fulano@mail.com', '$2b$10$9mLBz8FbmNlXaa6E6Pifhu8oy1oo2bRVcXyiQp.pAWlnkeuEm2hEi', '89026-646', 'Rua Erwin Neumann', '1234', 'Progresso', 'Blumenau', 'SC');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tb_cardapio`
--
ALTER TABLE `tb_cardapio`
  ADD PRIMARY KEY (`idcardapio`);

--
-- Índices para tabela `tb_usuarios`
--
ALTER TABLE `tb_usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_cardapio`
--
ALTER TABLE `tb_cardapio`
  MODIFY `idcardapio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de tabela `tb_usuarios`
--
ALTER TABLE `tb_usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
