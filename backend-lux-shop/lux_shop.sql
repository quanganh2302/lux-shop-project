-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 22, 2023 at 04:50 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lux_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `allcode_products`
--

CREATE TABLE `allcode_products` (
  `id` int(11) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `keyMap` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `nameEn` varchar(255) DEFAULT NULL,
  `nameVi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `allcode_products`
--

INSERT INTO `allcode_products` (`id`, `type`, `keyMap`, `value`, `nameEn`, `nameVi`, `createdAt`, `updatedAt`) VALUES
(1, 'COLOR', 'R', '#dc3545', 'Red', 'Đỏ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'COLOR', 'O', '#fd7e14', 'Orange', 'Cam', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'COLOR', 'Y', '#ffc107', 'Yellow', 'Vàng', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'COLOR', 'B', '#007bff', 'Blue', 'Xanh lục', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'COLOR', 'G', '#28a745', 'Green', 'Xanh lam', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'COLOR', 'P', '#6f42c1', 'Purple', 'Tím', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'COLOR', 'W', '#f8f9fa', 'White', 'Trắng', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'COLOR', 'D', '#343a40', 'Black', 'Đen', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'SIZE', 'S', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'SIZE', 'M', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'SIZE', 'L', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'SIZE', 'Xl', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'SIZE', 'XXL', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `allcode_users`
--

CREATE TABLE `allcode_users` (
  `id` int(11) NOT NULL,
  `keyMap` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `valueEn` varchar(255) DEFAULT NULL,
  `valueVi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `allcode_users`
--

INSERT INTO `allcode_users` (`id`, `keyMap`, `type`, `valueEn`, `valueVi`, `createdAt`, `updatedAt`) VALUES
(1, 'R1', 'ROLE', 'Admin', 'Quản trị viên', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'R2', 'ROLE', 'Staff', 'Nhân viên', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'R3', 'ROLE', 'Customer', 'Khách hàng', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'S1', 'STATUS', 'New', 'Chờ xác nhận', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'S2', 'STATUS', 'Confirmed', 'Đã xác nhận', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'S3', 'STATUS', 'Pending', 'Đang vận chuyển', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'S5', 'STATUS', 'Success', 'Thành công', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'S4', 'STATUS', 'Cancel', 'Đã hủy', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'M', 'GENDER', 'Male', 'Nam', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'F', 'GENDER', 'Female', 'Nữ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'K', 'GENDER', 'Kid', 'Trẻ em', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'PAY1', 'PAYMENT', 'Cash', 'Tiền mặt', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'PAY2', 'PAYMENT', 'Credit card', 'Thẻ ATM', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'PAY3', 'PAYMENT', 'All payment method', 'Tất cả', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `cateKey` varchar(255) NOT NULL,
  `nameEn` varchar(255) DEFAULT NULL,
  `nameVi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `cateKey`, `nameEn`, `nameVi`, `createdAt`, `updatedAt`) VALUES
(1, 'T', 'TOPS', 'Áo', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'O', 'OUTERWEAR', 'ĐỒ MẶC NGOÀI', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'B', 'BOTTOMS', 'QUẦN', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'A', 'ACCESSORIES', 'PHỤ KIỆN', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `colorKey` varchar(255) NOT NULL,
  `value` varchar(255) DEFAULT NULL,
  `nameEn` varchar(255) DEFAULT NULL,
  `nameVi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `colors`
--

INSERT INTO `colors` (`id`, `colorKey`, `value`, `nameEn`, `nameVi`, `createdAt`, `updatedAt`) VALUES
(1, 'R', '#dc3545', 'Red', 'Đỏ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'O', '#fd7e14', 'Orange', 'Cam', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Y', '#ffc107', 'Yellow', 'Vàng', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'B', '#007bff', 'Blue', 'Xanh lục', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'G', '#28a745', 'Green', 'Xanh lam', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'P', '#6f42c1', 'Purple', 'Tím', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'W', '#f8f9fa', 'White', 'Trắng', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'D', '#343a40', 'Black', 'Đen', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `productId` varchar(255) DEFAULT NULL,
  `nameProductEn` varchar(255) DEFAULT NULL,
  `nameProductVi` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `materials` varchar(255) DEFAULT NULL,
  `image` longblob NOT NULL,
  `tagName` varchar(255) DEFAULT NULL,
  `catagoriesId` varchar(255) DEFAULT NULL,
  `sizeKeyMap` varchar(255) DEFAULT NULL,
  `typeKeyMap` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `weigh` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `productId`, `nameProductEn`, `nameProductVi`, `desc`, `materials`, `image`, `tagName`, `catagoriesId`, `sizeKeyMap`, `typeKeyMap`, `quantity`, `weigh`, `createdAt`, `updatedAt`) VALUES
(1, 'PD01', 'Áo dài', NULL, 'ok', 'ok', 0x646174613a696d6167652f6a7065673b6261736536342c2f396a2f34414151536b5a4a5267414241674141415141424141442f37514371554768766447397a6147397749444d754d414134516b6c4e42415141414141414149346341696741596b5a43545551774d5441774d4746694e7a41784d4441774d475133596d51774d444177597a4e684e6a41784d444177593259344d4445774d4441314d6d59774d6a41774d546b344e6a41794d444179595749354d444d774d474a6c5a446b774d7a41775a574d784e4441304d4441344e4451304d4451774d475935595745774e6a417748414a6e41425236523074554e6b457454576c6a546e707056315651, 'T-Shirts', 'T', 'S', 'W', '10', '12', '2023-09-09 05:09:33', '2023-09-09 05:09:33');
INSERT INTO `products` (`id`, `productId`, `nameProductEn`, `nameProductVi`, `desc`, `materials`, `image`, `tagName`, `catagoriesId`, `sizeKeyMap`, `typeKeyMap`, `quantity`, `weigh`, `createdAt`, `updatedAt`) VALUES
INSERT INTO `products` (`id`, `productId`, `nameProductEn`, `nameProductVi`, `desc`, `materials`, `image`, `tagName`, `catagoriesId`, `sizeKeyMap`, `typeKeyMap`, `quantity`, `weigh`, `createdAt`, `updatedAt`) VALUES
INSERT INTO `products` (`id`, `productId`, `nameProductEn`, `nameProductVi`, `desc`, `materials`, `image`, `tagName`, `catagoriesId`, `sizeKeyMap`, `typeKeyMap`, `quantity`, `weigh`, `createdAt`, `updatedAt`) VALUES
(4, '', '', NULL, '', '', '', 'T-Shirts', 'T', 'S', 'M', '', '', '2023-09-10 14:18:10', '2023-09-10 14:18:10'),
(5, '', '', NULL, '', '', '', 'T-Shirts', 'T', 'S', 'M', '', '', '2023-09-10 14:18:25', '2023-09-10 14:18:25'),
(6, '', '', NULL, '', '', '', 'T-Shirts', 'T', 'S', 'M', '', '', '2023-09-10 14:24:08', '2023-09-10 14:24:08'),
(7, '', '', NULL, '', '', '', 'T-Shirts', 'T', 'S', 'M', '', '', '2023-09-10 14:30:42', '2023-09-10 14:30:42'),
(8, '', '', NULL, '', '', '', 'T-Shirts', 'T', 'S', 'M', '', '', '2023-09-10 14:35:34', '2023-09-10 14:35:34');

-- --------------------------------------------------------

--
-- Table structure for table `product_colors`
--

CREATE TABLE `product_colors` (
  `id` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `keyMap` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_colors`
--

INSERT INTO `product_colors` (`id`, `productId`, `keyMap`, `createdAt`, `updatedAt`) VALUES
(68, 1, 'R', '2023-09-08 16:17:55', '2023-09-08 16:17:55'),
(69, 2, 'R', '2023-09-08 16:19:11', '2023-09-08 16:19:11'),
(70, 2, 'W', '2023-09-08 16:19:11', '2023-09-08 16:19:11'),
(71, 2, 'Y', '2023-09-08 16:19:11', '2023-09-08 16:19:11'),
(72, 3, 'R', '2023-09-09 02:56:14', '2023-09-09 02:56:14'),
(73, 4, 'R', '2023-09-09 03:04:42', '2023-09-09 03:04:42'),
(74, 5, 'R', '2023-09-09 03:14:06', '2023-09-09 03:14:06'),
(75, 6, 'R', '2023-09-09 04:43:49', '2023-09-09 04:43:49'),
(76, 7, 'R', '2023-09-09 04:57:28', '2023-09-09 04:57:28'),
(77, 1, 'R', '2023-09-09 05:02:56', '2023-09-09 05:02:56'),
(78, 1, 'R', '2023-09-09 05:09:33', '2023-09-09 05:09:33'),
(79, 2, 'R', '2023-09-09 05:10:47', '2023-09-09 05:10:47'),
(80, 3, 'R', '2023-09-09 05:11:11', '2023-09-09 05:11:11'),
(81, 4, 'R', '2023-09-10 14:18:10', '2023-09-10 14:18:10'),
(82, 5, 'R', '2023-09-10 14:18:25', '2023-09-10 14:18:25'),
(83, 6, 'R', '2023-09-10 14:24:08', '2023-09-10 14:24:08'),
(84, 7, 'R', '2023-09-10 14:30:42', '2023-09-10 14:30:42'),
(85, 8, 'R', '2023-09-10 14:35:34', '2023-09-10 14:35:34');

-- --------------------------------------------------------

--
-- Table structure for table `product_sizes`
--

CREATE TABLE `product_sizes` (
  `id` int(11) NOT NULL,
  `productId` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `ColorId` varchar(255) DEFAULT NULL,
  `sizeKey` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('migration-create-allcode-product.js'),
('migration-create-allcode-user.js'),
('migration-create-category.js'),
('migration-create-color.js'),
('migration-create-product-color.js'),
('migration-create-product-size.js'),
('migration-create-product.js'),
('migration-create-shipping.js'),
('migration-create-size.js'),
('migration-create-sql-product-color.js'),
('migration-create-tag.js'),
('migration-create-type-customer.js'),
('migration-create-user.js'),
('migration-update-product-image.js');

-- --------------------------------------------------------

--
-- Table structure for table `shipping`
--

CREATE TABLE `shipping` (
  `id` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `id` int(11) NOT NULL,
  `key` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sizes`
--

INSERT INTO `sizes` (`id`, `key`, `createdAt`, `updatedAt`) VALUES
(1, 'S', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'M', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'L', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Xl', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'XXL', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `sql_product_colors`
--

CREATE TABLE `sql_product_colors` (
  `id` int(11) NOT NULL,
  `productId` varchar(255) DEFAULT NULL,
  `colorId` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `tagKey` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL,
  `nameEn` varchar(255) DEFAULT NULL,
  `nameVi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `tagKey`, `value`, `nameEn`, `nameVi`, `createdAt`, `updatedAt`) VALUES
(1, 'T', 'TOPS', 'T-Shirts', 'Áo Thun', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'T', 'TOPS', 'Sweaters', 'Áo Len', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'T', 'TOPS', 'shirts', 'Áo Sơ Mi', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'T', 'TOPS', 'Cardigan', 'Áo Cardigan', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'T', 'TOPS', 'Bra Tops', 'Bra Tops', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'T', 'TOPS', 'Polo Shirts', 'Áo polo', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 'T', 'TOPS', 'Casual Shirts', 'Áo Sơ Mi Casual', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'T', 'TOPS', 'Dress Shirts', 'Áo Sơ Mi Công sở', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'T', 'TOPS', '\"UT: Graphic Tees', 'Áo Thun In Họa Tiết', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'T', 'TOPS', 'Sweatshirts & Hoodies', 'Áo Nỉ & Hoodie', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'T', 'TOPS', 'Shirts & Blouses', 'Áo Sơ Mi & Áo Kiểu', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'T', 'TOPS', 'Sweaters & Cardigans', 'Áo Nỉ & Áo Cardigan', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'O', 'OUTERWEAR', 'Blousons & Parkas', 'Áo Blouson & Áo Parka', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'O', 'OUTERWEAR', 'Jackets & Blazers', 'Áo Khoác & Áo Blazer', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 'O', 'OUTERWEAR', 'AirSense Jackets', 'AirSense Áo Khoác', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 'O', 'OUTERWEAR', 'Ultra Light Down & Warm Padded', 'Áo Khoác Siêu Nhẹ & Áo Chần Bông', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 'B', 'BOTTOMS', 'Jeans', 'Quần Jeans', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 'B', 'BOTTOMS', 'Casual Pants', 'Quần Casual', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 'B', 'BOTTOMS', 'Wide Leg Pants', 'Quần Ống Rộng', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 'B', 'BOTTOMS', 'Leggings Pants', 'Quần Legging', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 'B', 'BOTTOMS', 'Trousers', 'Quần Tây', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 'B', 'BOTTOMS', 'Sweat Pants', 'Quần Nỉ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 'B', 'BOTTOMS', 'Short', 'Quần Short', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 'B', 'BOTTOMS', 'Jeans & Colored Jeans', 'Quần Jean & Quần Jean Màu', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 'B', 'BOTTOMS', 'Ankle Pants', 'Quần Dài Đến Mắt Cá', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 'B', 'BOTTOMS', 'Wide Leg Pants', 'Quần Dài Dáng Rộng', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 'B', 'BOTTOMS', 'Chinos', 'Quần Chino', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 'B', 'BOTTOMS', 'AirSense Pants', 'AirSense Quần Dài Siêu Nhẹ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 'A', 'ACCESSORIES', 'Bags', 'Túi', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 'A', 'ACCESSORIES', 'Belts', 'Thắt Lưng', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, 'A', 'ACCESSORIES', 'Shoes & Sandals', 'Giày & Giày Sandal', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, 'A', 'ACCESSORIES', 'Sunglasses', 'Kính Mát', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, 'A', 'ACCESSORIES', 'Others', 'Khác', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `type_customers`
--

CREATE TABLE `type_customers` (
  `id` int(11) NOT NULL,
  `key` varchar(255) DEFAULT NULL,
  `nameEn` varchar(255) DEFAULT NULL,
  `nameVi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `type_customers`
--

INSERT INTO `type_customers` (`id`, `key`, `nameEn`, `nameVi`, `createdAt`, `updatedAt`) VALUES
(1, 'M', 'Man', 'Nam', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'W', 'Women', 'Nữ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'K', 'Kid', 'Trẻ em', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `roleId` varchar(255) DEFAULT NULL,
  `genderId` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `address`, `phoneNumber`, `roleId`, `genderId`, `createdAt`, `updatedAt`) VALUES
(1, 'Nguyen', 'Anh Quang', 'onlworks23@gmail.com', '123456', 'Phú Nhuận', '0968965109', 'R1', 'M', '2023-08-30 03:47:30', '2023-08-30 03:47:30'),
(2, '13213', '123', 'Test Fk', '123131', '123', '1231', 'R2', 'F', '2023-08-30 03:49:44', '2023-08-30 03:49:44'),
(3, 'Nguyen', 'Anh Quang', 'onlworks23@gmail.com213123123', '12312321321', 'Phú Nhuận', '0968965109', '', '', '2023-08-30 09:04:51', '2023-08-30 09:04:51'),
(4, 'Nguyen', 'Anh Quang', 'ttoi met lam r', 'asdfasdawd', 'Phú Nhuận', '1564132', 'R2', 'M', '2023-08-30 09:07:12', '2023-08-30 09:07:12'),
(5, 'Nguyen', 'Anh Quang', 'test gender', '12341243', 'Phú Nhuận', '12321321', 'R2', 'K', '2023-08-30 09:26:10', '2023-08-30 09:26:10'),
(6, '', '', '', '', '', '', 'R1', 'M', '2023-08-30 09:34:46', '2023-08-30 09:34:46'),
(7, 'John', 'Doe', 'example@example.com', NULL, NULL, NULL, NULL, NULL, '2023-09-09 02:24:35', '2023-09-09 02:24:35'),
(8, 'Nguyen', 'Anh Quang', 'onlworks23@gmail.com123', '234', 'Phú Nhuận', '', 'R1', NULL, '2023-09-10 14:33:38', '2023-09-10 14:33:38'),
(9, 'Nguyen', 'Anh Quang', 'test', '234', 'Phú Nhuận', '', 'R1', NULL, '2023-09-10 14:34:03', '2023-09-10 14:34:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allcode_products`
--
ALTER TABLE `allcode_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `allcode_users`
--
ALTER TABLE `allcode_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`,`cateKey`);

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`,`colorKey`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_colors`
--
ALTER TABLE `product_colors`
  ADD PRIMARY KEY (`id`,`productId`,`keyMap`);

--
-- Indexes for table `product_sizes`
--
ALTER TABLE `product_sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `shipping`
--
ALTER TABLE `shipping`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sql_product_colors`
--
ALTER TABLE `sql_product_colors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`,`tagKey`);

--
-- Indexes for table `type_customers`
--
ALTER TABLE `type_customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `allcode_products`
--
ALTER TABLE `allcode_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `allcode_users`
--
ALTER TABLE `allcode_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `product_colors`
--
ALTER TABLE `product_colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT for table `product_sizes`
--
ALTER TABLE `product_sizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shipping`
--
ALTER TABLE `shipping`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `sql_product_colors`
--
ALTER TABLE `sql_product_colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `type_customers`
--
ALTER TABLE `type_customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;