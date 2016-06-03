-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 03, 2016 at 06:26 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vidteam_inventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `identification` int(11) NOT NULL,
  `date_added` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(250) NOT NULL,
  `category` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL,
  `image_name` varchar(200) NOT NULL DEFAULT 'default.svg',
  `quantity` int(11) NOT NULL,
  `available` int(11) NOT NULL,
  `lost` int(11) NOT NULL DEFAULT '0',
  `broken` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`identification`, `date_added`, `name`, `category`, `description`, `image_name`, `quantity`, `available`, `lost`, `broken`) VALUES
(1, '2016-06-03 08:59:12', 'Pollo', 'lense', 'Testing the addition of new description', 'default.svg', 2, 2, 0, 0),
(2, '2016-06-03 09:03:20', 'Chicken', 'gear', 'A little chicken that we took as a pet', 'default.svg', 1, 1, 0, 0),
(3, '2016-06-03 09:05:40', 'testing', 'audio', 'testing the audio addition', 'default.svg', 2, 2, 0, 0),
(4, '2016-06-03 09:08:03', 'hello', 'gear', 'testing the addition scripts', 'default.svg', 1, 1, 0, 0),
(5, '2016-06-03 09:09:00', 'test2', 'lenses', 'testing the page', 'default.svg', 5, 5, 0, 0),
(6, '2016-06-03 09:11:47', 'test 4', 'lighting', 'testing the addition scripts', 'default.svg', 2, 2, 0, 0),
(7, '2016-06-03 09:17:10', 'testing5', 'cameras', 'testing the page', 'default.svg', 1, 1, 0, 0),
(8, '2016-06-03 09:17:10', 'testing again', 'cameras', 'testing the page', 'default.svg', 1, 1, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`identification`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `identification` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
