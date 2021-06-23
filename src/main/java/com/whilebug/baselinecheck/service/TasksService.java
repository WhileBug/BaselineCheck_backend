package com.whilebug.baselinecheck.service;

import com.whilebug.baselinecheck.pojo.Tasks;

import java.util.Map;

/**
 * (Tasks)表服务接口类
 *
 * @author makejava
 * @since 2021-06-23 15:32:21
 * @version 1.0
 */
public interface TasksService {
    /**
     * 根据模糊条件查询总个数
     *
     * @param name 查询条件
     * @return 返回查询到的总个数
     */
    Map<String, Object> selectForCount(String name);

    /**
     * 查询所有数据
     * 
     * @return  返回所有数据
     */
    Map<String, Object> selectAll();

    /**
     * 通过ID查询单条数据
     *
     * @param taskId 主键
     * @return 实例对象
     */
    Map<String, Object> deleteById(Integer taskId);

    /**
     * 查询分页数据
     *
     * @param index 查询起始位置
     * @param name 查询条件
     * @return 对象列表
     */
    Map<String, Object> selectForPage(int index, String name);

    /**
     * 新增数据
     *
     * @param tasks 实例对象
     * @return 实例对象
     */
    Map<String, Object> insert(Tasks tasks);

    /**
     * 通过ID查询单条数据
     *
     * @param tasks 实例对象
     * @return 实例对象
     */
    Map<String, Object> updateById(Tasks tasks);

    /**
     * 通过主键删除数据
     *
     * @param taskId 主键
     * @return 是否成功
     */
    Map<String, Object> deleteById(String taskId);
}