import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';

const PostList = () => {
    const [posts, setPosts] = useState([
        {
            id: 'first-post',
            title: 'GitHub Pages로 블로그 시작하기',
            date: '2026-01-18',
            summary: 'Vite와 React를 사용하여 나만의 프리미엄 블로그를 구축하는 방법을 알아봅니다.',
            category: 'Development'
        },
        {
            id: 'react-study',
            title: 'React와 Framer Motion으로 애니메이션 구현하기',
            date: '2026-01-17',
            summary: '웹사이트에 생동감을 불어넣는 세련된 애니메이션 기법들을 소개합니다.',
            category: 'Frontend'
        }
    ]);

    return (
        <div className="container fade-in" style={{ marginTop: '4rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
                Latest <span className="gradient-text">Insights</span>
            </h1>

            <div style={{ display: 'grid', gap: '2rem' }}>
                {posts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link to={`/post/${post.id}`} className="glass" style={{
                            display: 'block',
                            padding: '2rem',
                            transition: 'transform 0.2s',
                            cursor: 'pointer'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <span style={{
                                        fontSize: '0.8rem',
                                        color: 'var(--primary)',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1rem'
                                    }}>
                                        {post.category}
                                    </span>
                                    <h2 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{post.title}</h2>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{post.summary}</p>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                        <Calendar size={14} />
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                                <ChevronRight className="text-muted" size={20} />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
