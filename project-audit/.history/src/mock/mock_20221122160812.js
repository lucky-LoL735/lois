import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Projects } from './project';
import { LoginUsers, Logs  } from './log';
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
          }]);
        }, 500);
      });
    });

  }
};