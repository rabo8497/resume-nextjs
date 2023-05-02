import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '지스트 전산동아리 WING',
      position: 'AI 분과',
      startedAt: '2022-02',
      endedAt: '2023-02',
      descriptions: [
        'Pytorch를 이용한 딥러닝을 배웠습니다.',
        'DQN을 이용한 벽돌깨기 강화학습 에이전트를 만들어 발표했습니다.',
        '동아리를 통해 2022 NC Fellowship 강화학습 대회에 참여하였습니다.',
      ],
      skillKeywords: ['Python', 'Pytorch'],
    },
    {
      title: '지스트 정보국 (Infoteam)',
      position: '백엔드',
      startedAt: '2023-03',
      descriptions: [
        'nest.js를 이용한 백엔드 개발을 공부하고있습니다.',
        '여러 사람들과의 협업 방식을 배우고있습니다.',
      ],
      skillKeywords: ['Node.js', 'nest.js'],
    },
    {
      title: '지스트 창업동아리 MOP',
      position: '',
      startedAt: '2022-02',
      descriptions: ['개발에 대한 전반적인 지식을 쌓았습니다.', 'git 사용법을 익혔습니다.'],
      skillKeywords: ['python', 'javascript'],
    },
  ],
};

export default experience;
