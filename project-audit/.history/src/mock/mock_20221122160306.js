import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { config } from 'vue/types/umd';
import { Projects } from './project';
import 
let _Project = Projects
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
      let { page, pageSize } = config.params;
      let mockLogs = _log
    })

  }
};