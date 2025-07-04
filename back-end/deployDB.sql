-- MySQL dump 10.13  Distrib 8.0.39, for Win64 (x86_64)
--
-- Host: localhost    Database: MediWebMotion
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'Admin','admin@gmail.com','$2b$10$gFbGtA3d5RT88yMeq6aPHesykGBb/Bm3irAsCISFDi5VZdoztG84q','2025-05-24 10:32:21');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `sujet` varchar(255) DEFAULT NULL,
  `service` varchar(255) DEFAULT NULL,
  `message` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;



CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `company` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `street_address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `service_name` varchar(255) NOT NULL,
  `pack_name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `status` enum('pending','processing','shipped','delivered','cancelled') NOT NULL DEFAULT 'pending',
  `orderNote` text,
  `order_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tittle` varchar(250) DEFAULT NULL,
  `image_url` varchar(500) DEFAULT NULL,
  `website_url` varchar(500) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'skillsaffinity','skillsaffinity.png','https://skillsaffinity.com/','2025-05-22 15:26:35'),(2,'at','ati.png','https://ati.ma/','2025-05-22 15:26:35'),(3,'golden-transports','golden-transports.png','https://golden-transports.com/','2025-05-22 15:26:35'),(4,'petit-bateau','petit-bateau.png','https://petit-bateau.ma/','2025-05-22 15:26:35'),(5,'almassalik','almassalik.png','https://almassalik.com/','2025-05-22 15:26:35'),(6,'morocco-armenia','morocco-armenia.png','http://morocco-armenia.com/','2025-05-22 15:26:35'),(7,'logisticsworldtrade','logisticsworldtrade.png','https://logisticworldtrade.com/','2025-05-22 15:26:35'),(8,'thelogisticnews','thelogisticnews.png','http://thelogisticnews.com/','2025-05-22 15:26:35'),(9,'sb-smires','sb-smires.png','http://sb-smires.com/','2025-05-22 15:26:35'),(10,'africphar','africphar.png','https://www.africphar.com/','2025-05-22 15:26:35'),(11,'cc-list','cc-list.png','https://cc-list.com/','2025-05-22 15:26:35'),(12,'confomat','confomat.png','https://confomat.ma/','2025-05-22 15:26:35'),(13,'alomragroup','alomragroup.png','https://alomragroup.com/','2025-05-22 15:26:35'),(14,'mziagroup','mziagroup.png','https://mziagroup.com/','2025-05-22 15:26:35'),(15,'annabels','annabels.png','http://annabels.ma/','2025-05-22 15:26:35'),(16,'ean-network','ean-network.png','https://ean-network.com/','2025-05-22 15:26:35'),(17,'africa-security-forum','africa-security-forum.png','https://africa-security-forum.org/','2025-05-22 15:26:35'),(18,'logifem','logifem.png','https://www.logifem.com.tr/','2025-05-22 15:26:35'),(19,'footdrums','footdrums.png','https://footdrums.ma/','2025-05-22 15:26:35'),(20,'congres-agrumes','congres-agrumes.png','https://congres-agrumes.ma/','2025-05-23 15:20:10'),(21,'topeventproduction','topeventproduction.png','https://topeventproduction.com/','2025-05-23 15:20:10'),(22,'grafcet','grafcet.png','https://grafcet.ma/','2025-05-23 15:20:10'),(23,'vetimat','vetimat.png','https://vetimat.ma/','2025-05-23 15:20:10'),(24,'connecting-morocco','connecting-morocco.png','https://connecting-morocco.com/','2025-05-23 15:20:10'),(25,'makina','makina.png','https://makina.ma/','2025-05-23 15:20:10'),(26,'alomrafacility','alomrafacility.png','http://alomrafacility.com/','2025-05-23 15:20:10'),(27,'soluzionamaroc','soluzionamaroc.png','https://soluzionamaroc.com/','2025-05-23 15:20:10'),(28,'alomraguarding','alomraguarding.png','https://alomraguarding.com/','2025-05-23 15:20:10'),(29,'centaurecom-agency','centaurecom-agency.png','https://centaurecom-agency.com/','2025-05-23 15:20:10'),(30,'studypass','studypass.png','https://studypass.fr/','2025-05-23 15:20:10'),(31,'mycanadiansucces','mycanadiansucces.png','https://www.mycanadiansucces.com/','2025-05-23 15:20:10'),(32,'gazal','gazal.png','http://gazal.ma/','2025-05-23 15:20:10'),(33,'aromessence','aromessence.png','https://aromessence.ma/','2025-05-23 15:20:10'),(34,'groupeshiru','groupeshiru.png','https://groupeshiru.ma/','2025-05-23 15:20:10'),(35,'aminelahlou','aminelahlou.png','http://aminelahlou.ma/','2025-05-23 15:20:10'),(36,'africamedinvest','africamedinvest.png','http://africamedinvest.com/','2025-05-23 15:20:10'),(37,'zalar','zalar.png','https://zalar.ma/','2025-05-23 15:20:10'),(38,'thecasablancaclub','thecasablancaclub.png','https://thecasablancaclub.com/','2025-05-23 15:20:10'),(39,'somapaf','somapaf.png','https://somapaf.ma/','2025-05-23 15:20:10'),(40,'semind','semind.png','https://semind.ma/','2025-05-23 15:20:10'),(41,'riverstream-consult','riverstream-consult.png','https://riverstream-consult.com/','2025-05-23 15:20:10'),(42,'gelacom-group','gelacom-group.png','https://gelacom-group.com/','2025-05-23 15:20:10'),(43,'intergrues','intergrues.png','https://intergrues.ma/','2025-05-23 15:20:10'),(44,'eulersolutions','eulersolutions.png','https://eulersolutions.com/','2025-05-23 15:20:10'),(45,'control-risk-intelligence','control-risk-intelligence.png','http://control-risk-intelligence.com/','2025-05-23 15:20:10'),(46,'cirex-system-maghreb','cirex-system-maghreb.png','http://cirex-system-maghreb.com/','2025-05-23 15:20:10'),(47,'arbor','arbor.png','https://arbor.ma/','2025-05-23 15:20:10'),(48,'crechesprivees','crechesprivees.png','http://crechesprivees.ma/','2025-05-23 15:20:10'),(49,'alomraintelligence','alomraintelligence.png','https://alomraintelligence.com/','2025-05-23 15:20:10'),(50,'alomracyberdefense','alomracyberdefense.png','https://alomracyberdefense.com/','2025-05-23 15:20:10'),(51,'optima-peintures','optima-peintures.png','https://optima-peintures.ma/','2025-05-23 15:20:10'),(52,'sentiloc','sentiloc.png','https://sentiloc.com/','2025-05-23 15:20:10'),(53,'gestauto','gestauto.png','https://gestauto.ma/','2025-05-23 15:20:10');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quotes`
--

DROP TABLE IF EXISTS `quotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quotes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quotes`
--

LOCK TABLES `quotes` WRITE;
/*!40000 ALTER TABLE `quotes` DISABLE KEYS */;
/*!40000 ALTER TABLE `quotes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-28 12:26:10
