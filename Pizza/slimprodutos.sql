-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 21-Out-2023 às 03:49
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `slimprodutos`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

CREATE TABLE `categoria` (
  `ID` int(11) NOT NULL,
  `NOME` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`ID`, `NOME`) VALUES
(1, 'Categoria 1'),
(2, 'Categoria 2'),
(3, 'Categoria 3'),
(4, 'Categoria 4'),
(5, 'Categoria 5');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pizzas`
--

CREATE TABLE `pizzas` (
  `id` bigint(20) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `descricao` varchar(1000) DEFAULT NULL,
  `preco` decimal(9,2) NOT NULL,
  `imagem` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pizzas`
--

INSERT INTO `pizzas` (`id`, `nome`, `descricao`, `preco`, `imagem`) VALUES
(4, 'Peperonni', 'Pepperoni Fatias de pepperoni servidas sobre generosa camada de..', '26.90', 'https://firebasestorage.googleapis.com/v0/b/imc-digital-p-delivery.appspot.com/o/816x408%2FPizzas%2Fpepperoni-v1.jpg?alt=media&token=33fa61dd-636c-4924-a9e6-407bd16966ac'),
(5, 'Frango com Requeijão', 'Frango, queijo Hut e requeijão cremoso', '29.90', 'https://firebasestorage.googleapis.com/v0/b/imc-digital-p-delivery.appspot.com/o/816x408%2FPizzas%2Ffrango-e-requeijao-v1.jpg?alt=media&token=dde66ed4-4d4e-45f7-bcf9-1f77b249e242'),
(6, 'Brasileira', 'Molho de tomate, queijo Hut, requeijão, presunto e', '24.90', 'https://storage.googleapis.com/imc-digital-p-delivery.appspot.com/816x408/Pizzas/brasileira.jpg'),
(7, 'Calabresa', 'Fatias de calabresa acompanhadas de cebola..', '24.90', 'https://storage.googleapis.com/imc-digital-p-delivery.appspot.com/816x408/Pizzas/calabresa.jpg'),
(8, 'Marguerita', 'Queijo Hut coberto com tomates fatiados com um...', '24.90', 'https://storage.googleapis.com/imc-digital-p-delivery.appspot.com/816x408/Pizzas/marguerita.jpg'),
(9, 'Queijo Hut', 'Queijo Hut servido sobre molho de tomate especial', '24.90', 'https://firebasestorage.googleapis.com/v0/b/imc-digital-p-delivery.appspot.com/o/816x408%2FPizzas%2Fqueijo_hut.jpg?alt=media&token=0e3f41b1-5a92-44c5-8693-26b2dc8410d8'),
(10, 'Pepperoni com Requeijão', 'Fatias de pepperoni servidas sobre uma camada de queijo hut e cobertas por tiras de requeijão', '26.00', 'https://firebasestorage.googleapis.com/v0/b/imc-digital-p-delivery.appspot.com/o/816x408%2FPizzas%2Fpepperoni_e_requeijao.jpg?alt=media&token=2d98297c-e8fe-4cad-9a57-bd7db59e6dfb'),
(11, 'Calabresa com Requeijão', 'Fatias de calabresa acompanhadas de cebola, queijo hut e tiras de requeijão', '26.00', 'https://firebasestorage.googleapis.com/v0/b/imc-digital-p-delivery.appspot.com/o/816x408%2FPizzas%2Fcalabria.jpg?alt=media&token=a97a7a64-4fac-4eca-bcd4-17eed220d89d'),
(12, 'Supreme', 'Molho de tomate, pepperoni, cebola, pimentão, champignon, carnes bovina e suína e queijo Hut', '29.00', 'https://storage.googleapis.com/imc-digital-p-delivery.appspot.com/816x408/Pizzas/supreme.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto_categoria`
--

CREATE TABLE `produto_categoria` (
  `ID_PRODUTO` bigint(20) NOT NULL,
  `ID_CATEGORIA` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `sobremesas`
--

CREATE TABLE `sobremesas` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `descricao` varchar(200) NOT NULL,
  `preco` double NOT NULL,
  `imagem` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `sobremesas`
--

INSERT INTO `sobremesas` (`id`, `nome`, `descricao`, `preco`, `imagem`) VALUES
(1, 'Hut Cup Brigadeiro', 'Brigadeiro feito com Moça® no copinho.', 7.9, 'https://storage.googleapis.com/imc-digital-p-delivery.appspot.com/816x408/Sobremesas/hut-cup-brigadeiro.jpg'),
(2, 'Pizza de Brigadeiro', 'Pizza com massa pan feito com brigadeiro Moça®', 24.9, 'https://storage.googleapis.com/imc-digital-p-delivery.appspot.com/816x408/Sobremesas/brigadeiro-media.jpg'),
(3, 'Slider de Brigadeiro', 'Mini pizza individual massa pan de Brigadeiro feito com Moça®', 10.9, 'https://storage.googleapis.com/imc-digital-p-delivery.appspot.com/816x408/Sobremesas/brigadeiro-slider.jpg'),
(4, 'Pizza de Doce de Leite', 'Pizza com Massa Pan e delicioso Doce de Leite Moça®', 26.6, 'https://storage.googleapis.com/imc-digital-p-delivery.appspot.com/816x408/Sobremesas/doce-de-leite-grande.jpg'),
(5, 'Slider de Cocada', 'Mini pizza individual massa pan feito com Moça®.', 10.9, 'https://storage.googleapis.com/imc-digital-p-delivery.appspot.com/816x408/Sobremesas/cocada-individual.jpg');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `UC_NOME` (`NOME`);

--
-- Índices para tabela `pizzas`
--
ALTER TABLE `pizzas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IMAGEM` (`descricao`(200));

--
-- Índices para tabela `produto_categoria`
--
ALTER TABLE `produto_categoria`
  ADD KEY `FK_PRODUTO` (`ID_PRODUTO`),
  ADD KEY `FK_CATEGORIA` (`ID_CATEGORIA`);

--
-- Índices para tabela `sobremesas`
--
ALTER TABLE `sobremesas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categoria`
--
ALTER TABLE `categoria`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `pizzas`
--
ALTER TABLE `pizzas`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de tabela `sobremesas`
--
ALTER TABLE `sobremesas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `produto_categoria`
--
ALTER TABLE `produto_categoria`
  ADD CONSTRAINT `FK_CATEGORIA` FOREIGN KEY (`ID_CATEGORIA`) REFERENCES `categoria` (`ID`),
  ADD CONSTRAINT `FK_PRODUTO` FOREIGN KEY (`ID_PRODUTO`) REFERENCES `pizzas` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
