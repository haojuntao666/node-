SET NAMES UTF8;
DROP DATABASE IF EXISTS jd;
CREATE DATABASE jd CHARSET=UTF8;
USE jd;

/*创建一个部门信息表 dept(did,dname,loc-所在地)*/
CREATE TABLE dept(
  did INT PRIMARY KEY AUTO_INCREMENT,
  dname VARCHAR(32),
  loc VARCHAR(32)
);
/*添加4条部门记录 */
INSERT INTO dept VALUES
(10, '市场部', '北京'),
(20, '研发部', '天津'),
(30, '运营部', '杭州'),
(40, '研发部', '重庆');

/*创建一个员工信息表 emp(eid,ename,salary,hireDate-雇佣时间, deptId)*/
CREATE TABLE emp(
  eid INT PRIMARY KEY AUTO_INCREMENT,
  ename VARCHAR(32),
  salary DECIMAL(8,2),    #999999.99
  hireDate BIGINT,        #日期/时间推荐用大整数
  deptId INT
);
/*添加10条员工信息，最后一个部门不要添加员工*/
INSERT INTO emp VALUES
(NULL, 'Tom', '15000', '1311234567890', '10'),
(NULL, 'Mary', '25000', '1321234567891', '10'),
(NULL, 'King', '35000', '1331234567892', '10'),
(NULL, 'Scott', '45000', '1341234567893', '20'),
(NULL, 'Tiger', '55000', '1351234567894', '20'),
(NULL, 'Jane', '65000', '1361234567895', '30'),
(NULL, 'Smith', '75000', '1371234567896', '30'),
(NULL, 'Linda', '85000', '1381234567897', '30'),
(NULL, 'Kitty', '95000', '1391234567898', '30'),
(NULL, 'Maria', '15000', '1401234567899', NULL);








