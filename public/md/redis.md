# Redis的使用
1.简介
Redis是一个非关系型数据库，与MySQL等关系型数据库不同。基于内存式的储存方式，
与其他数据库相比，Redis的读写速度极快，但是因为基于内存的原因，不适合大量储存数据。
常见使用场景是给MySQL等数据库“打下手”，作为缓存使用，提升读写速度。
2.安装Redis
Redis大部分的使用场景是在服务器上，Windows上没有原生的Redis版本，
如果想在Windows上使用Redis，可以使用WSL（相当于在Windows上开个Linux子系统）
或者下载Redis的Windows移植版本，Github的地址为：https://github.com/redis-windows/redis-windows
（这是常见的exe安装方式）