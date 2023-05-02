import { faEnvelope, faDesktop } from '@fortawesome/free-solid-svg-icons';
// import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/_sample.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '전형찬',
    small: '',
  },
  contact: [
    {
      title: 'rabo8497@gm.gist.ac.kr',
      link: '#',
      icon: faEnvelope,
    },

    {
      title: '전기전자컴퓨터공학부',
      link: '#',
      icon: faDesktop,
    },

    {
      title: 'https://github.com/rabo8497',
      link: 'https://github.com/rabo8497',
      icon: faGithub,
    },
  ],
  notice: {
    title: '',
  },
};

export default profile;
