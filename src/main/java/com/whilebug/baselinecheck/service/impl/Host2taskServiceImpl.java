package com.whilebug.baselinecheck.service.impl;

import com.whilebug.baselinecheck.pojo.Host2task;
import com.whilebug.baselinecheck.mapper.Host2taskMapper;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.io.UnsupportedEncodingException;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

/**
 * 任务task与主机host之间的对应关系(Host2task)表服务实现类
 *
 * @author makejava
 * @since 2021-06-23 16:54:23
 * @version 1.0
 */
@Service("host2taskService")
public class Host2taskServiceImpl {
    @Resource
    private Host2taskMapper host2taskMapper;

    /**
     * 根据模糊条件查询总个数
     *
     * @param name 查询条件
     * @return 返回查询到的总个数
     */
    public Map<String, Object> selectForCount(String name) {
        Map<String, Object> map = new HashMap<>();
        // 前端端分离时，前端人员会首先判断code值是否满足200，如果不是200，则提醒用户失败
        map.put("code", 200);
        map.put("msg", "查询成功");
        map.put("list", this.host2taskMapper.selectForCount(name));
        return map;
    }

    /**
     * 查询所有数据
     * @return  返回所有数据
     */
    public Map<String, Object> selectAll() {
        Map<String, Object> map = new HashMap<>();
        // 前端端分离时，前端人员会首先判断code值是否满足200，如果不是200，则提醒用户失败
        map.put("code", 200);
        map.put("msg", "查询成功");
        map.put("list", this.host2taskMapper.selectAll());
        return map;
    }

    /**
     * 通过ID查询单条数据
     *
     * @param taskId 主键
     * @return 实例对象
     */
    public Map<String, Object> selectById(Integer taskId) {
        Map<String, Object> map = new HashMap<>();
        // 前端端分离时，前端人员会首先判断code值是否满足200，如果不是200，则提醒用户失败
        map.put("code", 200);
        map.put("msg", "查询成功");
        map.put("obj", this.host2taskMapper.selectById(taskId));
        return map;
    }

    /**
     * 查询分页数据
     *
     * @param index 查询起始位置
     * @param name  查询条件
     * @return 对象列表
     */
    public Map<String, Object> selectForPage(int index, String name) {
    // 获取当前表中的总记录
        int tableCount = this.host2taskMapper.selectForCount(name);
        // 总页码计算   (总条数 - 1) / 每页显示条数  + 1
        // (100 - 1) / 10 + 1 = 10        (101 - 1) / 10 + 1 = 11      (99 - 1) / 10 + 1 = 10
        int pageCount = (tableCount - 1) / 10 + 1;
        // 计算每页开始的下标值
        index = (index - 1) * 10;
        Map<String, Object> map = new HashMap<>();
        map.put("code", 0);   // 前端端分离时，前端人员会首先判断code值是否满足200，如果不是200，则提醒用户失败
        map.put("msg", "查询成功");
        map.put("pageCount", pageCount);  // 查询的记录总页码
        map.put("count", tableCount);     // 当前表中的总条数
        map.put("data", this.host2taskMapper.selectForPage(index, name));
        return map;
    }

    /**
     * 新增数据
     *
     * @param host2task 实例对象
     * @return 实例对象
     */
    public Map<String, Object> insert(Host2task host2task) {
        // UUID.randomUUID()  返回内容：asd21321-ewrewrew213213-123213zsad-123asdasd这样的形态
        this.host2taskMapper.insert(host2task);
        Map<String, Object> map = new HashMap<>();
        map.put("code", 200);   // 前端端分离时，前端人员会首先判断code值是否满足200，如果不是200，则提醒用户失败
        map.put("msg", "新增成功");
        return map;
    }

    /**
     * 通过ID查询单条数据
     *
     * @param host2task 实例对象
     * @return 实例对象
     */
    public Map<String, Object> updateById(Host2task host2task) {
        this.host2taskMapper.updateById(host2task);
        Map<String, Object> map = new HashMap<>();
        map.put("code", 200);   // 前端端分离时，前端人员会首先判断code值是否满足200，如果不是200，则提醒用户失败
        map.put("msg", "更新成功");
        return map;
    }

    /**
     * 通过主键删除数据
     *
     * @param taskId 主键
     * @return 是否成功
     */
    public Map<String, Object> deleteById(String taskId) {
        this.host2taskMapper.deleteById(taskId);
        Map<String, Object> map = new HashMap<>();
        map.put("code", 200);   // 前端端分离时，前端人员会首先判断code值是否满足200，如果不是200，则提醒用户失败
        map.put("msg", "删除成功");
        return map;
    }

    /**
     * 通过hostID查询单条数据
     *
     * @param hostId 主键
     * @return 实例对象
     */
    public Map<String, Object> selectByHostId(Integer hostId) {
        Map<String, Object> map = new HashMap<>();
        // 前端端分离时，前端人员会首先判断code值是否满足200，如果不是200，则提醒用户失败
        map.put("code", 200);
        map.put("msg", "查询成功");
        map.put("obj", this.host2taskMapper.selectByHostId(hostId));
        return map;
    }

    /**
     * 通过hostID查询多条数据
     *
     * @param hostId 主键
     * @return 实例对象
     */
    public Map<String, Object> selectTaskByHostId(Integer hostId) {
        Map<String, Object> map = new HashMap<>();
        // 前端端分离时，前端人员会首先判断code值是否满足200，如果不是200，则提醒用户失败
        map.put("code", 200);
        map.put("msg", "查询成功");
        map.put("obj", this.host2taskMapper.selectTaskByHostId(hostId));
        return map;
    }

    /**
     * 通过ID查询单条数据
     *
     * @param host2task 实例对象
     * @return 实例对象
     */
    public Map<String, Object> finishById(Host2task host2task) {
        this.host2taskMapper.finishById(host2task);

        String analysisResult = host2task.getAnalysisResult();
        //String path = "com/whilebug/baselinecheck/jsonDatabase/host_"+Integer.toString(host2task.getHostId())+"_task_"+Integer.toString(host2task.getTaskId())+".json";
        //URL projectAddr = ClassLoader.getSystemResource("");
        //path = projectAddr.toString().substring(6)+path;
        //System.out.println(path);
        //String analysisResultStr = analysisResult.toString();
        String path = "jsonDatabase/host_"+Integer.toString(host2task.getHostId())+"_task_"+Integer.toString(host2task.getTaskId())+".json";
        File file = new File(path);
        System.out.println(analysisResult);
        try {
            FileOutputStream fileOutputStream = new FileOutputStream(file);
            fileOutputStream.write(analysisResult.getBytes());
            fileOutputStream.close();
        }catch (Exception e){
            e.printStackTrace();
        }

        host2task.setAnalysisResult(null);// 将host2task的analysisResult属性重置，防止查询数据库的时候analysisResult太大占网络空间
        Map<String, Object> map = new HashMap<>();
        map.put("code", 200);   // 前端端分离时，前端人员会首先判断code值是否满足200，如果不是200，则提醒用户失败
        map.put("msg", "更新成功");
        return map;
    }

    /*
     * unicode编码转中文
     */
    public static String decodeUnicode(final String dataStr) {
        int start = 0;
        int end = 0;
        final StringBuffer buffer = new StringBuffer();
        while (start > -1) {
            end = dataStr.indexOf("\\u", start + 2);
            String charStr = "";
            if (end == -1) {
                charStr = dataStr.substring(start + 2, dataStr.length());
            } else {
                charStr = dataStr.substring(start + 2, end);
            }
            char letter = (char) Integer.parseInt(charStr, 16); // 16进制parse整形字符串。
            buffer.append(new Character(letter).toString());
            start = end;
        }
        return buffer.toString();
    }

    /**
     * 通过hostId和taskId查询某次检查的分析结果
     *
     * @param hostId 主机的编号 taskId 任务的编号
     * @return 实例对象
     */
    public Map<String, Object> getAnalysisResult(String hostId, String taskId) {

        String path = "jsonDatabase/host_"+hostId+"_task_"+taskId+".json";
        File file = new File(path);
        Map<String, Object> map = new HashMap<>();
        try {
            BufferedReader in = new BufferedReader(new FileReader(path));
            String str;
            String analysisResult=null;
            while ((str = in.readLine()) != null) {
                //System.out.println(str);
                if (analysisResult==null){
                    analysisResult=str;
                }else {
                    analysisResult += str;
                }
            }
            map.put("code", 200);   // 前端端分离时，前端人员会首先判断code值是否满足200，如果不是200，则提醒用户失败
            map.put("msg", "更新成功");
            map.put("analysisResult", analysisResult);
            String analysisResultStr = analysisResult.toString();
            Map analysisResultMap = JSON.parseObject(analysisResultStr);
            System.out.println(analysisResultMap);
        }catch (Exception e){
            map.put("code", 201);   // 前端端分离时，前端人员会首先判断code值是否满足200，如果不是200，则提醒用户失败
            map.put("msg", "更新失败");
            e.printStackTrace();
        }


        return map;
    }
}