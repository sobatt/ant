import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: '上传图书',
    icon: 'form',
    path: 'dashboard',
    children: [
      {
        name: '发布书籍',
        path: 'newPage',
      },
      {
        name: '已上传',
        path: 'analysis',
      },
      {
        name: '未上传',
        path: 'monitor',
      },
      {
        name: '草稿箱',
        path: 'asd',
      },
      {
        name: '添加书籍',
        path: 'workplace',
        // hideInBreadcrumb: true,
        // hideInMenu: true,
      },
    ],
  },
  // {
  //   name: '上传图书',
  //   icon: 'form',
  //   path: 'dashboard',
  //   children: [
  //     {
  //       name: '发布书籍',
  //       path: 'newPage',
  //     },
  //     {
  //       name: '已上传',
  //       path: 'analysis',
  //     },
  //     {
  //       name: '未上传',
  //       path: 'monitor',
  //     },
  //     {
  //       name: '添加书籍',
  //       path: 'workplace',
  //       // hideInBreadcrumb: true,
  //       // hideInMenu: true,
  //     },
  //   ],
  // },
  {
    name: '文章页',
    icon: 'profile',
    path: 'form',
    children: [
      {
        name:'新的',
        path:'new-basic-form',
      },
    //   {
    //     name: '分步表单',
    //     path: 'step-form',
    //   },
    //   {
    //     name: '高级表单',
    //     authority: 'admin',
    //     path: 'advanced-form',
    //   },
    ],
  },
  {
    name: '审核信息',
    icon: 'schedule',
    path: 'list',
    // children: [
    //   {
    //     name: '查询表格',
    //     path: 'table-list',
    //   },
    //   {
    //     name: '标准列表',
    //     path: 'basic-list',
    //   },
    //   {
    //     name: '卡片列表',
    //     path: 'card-list',
    //   },
    //   {
    //     name: '搜索列表',
    //     path: 'search',
    //     children: [
    //       {
    //         name: '搜索列表（文章）',
    //         path: 'articles',
    //       },
    //       {
    //         name: '搜索列表（项目）',
    //         path: 'projects',
    //       },
    //       {
    //         name: '搜索列表（应用）',
    //         path: 'applications',
    //       },
    //     ],
    //   },
    // ],
  },
  // {
  //   name: '详情页',
  //   icon: 'profile',
  //   path: 'profile',
  //   children: [
  //     {
  //       name: '基础详情页',
  //       path: 'basic',
  //     },
  //     {
  //       name: '高级详情页',
  //       path: 'advanced',
  //       authority: 'admin',
  //     },
  //   ],
  // },
  // {
  //   name: '结果页',
  //   icon: 'check-circle-o',
  //   path: 'result',
  //   children: [
  //     {
  //       name: '成功',
  //       path: 'success',
  //     },
  //     {
  //       name: '失败',
  //       path: 'fail',
  //     },
  //   ],
  // },
  // {
  //   name: '异常页',
  //   icon: 'warning',
  //   path: 'exception',
  //   children: [
  //     {
  //       name: '403',
  //       path: '403',
  //     },
  //     {
  //       name: '404',
  //       path: '404',
  //     },
  //     {
  //       name: '500',
  //       path: '500',
  //     },
  //     {
  //       name: '触发异常',
  //       path: 'trigger',
  //       hideInMenu: true,
  //     },
  //   ],
  // },
  // {
  //   name: '账户',
  //   icon: 'user',
  //   path: 'user',
  //   authority: 'guest',
  //   children: [
  //     {
  //       name: '登录',
  //       path: 'login',
  //     },
  //     {
  //       name: '注册',
  //       path: 'register',
  //     },
  //     {
  //       name: '注册结果',
  //       path: 'register-result',
  //     },
  //   ],
  // },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
