'use client';

import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: '모바일 앱 리디자인',
    description: '기존 앱의 사용자 흐름을 분석해 UI/UX를 개선한 프로젝트.',
    image: '/images/project1.jpg',
    link: '/projects/1',
  },
  {
    id: 2,
    title: '웹 대시보드 UX 개선',
    description: '데이터 구조를 간결하게 시각화하고 직관적인 UX를 구현.',
    image: '/images/project2.jpg',
    link: '/projects/2',
  },
];

export default function Home() {
  return (
    <main className="w-full">
      <section className='h-[60vh] bg-black'>
        <h1 className="text-[64px] text-white font-bold">Hello</h1>
      </section>
      <section className='max-w-[1200px] mx-auto my-8'>
        <h2 className="text-2xl font-semibold mb-4">주요 프로젝트</h2>
        <div className="grid gap-6">
          {projects.map((project) => (
            <div key={project.id} className="border rounded-lg p-4 shadow hover:shadow-md transition">
              <img src={project.image} alt={project.title} className="rounded mb-2" />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
              <Link href={project.link} className="text-blue-500 mt-2 inline-block">
                자세히 보기 →
              </Link>
            </div>
          ))}
        </div>
      </section>      
    </main>
  );
}
