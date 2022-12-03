import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Projects } from './project';
import {  Logs } from './log';
import { homeInfo } from './home'
let _Project = Projects
let _Logs = Logs;

export default {
  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new MockAdapter(axios);

    //获取项目列表（分页）
    mock.onGet('/todo/listpage').reply(config => {
      let {page, code, pageSize} = config.params;
      let mockProjects = _Project.filter(project => {
        if (code && project.projectName.indexOf(code) == -1) return false;
        return true;
      });
      let total = mockProjects.length;
      mockProjects = mockProjects.filter((u, index) => index < pageSize * page && index >= pageSize * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            total: total,
            projects: mockProjects
          }]),
          reject("失败了！");
        }, 500);
      });
    });

 //查询项目列表数据（分页）
    mock.onGet('/todo/post').reply(config => {
      let {page, code, pageSize} = config.params;
      let mockProjects = _Project.filter(project => {
        if (code && project.customerCode == code) return true;
        return false;
      });
      let total = mockProjects.length;
      mockProjects = mockProjects.filter((u, index) => index < pageSize * page && index >= pageSize * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            total: total,
            projects: mockProjects
          }]),
          reject("失败了！");
        }, 500);
      });
    });



    //获取用户列表（分页）
    mock.onGet('/log/listpage').reply(config => {
      let {page, pageSize} = config.params;
      let mockLogs = _Logs.filter(user => {
        return true;
      });
      let total = mockLogs.length;
      mockLogs = mockLogs.filter((u, index) => index < pageSize * page && index >= pageSize * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            total: total,
            logs: mockLogs
          }]),
          reject("失败了！");
        }, 500);
      });
    });
//获取日志详情
    mock.onGet('/log/detail').reply(config => {
      let {projectCode} = config.params;
      let mockLog = _Logs.find(user => {
        return user.projectCode === projectCode
      });

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            log: mockLog,
            code: 200
          }]),
          reject("失败了！");
        }, 500);
      });
    });
    //获取主页信息
    mock.onGet('/home/info').reply(() => {

          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve([200, {
                data: homeInfo,
                code: 200
              }]),
                reject("失败了！");
            }, 500);
          });
        });
    
  }
};