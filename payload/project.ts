import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '2022 NC Fellowship Challange',
      startedAt: '2022-04',
      endedAt: '2023-02',
      where: 'Game AI Track',
      descriptions: [
        { content: '엔씨소프트가 주관하는 게임 AI 대회에 참가하였습니다.' },
        { content: '독학으로 배운 강화학습 지식을 실전에서 이용함으로써 더 발전할 수 있었습니다.' },
        {
          content:
            '최종적으로 기본 제공 에이전트의 약 두 배 정도의 점수를 내는 에이전트를 개발하였고, 5등을 하였습니다.',
        },
      ],
    },
    {
      title: '2022 무한도전',
      startedAt: '2022-05',
      endedAt: '2022-10',
      where: 'PaleDot',
      descriptions: [
        { content: 'PaleDot이라는 팀명으로 게임 제작을 하였습니다.' },
        { content: 'Unity와 C#을 이용하여 게임 제작을 했습니다.' },
      ],
    },
    {
      title: '가사를 이용한 장르 분류 프로그램',
      startedAt: '2022-08',
      endedAt: '2022-12',
      where: 'SW코딩과 AI활용',
      descriptions: [
        { content: '직접 학습용 데이터를 모아 텐서플로우를 이용하여 학습시켰습니다.' },
        {
          content: 'K-fold 교차 검증을 이용하여 모델을 확인하였고, 80% 이상의 정확도를 얻었습니다.',
        },
      ],
    },
    {
      title: '동아리 관리 프로그램',
      startedAt: '2023-05',
      where: '객체 지향 프로그래밍',
      descriptions: [
        { content: 'C++을 이용하여 동아리 서적 및 공공재 관리 프로그램을 제작중입니다.' },
      ],
    },
  ],
};

export default project;
