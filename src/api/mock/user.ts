export function createFakeUserList() {
  return [
    {
      userId: '1',
      username: 'admin',
      realname: '管理员',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
      desc: 'manager',
      password: '123456',
      token: 'fakeToken1',
      homePath: '/dashboard/welcome',
      roles: [
        {
          roleName: 'Super Admin',
          value: 'super',
        },
      ],
    },
    {
      userId: '2',
      username: 'jeecg',
      password: '123456',
      realname: '测试用户',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640',
      desc: 'tester',
      token: 'fakeToken2',
      homePath: '/dashboard/workbench',
      roles: [
        {
          roleName: 'Tester',
          value: 'test',
        },
      ],
    },
  ];
}

export const fakeCodeList: any = {
  '1': ['1000', '3000', '5000'],
  '2': ['2000', '4000', '6000'],
};

export const getUserInfo = createFakeUserList()[0];
