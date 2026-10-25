


import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MetaManager from '../components/MetaManager';
import Button from '../components/Button';
import { CalendarDaysIcon, TagIcon } from '@heroicons/react/24/solid';

const BlogPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const siteName = t('footer.companyName');
    const pageTitle = t('seo.blog.title', { siteName });
    const pageDescription = t('seo.blog.description');
    const pageKeywords = t('seo.blog.keywords');
    const canonicalUrl = `${window.location.origin}${window.location.pathname}#/blog`;

    const blogPosts = [
        {
            id: '1',
            titleKey: 'blogPage.post1.title',
            summaryKey: 'blogPage.post1.summary',
            keywordsKey: 'blogPage.post1.keywords',
            date: '2024-07-28',
            imageUrl: '/assets/editorial/textile.webp'
        },
        {
            id: '2',
            titleKey: 'blogPage.post2.title',
            summaryKey: 'blogPage.post2.summary',
            keywordsKey: 'blogPage.post2.keywords',
            date: '2024-07-25',
            imageUrl: '/assets/editorial/textile.webp'
        },
        {
            id: '3',
            titleKey: 'blogPage.post3.title',
            summaryKey: 'blogPage.post3.summary',
            keywordsKey: 'blogPage.post3.keywords',
            date: '2024-07-22',
            imageUrl: '/assets/editorial/textile.webp'
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": pageTitle,
        "description": pageDescription,
        "url": canonicalUrl,
        "publisher": {
            "@type": "Organization",
            "name": siteName
        },
        "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": t(post.titleKey),
            "description": t(post.summaryKey),
            "datePublished": post.date,
            "author": {
                "@type": "Organization",
                "name": siteName
            },
            "image": post.imageUrl
        }))
    };

    return (
        <>
            <MetaManager
                title={pageTitle}
                description={pageDescription}
                keywords={pageKeywords}
                canonicalUrl={canonicalUrl}
                ogTitle={pageTitle}
                ogDescription={pageDescription}
                ogImage="/assets/editorial/textile.webp"
                jsonLd={jsonLd}
            />
            <div className="bg-brand-light">
                <header className="py-20 sm:py-28 text-center bg-brand-secondary/50">
                    <div className="container mx-auto px-4">
                        <h1 className="text-5xl sm:text-6xl font-bold text-neutral-900">{t('blogPage.mainTitle')}</h1>
                        <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">{t('blogPage.mainDescription')}</p>
                    </div>
                </header>

                <main className="py-16 sm:py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {blogPosts.map(post => (
                                <article key={post.id} className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                                    <div className="p-0.5 bg-brand-gold">
                                        <div className="relative rounded-t-xl overflow-hidden">
                                            <img src={post.imageUrl} alt={t(post.titleKey)} loading="lazy" className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="mb-4 flex items-center text-xs text-neutral-500 space-x-4">
                                            <div className="flex items-center">
                                                <CalendarDaysIcon className="h-4 w-4 me-1.5" />
                                                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString(i18n.language, { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                                            </div>
                                            <div className="flex items-center">
                                                <TagIcon className="h-4 w-4 me-1.5" />
                                                <span>{t('blogPage.category')}</span>
                                            </div>
                                        </div>
                                        <h2 className="text-xl font-bold text-neutral-900 group-hover:text-brand-primary transition-colors mb-3 line-clamp-2">
                                            {t(post.titleKey)}
                                        </h2>
                                        <p className="text-neutral-600 text-sm mb-5 flex-grow line-clamp-3">
                                            {t(post.summaryKey)}
                                        </p>
                                        <div className="mt-auto">
                                           <p className="text-sm font-semibold text-brand-primary">{t('blogPage.comingSoon')}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default BlogPage;
