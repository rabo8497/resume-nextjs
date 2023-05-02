import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '저는 인공지능 기술에 대한 높은 관심을 가지고 있습니다. 특히, 강화학습 분야에 매력을 느끼게 되어 열정적으로 탐구를 이어가고 있습니다. 강화학습에서 에이전트가 스스로 학습 데이터를 얻어가며 발전하고, 그것을 다양한 현실 문제에 적용할 수 있다는 점이 저를 이 분야로 끌어들였습니다. 저는 제 지식을 쌓기 위해 독학으로 인공지능 및 강화학습을 공부했습니다. 또한, 동아리 활동을 통해 동료들과 함께 실력을 키웠고, 친구들과 스터디를 진행하여 서로 지식을 나누며 성장했습니다. 이러한 경험을 바탕으로 강화학습 대회에 참가해 실력을 향상시키고 싶었습니다. 대회를 통해 현실적인 문제에 강화학습 기술을 적용하고, 함께 고민하며 성장하는 소중한 경험을 얻었습니다. 이번 랩실 인턴십을 통해 제 강화학습 연구에 대한 열정과 경험을 발휘하여, 랩실의 프로젝트에 기여할 수 있는 기회를 얻기를 바랍니다. 더 나아가, 이 과정을 통해 전문적 지식을 더욱 키우고 실력을 향상시키는 것이 저의 목표입니다.',
  ],
  sign: '',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
