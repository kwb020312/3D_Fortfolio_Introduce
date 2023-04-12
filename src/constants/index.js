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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
