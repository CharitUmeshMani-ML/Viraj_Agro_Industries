
import React from 'react';
import { mockBlogPosts } from '../data/mockData';
import Card from '../components/common/Card';
import { useLanguage } from '../contexts/LanguageContext';

const BlogPage = () => {
  const { t, language } = useLanguage();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">{t('blog_title')}</h1>
        <p className="text-lg text-gray-600 mt-2">{t('blog_subtitle')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockBlogPosts.map(post => (
          <Card key={post.id} className="flex flex-col group">
            <div className="overflow-hidden">
                <img className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" src={post.imageUrl} alt={post.title[language]} />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-sm text-gray-500 mb-2">{post.date} &bull; {post.author}</p>
              <h2 className="text-xl font-semibold text-dark-text mb-3">{post.title[language]}</h2>
              <p className="text-gray-600 mb-4 flex-grow">{post.excerpt[language]}</p>
              <a href="#" className="font-semibold text-primary hover:text-primary-dark self-start">{t('read_more')}</a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
