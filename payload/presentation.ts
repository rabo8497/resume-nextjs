import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '전산동아리 WING에서 DQN을 주제로 발표',
      subTitle: '',
      at: '2022-12',
      descriptions: [
        {
          content: '전산동아리의 AI 분과 부원들을 대상으로 DQN과 관련된 발표를 했습니다.',
        },
        {
          content: 'Q러닝, DQN, DQN을 이용한 벽돌깨기 에이전트 순으로 발표를 진행했습니다.',
        },
        {
          content: 'Slideshare:',
          postHref:
            'https://docs.google.com/presentation/d/19IS3kwtxyYfq3EWe9JClOWcA82d0-rayt2UID5JN_6A/edit?usp=sharing',
        },
      ],
    },
  ],
};

export default presentation;
