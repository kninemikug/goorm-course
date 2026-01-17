import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // 실제 환경에서는 fetch(`/posts/${id}.md`) 를 통해 가져오게 됩니다.
        // 여기서는 데모를 위해 고정된 내용을 사용합니다.
        const mockPost = {
            title: 'GitHub Pages로 블로그 시작하기',
            date: '2026-01-18',
            content: `
# GitHub Pages로 블로그 시작하기

GitHub Pages는 정적 웹사이트를 호스팅하기에 최적의 장소입니다. 
여기에 **React**와 **Vite**를 더하면 더욱 강력한 블로그를 만들 수 있습니다.

## 왜 Vite인가요?
- 번들링 속도가 압도적으로 빠릅니다.
- HMR(Hot Module Replacement)이 매우 안정적입니다.
- 설정이 간결합니다.

## 앞으로의 계획
학습한 기술들을 이 블로그에 꾸준히 기록해 나갈 예정입니다.
      `,
            category: 'Development'
        };
        setPost(mockPost);
    }, [id]);

    if (!post) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container"
            style={{ marginTop: '4rem', paddingBottom: '8rem' }}
        >
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                <ArrowLeft size={18} />
                Back to list
            </Link>

            <header style={{ marginBottom: '4rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{post.category}</span>
                <h1 style={{ fontSize: '3.5rem', margin: '1rem 0' }}>{post.title}</h1>
                <div style={{ display: 'flex', gap: '2rem', color: 'var(--text-muted)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar size={16} />
                        {post.date}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Clock size={16} />
                        5 min read
                    </div>
                </div>
            </header>

            <div className="glass" style={{ padding: '3rem' }}>
                <article className="markdown-body">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </article>
            </div>
        </motion.div>
    );
};

export default PostDetail;
