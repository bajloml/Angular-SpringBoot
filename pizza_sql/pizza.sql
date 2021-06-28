CREATE DATABASE  IF NOT EXISTS `pizza_directory`;
USE `pizza_directory`;

--
-- Table structure for table `pizza`
--

DROP TABLE IF EXISTS `pizza`;

CREATE TABLE `pizza` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `ingredients` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf16;

--
-- Data for table `pizza`
--

INSERT INTO `pizza` VALUES 
	(1, 'Diavola', 'sauce salami peppers mozzarella parmesan basil'),
	(2, 'Frutti di Mare', 'scallops shrimp lemons butter salt pepper garlic tomatoes olive oil'),
	(3, 'Vegetariana', 'Garlic spinach chopped artichoke hearts mozzarella cheese Pecorino'),
	(4, 'Capricciosa', 'tomatoes mozzarella prosciutto artichoke mushrooms olives');

