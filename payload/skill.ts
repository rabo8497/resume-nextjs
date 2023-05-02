import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'AI',
  items: [
    {
      title: 'Python',
    },
    {
      title: 'Pytorch',
    },
    {
      title: 'Tensorflow',
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'nest.js',
    },
    {
      title: 'node.js',
    },
    {
      title: 'C/C++',
    },
    {
      title: 'Django',
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Anaconda',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Unity/C#',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, etc],
  tooltip: '제가 사용해 본 적이 있거나, 이용할 수 있는 것에 대해 적었습니다.',
};

export default skill;
