import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tiktok,
  alyak,
  facebook,
  openai,
  Nwitter,
  Instar,
  ArcGIS,
  GMap,
  Chomovie,
  NextMovie,
  ChoiceBook,
  TikTikClone,
  DALLEClone,
  SamilFood,
  Unknown,
  Sanghyun,
  MyBro,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "내정보",
  },
  {
    id: "work",
    title: "기술 스택",
  },
  {
    id: "contact",
    title: "연락처",
  },
];

const services = [
  {
    title: "React 웹 개발자",
    icon: web,
  },
  {
    title: "React Native 앱 개발자",
    icon: mobile,
  },
  {
    title: "Node.js 및 Spring 서버 개발자",
    icon: backend,
  },
  {
    title: "3D 모델 및 AI 공부 중",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React 웹 애플리케이션 개발",
    company_name: "Tiktok 클론코딩",
    icon: tiktok,
    iconBg: "#383E56",
    date: "2023.02 - 2023.03",
    points: [
      "React.js 및 기타 관련 기술을 사용하여 웹 애플리케이션 개발 및 유지보수.",
      "사용자 경험을 위한 API 활용 및 모바일 활용성 증가를 위한 스타일 사용",
      "파일 업로드 기능을 구현하고, Video 태그의 autoplay, loop를 활용한 Tiktok 클로닝",
      "프로필 조회 및 게시물을 검색하고, 각 게시물에 좋아요 및 댓글 기능 활성화 쿼리",
    ],
  },
  {
    title: "React Native 앱 개발",
    company_name: "ApujiMK",
    icon: alyak,
    iconBg: "#383E56",
    date: "2020.09 - 2020.12",
    points: [
      "공공기관 API를 활용한 데이터 조회 및 사용자 검색어에 따른 의약품 결과 및 상세정보 반환",
      "지도 API를 활용하여 주변 약국을 조회하고, 응급 상황시 연락가능한 연락처 제공",
      "알약 정보를 확인하고, 사용자 리뷰를 통한 약품에 대한 무지함을 해소하고자 개발",
      "실시간 반응을 활용한 데이터 추가 및 검색결과 조회로 사용자 경험 증대",
    ],
  },
  {
    title: "AI 웹 애플리케이션 개발",
    company_name: "DALL-E",
    icon: openai,
    iconBg: "#E6DEDD",
    date: "2023.03 - 2023.04",
    points: [
      "Open AI 모델을 학습시켜, 사용자 쿼리에 따른 사진결과 반환 및 사용자 프롬프트 저장 학습",
      "학습 및 반환된 사진을 출력하여 1024 X 1024의 화질 JPEG 데이터를 저장하는 기능 구현",
      "커뮤니티를 생성하여, 특정 쿼리를 입력하여 반환된 이미지를 조회할 수 있는 기능을 제공",
      "URL을 주변 지인에게 공유하여, 학습 데이터 강화 및 정확한 정보를 추출할 수 있도록 학습",
    ],
  },
  {
    title: "Node.js 백엔드 개발",
    company_name: "facebook",
    icon: facebook,
    iconBg: "#E6DEDD",
    date: "2019. 12 - 2020.02",
    points: [
      "로그인 및 회원가입과 해당 유저의 로그인 기록을 유지하는 토큰을 생성하여 반환하는 백엔드 API 개발",
      "유저의 데이터 파일 (이미지, 동영상)을 변환하여 Base64 형태로 인코딩 된 URL을 저장하고 출력하는 API 개발",
      "커뮤니티를 생성하여 좋아요, 댓글 등 UNION Query 사용하여 다양한 테이블의 데이터를 조합하고 반환하는 API 개발",
      "유저 스토리 및 게시글 등 실시간 상호작용이 가능한 데이터를 보관하고, 유저 채팅을 Socket.io를 사용한 실시간 양방향 개발",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "혼자 뭘 만들고 있는지는 모르겠는데, 어느새 보면 이상한걸 항상 만들어온다. 실질적으로 도움이 될지는 모르겠지만 요즘은 그래도 퀄리티가 괜찮아진듯",
    name: "김학X 멘토님",
    designation: "익명",
    company: "IT 아카데미",
    image: Unknown,
  },
  {
    testimonial:
      "열심히 노력하는 모습이 보기 좋습니다 ㅎㅎ 비록 같은 회사에서 일해보진 않았지만 항상 열심히 하는모습 응원해요~",
    name: "김상현님",
    designation: "JavaScript Mastery",
    company: "수강생",
    image: Sanghyun,
  },
  {
    testimonial:
      "아주 푸딩같은 녀석, 물론 이유는 없다. 이유도 있어야해? 안좋은 일이 생기면 탄력있게 튕겨낸다 해야하나",
    name: "김우혁",
    designation: "형",
    company: "가족",
    image: MyBro,
  },
  {
    testimonial:
      "극소수한테만 공개해서 아직 네명이나 못 보여줬습니다.. 학교에서 자랑하고 반응 있으면 추가할 예정",
    name: "절대 왕따 아님",
    designation: "오해",
    company: "하지마요",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "삼일상고 급식알리미",
    description:
      "점심시간만 되면 너무 배고파.. 난 손가락 하나 까딱하지 않고 급식 메뉴를 받고싶었다. 식욕은 당연한 본능이니까, Expo를 사용한 앱 애플리케이션",
    tags: [
      {
        name: "Expo",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "AWS Lambda",
        color: "pink-text-gradient",
      },
    ],
    image: SamilFood,
    source_code_link: "https://github.com/kwb020312/Expo_SamilHighSchool_Meal",
  },
  {
    name: "Nwitter",
    description:
      "트위터를 클론 코딩하여 Next.js 로 제작한 후 FireBase의 실시간 연동을 통해 실시간 댓글 및 게시물 게시 기능을 구현하였다.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "FireBase",
        color: "green-text-gradient",
      },
      {
        name: "RealTime",
        color: "pink-text-gradient",
      },
    ],
    image: Nwitter,
    source_code_link: "https://github.com/kwb020312/Nwitter",
  },
  {
    name: "춉스타그램",
    description:
      "Expo를 활용한 인스타그램 클론 코딩으로, 실시간 데이터를 불러오고 인스타의 실시간 인기 피드 API를 호출하여 내용을 표시함",
    tags: [
      {
        name: "Expo",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "Instagram",
        color: "pink-text-gradient",
      },
    ],
    image: Instar,
    source_code_link: "https://github.com/kwb020312/InstarClone",
  },
  {
    name: "문화재 지도",
    description:
      "GLTF 형식의 문화재 데이터를 어떤 방식으로 활용할지 고민하다, ThreeJS를 통하여 ArcGIS Map에 불러와 어느 지역에 어떤 문화재가 있는지 확인 가능한 지도애플리케이션을 만들었음",
    tags: [
      {
        name: "ArcGIS",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: ArcGIS,
    source_code_link: "https://github.com/kwb020312/ArcGIS_KeyongCheonSazi",
  },
  {
    name: "쵸비 맵",
    description:
      "각 나라에 어떤 장소가 있는지 확인하고, 클러스터링 기능, 로드맵 기능을 구현한 Google API MAP 애플리케이션이다.",
    tags: [
      {
        name: "Google Map",
        color: "blue-text-gradient",
      },
      {
        name: "VanilaJS",
        color: "green-text-gradient",
      },
      {
        name: "Road Map",
        color: "pink-text-gradient",
      },
    ],
    image: GMap,
    source_code_link: "https://github.com/kwb020312/Google_Map_Wipco",
  },
  {
    name: "아폴로 어워드",
    description:
      "영화 정보제공 API를 사용하여 Apollo, GraphQL로 데이터를 전처리해 불필요한 데이터를 덜어내고 정보를 제공하는 영화 웹 애플리케이션",
    tags: [
      {
        name: "Apollo",
        color: "blue-text-gradient",
      },
      {
        name: "GraphQL",
        color: "green-text-gradient",
      },
      {
        name: "Movie",
        color: "pink-text-gradient",
      },
    ],
    image: Chomovie,
    source_code_link: "https://github.com/kwb020312/Nomad_MovieQL",
  },
  {
    name: "Next Movie",
    description:
      "NextJS를 사용하여, URL이동의 이점을 살펴보고, Pre-Lendering을 통해 사용자 경험을 증가시키는 영화 웹 애플리케이션",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Vercel",
        color: "green-text-gradient",
      },
      {
        name: "Movie",
        color: "pink-text-gradient",
      },
    ],
    image: NextMovie,
    source_code_link: "https://github.com/kwb020312/NextJS_MovieApp",
  },
  {
    name: "쵸이스북",
    description:
      "HTML, CSS, JavaScript, MySQL로 기본 역량을 강화하기 위해 페이스북을 클론코딩함, 나 때는 이런 인터페이스였다. 딱 딱...",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: ChoiceBook,
    source_code_link: "https://github.com/kwb020312/faceclone",
  },
  {
    name: "틱틱",
    description:
      "틱톡 요즘 대세라면서.. 근데 보안 문제 있다길래 화나서 그냥 만들어버렸음. Vite, MongoDB, GoogleAuth API를 활용했다",
    tags: [
      {
        name: "TikTok",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: TikTikClone,
    source_code_link: "https://github.com/kwb020312/TikTik_Clone",
  },
  {
    name: "DALL-E 이미지 생성",
    description:
      "DALL-E 엄청 핫하다해서 나도 AI 이미지 생성기 만들어보고싶었음! MERN(MongoDB, Express, React, Node.js)기술을 모두 활용했음",
    tags: [
      {
        name: "DALL-E",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: DALLEClone,
    source_code_link: "https://github.com/kwb020312/AI_Image_Generator",
  },
];

export { services, technologies, experiences, testimonials, projects };
