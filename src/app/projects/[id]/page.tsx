'use client';

import { useParams } from 'next/navigation';

const projectData = {
  1: {
    title: '모바일 앱 리디자인',
    description: '기존 앱의 사용자 흐름을 분석하고 UI/UX를 개선한 사례입니다.',
    image: '/images/project1.jpg',
  },
  2: {
    title: '웹 대시보드 UX 개선',
    description: '복잡한 데이터를 시각적으로 정리하고 직관적인 네비게이션을 설계했습니다.',
    image: '/images/project2.jpg',
  },
};

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params.id;

  // 👇 문자열을 숫자로 변환
  const project = projectData[Number(id) as keyof typeof projectData];

  if (!project) {
    return <p className="p-8">❌ 해당 프로젝트를 찾을 수 없습니다.</p>;
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <img src={project.image} alt={project.title} className="rounded mb-6" />
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700">{project.description}</p>
    </main>
  );
}
