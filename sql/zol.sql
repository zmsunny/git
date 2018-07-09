-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.5-10.0.14-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  8.3.0.4694
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- 正在导出表  goodlist.car 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
INSERT INTO `car` (`id`, `title`, `price`, `qty`, `img`) VALUES
	(10, '斐讯', '499', '0', 'http://10.3.136.107:86/img/good5.jpg');
/*!40000 ALTER TABLE `car` ENABLE KEYS */;

-- 正在导出表  goodlist.goods 的数据：~16 rows (大约)
/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` (`id`, `goodsName`, `describle`, `img`, `date`, `price`, `type`, `oldprice`) VALUES
	(1, '小米', '前置2000万“治愈系”自拍 / 后置2000万 AI双摄 / 标配骁龙660 AIE处理器', '../img/good1.jpg\r\n', '2018/7/15', 1599, 0, 1799),
	(2, '三星', '三星S8！ 全视曲面屏！突破所限，大有可能！4GB+64GB！', '../img/good2.png', '2018/7/14', 3599, 0, 3799),
	(3, '华为', '华为 Mate10Pro 全网通 6G+64GB', '../img/good3.jpg', '2018/7/12', 3299, 0, 3499),
	(4, '华硕', '华硕 PRIME B360M-D全接口带COM接口 PCI插槽', '../img/good4.jpg', '1018/7/16', 599, 0, 799),
	(5, '斐讯', 'PHICOMM斐讯智能体脂秤S7 隐藏式LED显示 ', '../img/good5.jpg', '1018/7/16', 499, 0, 699),
	(6, '甲骨龙', '甲骨龙酷睿I5/GTX1050/游戏台式电脑主机/DIY组装机 游戏主机', '../img/good6.jpg', '1018/7/16', 1299, 0, 1499),
	(7, '三星', '三星S8！ 全视曲面屏！突破所限，大有可能！4GB+64GB！', '../img/good2.png', '2018/7/14', 3599, 0, 3799),
	(8, '华硕', '华硕 PRIME B360M-D全接口带COM接口 PCI插槽', '../img/good4.jpg', '1018/7/16', 599, 0, 799),
	(9, '斐讯', 'PHICOMM斐讯智能体脂秤S7 隐藏式LED显示 ', '../img/good5.jpg', '1018/7/16', 499, 0, 699),
	(10, '甲骨龙', '甲骨龙酷睿I5/GTX1050/游戏台式电脑主机/DIY组装机 游戏主机', '../img/good6.jpg', '1018/7/16', 1299, 0, 1499),
	(11, '斐讯', 'PHICOMM斐讯智能体脂秤S7 隐藏式LED显示 ', '../img/good5.jpg', '1018/7/16', 499, 0, 699),
	(12, '三星', '三星S8！ 全视曲面屏！突破所限，大有可能！4GB+64GB！', '../img/good2.png', '2018/7/14', 3599, 0, 3799),
	(13, '小米', '前置2000万“治愈系”自拍 / 后置2000万 AI双摄 / 标配骁龙660 AIE处理器', '../img/good1.jpg\r\n', '2018/7/15', 1599, 0, 1799),
	(14, '华为', '华为 Mate10Pro 全网通 6G+64GB', '../img/good3.jpg', '2018/7/12', 3299, 0, 3499),
	(15, '三星', '三星S8！ 全视曲面屏！突破所限，大有可能！4GB+64GB！', '../img/good2.png', '2018/7/14', 3599, 0, 3799),
	(16, '华硕', '华硕 PRIME B360M-D全接口带COM接口 PCI插槽', '../img/good4.jpg', '1018/7/16', 599, 0, 799);
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;

-- 正在导出表  goodlist.list 的数据：~29 rows (大约)
/*!40000 ALTER TABLE `list` DISABLE KEYS */;
INSERT INTO `list` (`id`, `goodsName`, `describle`, `img`, `date`, `price`, `type`, `oldprice`) VALUES
	(1, '小米', '前置2000万“治愈系”自拍 / 后置2000万 AI双摄 / 标配骁龙660 AIE处理器', '../img/good1.jpg\r\n', '2018/7/15', 1599, 0, 1799),
	(2, '三星', '三星S8！ 全视曲面屏！突破所限，大有可能！4GB+64GB！', '../img/good2.png', '2018/7/14', 3599, 0, 3799),
	(3, '华为', '华为 Mate10Pro 全网通 6G+64GB', '../img/good3.jpg', '2018/7/14', 3299, 0, 3499),
	(4, '华硕', '华硕 PRIME B360M-D全接口带COM接口 PCI插槽', '../img/good4.jpg', '2018/7/14', 599, 0, 799),
	(5, '斐讯', 'PHICOMM斐讯智能体脂秤S7 隐藏式LED显示 ', '../img/good5.jpg', '2018/7/14', 499, 0, 499),
	(6, '甲骨龙', '甲骨龙酷睿I5/GTX1050/游戏台式电脑主机/DIY组装机 游戏主机', '../img/good6.jpg', '2018/7/14', 1299, 0, 1499),
	(7, '小米', '前置2000万“治愈系”自拍 / 后置2000万 AI双摄 / 标配骁龙660 AIE处理器', '../img/good1.jpg\r\n', '2018/7/15', 1599, 0, 1799),
	(8, '三星', '三星S8！ 全视曲面屏！突破所限，大有可能！4GB+64GB！', '../img/good2.png', '2018/7/14', 3599, 0, 3799),
	(9, '华为', '华为 Mate10Pro 全网通 6G+64GB', '../img/good3.jpg', '2018/7/14', 3299, 0, 3499),
	(10, '斐讯', 'PHICOMM斐讯智能体脂秤S7 隐藏式LED显示 ', '../img/good5.jpg', '2018/7/14', 499, 0, 499),
	(11, '甲骨龙', '甲骨龙酷睿I5/GTX1050/游戏台式电脑主机/DIY组装机 游戏主机', '../img/good6.jpg', '2018/7/14', 1299, 0, 1499),
	(12, '华为', '华为 Mate10Pro 全网通 6G+64GB', '../img/good3.jpg', '2018/7/14', 3299, 0, 3499),
	(13, '三星', '三星S8！ 全视曲面屏！突破所限，大有可能！4GB+64GB！', '../img/good2.png', '2018/7/14', 3599, 0, 3799),
	(14, '小米', '前置2000万“治愈系”自拍 / 后置2000万 AI双摄 / 标配骁龙660 AIE处理器', '../img/good1.jpg\r\n', '2018/7/15', 1599, 0, 1799),
	(15, '三星', '三星S8！ 全视曲面屏！突破所限，大有可能！4GB+64GB！', '../img/good2.png', '2018/7/14', 3599, 0, 3799),
	(16, '斐讯', 'PHICOMM斐讯智能体脂秤S7 隐藏式LED显示 ', '../img/good5.jpg', '2018/7/14', 499, 0, 499),
	(17, '甲骨龙', '甲骨龙酷睿I5/GTX1050/游戏台式电脑主机/DIY组装机 游戏主机', '../img/good6.jpg', '2018/7/14', 1299, 0, 1499),
	(18, '华为', '华为 Mate10Pro 全网通 6G+64GB', '../img/good3.jpg', '2018/7/14', 3299, 0, 3499),
	(19, '小米', '前置2000万“治愈系”自拍 / 后置2000万 AI双摄 / 标配骁龙660 AIE处理器', '../img/good1.jpg\r\n', '2018/7/15', 1599, 0, 1799),
	(20, '小米', '前置2000万“治愈系”自拍 / 后置2000万 AI双摄 / 标配骁龙660 AIE处理器', '../img/good1.jpg\r\n', '2018/7/15', 1599, 0, 1799),
	(21, '斐讯', 'PHICOMM斐讯智能体脂秤S7 隐藏式LED显示 ', '../img/good5.jpg', '2018/7/14', 499, 0, 499),
	(22, '甲骨龙', '甲骨龙酷睿I5/GTX1050/游戏台式电脑主机/DIY组装机 游戏主机', '../img/good6.jpg', '2018/7/14', 1299, 0, 1499),
	(23, '三星', '三星S8！ 全视曲面屏！突破所限，大有可能！4GB+64GB！', '../img/good2.png', '2018/7/14', 3599, 0, 3799),
	(24, '华为', '华为 Mate10Pro 全网通 6G+64GB', '../img/good3.jpg', '2018/7/14', 3299, 0, 3499),
	(25, '甲骨龙', '甲骨龙酷睿I5/GTX1050/游戏台式电脑主机/DIY组装机 游戏主机', '../img/good6.jpg', '2018/7/14', 1299, 0, 1499),
	(26, '甲骨龙', '甲骨龙酷睿I5/GTX1050/游戏台式电脑主机/DIY组装机 游戏主机', '../img/good6.jpg', '2018/7/14', 1299, 0, 1499),
	(27, '甲骨龙', '甲骨龙酷睿I5/GTX1050/游戏台式电脑主机/DIY组装机 游戏主机', '../img/good6.jpg', '2018/7/14', 1299, 0, 1499),
	(28, '华为', '华为 Mate10Pro 全网通 6G+64GB', '../img/good3.jpg', '2018/7/14', 3299, 0, 3499),
	(29, '斐讯', 'PHICOMM斐讯智能体脂秤S7 隐藏式LED显示 ', '../img/good5.jpg', '2018/7/14', 499, 0, 499);
/*!40000 ALTER TABLE `list` ENABLE KEYS */;

-- 正在导出表  goodlist.user 的数据：~6 rows (大约)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`index`, `phone`, `password`) VALUES
	(1, '15812345678', '123456'),
	(2, '15812345677', '123456'),
	(3, '13512345678', '123456'),
	(4, '15813719560', '123456'),
	(5, '18812345678', '123456'),
	(6, '13312345678', '123456');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
