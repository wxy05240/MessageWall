/*
 Navicat Premium Data Transfer

 Source Server         : 苦苦的码人
 Source Server Type    : MySQL
 Source Server Version : 80024
 Source Host           : 111.180.204.169:3306
 Source Schema         : wall

 Target Server Type    : MySQL
 Target Server Version : 80024
 File Encoding         : 65001

 Date: 05/02/2023 15:06:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for comments
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `wallId` int NOT NULL COMMENT '墙留言ID',
  `userId` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '评论者ID',
  `imgurl` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像路径',
  `comment` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '评论内容',
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `moment` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for feedbacks
-- ----------------------------
DROP TABLE IF EXISTS `feedbacks`;
CREATE TABLE `feedbacks`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `wallId` int NOT NULL COMMENT '墙留言ID',
  `userId` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '反馈者ID',
  `type` int NOT NULL COMMENT '反馈类型0喜欢1举报2撤销',
  `moment` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 114 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for walls
-- ----------------------------
DROP TABLE IF EXISTS `walls`;
CREATE TABLE `walls`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` int NOT NULL COMMENT '类型0信息1图片',
  `message` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '留言',
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `userId` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '创建者ID',
  `moment` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '时间',
  `label` int NOT NULL COMMENT '标签',
  `color` int NULL DEFAULT NULL COMMENT '颜色',
  `imgurl` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '图片路径',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 84 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
