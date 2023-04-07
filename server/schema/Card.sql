-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: nnguy001
-- ------------------------------------------------------
-- Server version	5.5.5-10.11.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `buy_cards`
--

DROP TABLE IF EXISTS `buy_cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `buy_cards` (
  `buy_card_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_nr` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `status` enum('M','NM','EX','GD','LP','PL','PO') NOT NULL,
  `e_date` date NOT NULL,
  `is_paid` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`buy_card_id`),
  KEY `user_nr` (`user_nr`),
  KEY `id` (`id`),
  CONSTRAINT `buy_cards_ibfk_1` FOREIGN KEY (`user_nr`) REFERENCES `users` (`user_nr`),
  CONSTRAINT `buy_cards_ibfk_2` FOREIGN KEY (`id`) REFERENCES `sale_cards` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buy_cards`
--

LOCK TABLES `buy_cards` WRITE;
/*!40000 ALTER TABLE `buy_cards` DISABLE KEYS */;
INSERT INTO `buy_cards` VALUES (1,1,2,1,'M','2023-04-22',1),(2,2,1,3,'GD','2023-06-14',0);
/*!40000 ALTER TABLE `buy_cards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_status`
--

DROP TABLE IF EXISTS `card_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_status` (
  `status_nr` int(11) NOT NULL AUTO_INCREMENT,
  `status_name` varchar(255) NOT NULL,
  `status_abbre` varchar(20) NOT NULL,
  PRIMARY KEY (`status_nr`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_status`
--

LOCK TABLES `card_status` WRITE;
/*!40000 ALTER TABLE `card_status` DISABLE KEYS */;
INSERT INTO `card_status` VALUES (1,'Mint','M'),(2,'Near Mint','NM'),(3,'Excellent','EX'),(4,'Good','GD'),(5,'Light Played','LP'),(6,'Played','PL'),(7,'Poor','PO');
/*!40000 ALTER TABLE `card_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card_types`
--

DROP TABLE IF EXISTS `card_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card_types` (
  `type_nr` int(11) NOT NULL AUTO_INCREMENT,
  `type_name` varchar(255) NOT NULL,
  PRIMARY KEY (`type_nr`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card_types`
--

LOCK TABLES `card_types` WRITE;
/*!40000 ALTER TABLE `card_types` DISABLE KEYS */;
INSERT INTO `card_types` VALUES (1,'album'),(2,'pob'),(3,'lucky draw'),(4,'fancall'),(5,'fansign'),(6,'broadcast');
/*!40000 ALTER TABLE `card_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cards`
--

DROP TABLE IF EXISTS `cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cards` (
  `card_nr` int(11) NOT NULL AUTO_INCREMENT,
  `card_name` varchar(255) NOT NULL,
  `era_nr` int(11) DEFAULT NULL,
  `group_nr` int(11) DEFAULT NULL,
  `type_nr` int(11) DEFAULT NULL,
  `release_date` date NOT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`card_nr`),
  KEY `era_nr` (`era_nr`),
  KEY `group_nr` (`group_nr`),
  KEY `type_nr` (`type_nr`),
  CONSTRAINT `cards_ibfk_1` FOREIGN KEY (`era_nr`) REFERENCES `eras` (`era_nr`),
  CONSTRAINT `cards_ibfk_2` FOREIGN KEY (`group_nr`) REFERENCES `groups` (`group_nr`),
  CONSTRAINT `cards_ibfk_3` FOREIGN KEY (`type_nr`) REFERENCES `card_types` (`type_nr`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cards`
--

LOCK TABLES `cards` WRITE;
/*!40000 ALTER TABLE `cards` DISABLE KEYS */;
INSERT INTO `cards` VALUES (1,'Jisoo Beret',1,4,2,'2021-03-11','https://i.imgur.com/g4Kg0rI.jpg'),(2,'Haewon Poke',4,5,1,'2022-03-11','https://i.imgur.com/uwioIzn.jpg'),(3,'Wendy 2',5,6,3,'2022-12-11','https://i.imgur.com/f3pKYqC.jpg'),(4,'Joy SG23',7,6,2,'2023-01-01','https://imgur.com/12SPVnW.jpg'),(5,'Yeri SG23',7,6,2,'2023-01-01','https://i.imgur.com/0cQ63bC.jpg'),(6,'Seulgi Pink Shirt',6,6,1,'2023-01-01','https://imgur.com/OO3vBmA.jpg');
/*!40000 ALTER TABLE `cards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eras`
--

DROP TABLE IF EXISTS `eras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eras` (
  `era_nr` int(11) NOT NULL AUTO_INCREMENT,
  `era_name` varchar(255) NOT NULL,
  PRIMARY KEY (`era_nr`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eras`
--

LOCK TABLES `eras` WRITE;
/*!40000 ALTER TABLE `eras` DISABLE KEYS */;
INSERT INTO `eras` VALUES (1,'Kill This Love'),(2,'Lovesick Girls'),(3,'O.O'),(4,'Dice'),(5,'Birthday'),(6,'Feel My Rhythm'),(7,'Season\'s Greeting 2023');
/*!40000 ALTER TABLE `eras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group_types`
--

DROP TABLE IF EXISTS `group_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `group_types` (
  `group_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `group_type_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`group_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_types`
--

LOCK TABLES `group_types` WRITE;
/*!40000 ALTER TABLE `group_types` DISABLE KEYS */;
INSERT INTO `group_types` VALUES (1,'Girlgroups'),(2,'Boygroups'),(3,'Soloists');
/*!40000 ALTER TABLE `group_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `groups` (
  `group_nr` int(11) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(255) NOT NULL,
  `active` tinyint(1) DEFAULT 1,
  `group_type_id` int(11) NOT NULL,
  PRIMARY KEY (`group_nr`),
  KEY `groups_FK` (`group_type_id`),
  CONSTRAINT `groups_FK` FOREIGN KEY (`group_type_id`) REFERENCES `group_types` (`group_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'ATEEZ',1,2),(2,'BTS',1,2),(3,'NCT127',1,2),(4,'Blackpink',1,1),(5,'NMIXX',1,1),(6,'Red Velvet',1,1),(7,'NewJeans',1,1);
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sale_cards`
--

DROP TABLE IF EXISTS `sale_cards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sale_cards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_nr` int(11) NOT NULL,
  `card_nr` int(11) NOT NULL,
  `price` float NOT NULL,
  `amount` int(11) NOT NULL,
  `status_nr` int(11) DEFAULT NULL,
  `e_date` date NOT NULL,
  `is_soldout` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sale_cards_ibfk_1` (`user_nr`),
  KEY `sale_cards_ibfk_2` (`card_nr`),
  KEY `sale_cards_ibfk_3` (`status_nr`),
  CONSTRAINT `sale_cards_ibfk_1` FOREIGN KEY (`user_nr`) REFERENCES `users` (`user_nr`),
  CONSTRAINT `sale_cards_ibfk_2` FOREIGN KEY (`card_nr`) REFERENCES `cards` (`card_nr`),
  CONSTRAINT `sale_cards_ibfk_3` FOREIGN KEY (`status_nr`) REFERENCES `card_status` (`status_nr`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale_cards`
--

LOCK TABLES `sale_cards` WRITE;
/*!40000 ALTER TABLE `sale_cards` DISABLE KEYS */;
INSERT INTO `sale_cards` VALUES (1,1,2,29.99,3,1,'2023-03-22',0),(2,2,3,19.99,2,2,'2023-03-14',0),(3,3,4,10,1,1,'2023-03-26',0),(4,3,5,10,1,3,'2023-03-26',0),(5,3,6,10,1,3,'2023-03-26',0),(6,1,6,10,1,2,'2023-03-26',0),(7,2,6,10,1,1,'2023-03-26',0);
/*!40000 ALTER TABLE `sale_cards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_nr` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  PRIMARY KEY (`user_nr`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Tan','Nguyen','tanmatic.tm@gmail.com','n.tan','TSnumber1'),(2,'Quoc Anh','Luu','lbank999@gmail.com','l.bank','Hanniismywaifu'),(3,'Max','Mustermann','maxmusterman@gmail.com','entwicklung','123'),(4,'abc','xyz','zzz','entwicklung1','123'),(5,'abc','xyz','zzz','test30','$2b$10$n8gQn3y5ay3db3JBgtOLCOfwimQQFkOLbmlZsDs4y9M/jdYhgqoYC'),(6,'Banh','Luu','axc','l.bankpao','$2b$10$hhgmSskJqIAQDI9Wm5SNd./Sg7xPcV6ELN1oMneTzR5DzPBikl.YO');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'nnguy001'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-07 17:28:16
