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
  CONSTRAINT `cards_ibfk_3` FOREIGN KEY (`type_nr`) REFERENCES `types` (`type_nr`)
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
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `groups` (
  `group_nr` int(11) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(255) NOT NULL,
  PRIMARY KEY (`group_nr`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'ATEEZ'),(2,'BTS'),(3,'NCT127'),(4,'Blackpink'),(5,'NMIXX'),(6,'Red Velvet');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `types` (
  `type_nr` int(11) NOT NULL AUTO_INCREMENT,
  `type_name` varchar(255) NOT NULL,
  PRIMARY KEY (`type_nr`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'album'),(2,'pob'),(3,'lucky draw'),(4,'fancall'),(5,'fansign'),(6,'broadcast');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
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

-- Dump completed on 2023-03-22 13:39:09
