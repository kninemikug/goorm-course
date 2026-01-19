import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`${import.meta.env.BASE_URL}posts/${id}.md`);
                if (!response.ok) throw new Error('Post not found');
                const text = await response.text();

                // 제목은 첫 번째 # 이후의 텍스트를 사용
                const titleMatch = text.match(/^#\s+(.*)/m);
                const title = titleMatch ? titleMatch[1] : 'Untitled Post';

                // 첫 번째 제목 줄 제거하여 본문에서 중복되지 않게 함
                const content = text.replace(/^#\s+.*$/m, '').trim();

                setPost({
                    title: title,
                    date: '2026-01-19', // 실제로는 파일 메타데이터나 frontmatter에서 가져와야 함
                    content: content,
                    category: 'AI & Research'
                });
            } catch (error) {
                console.error('Error fetching post:', error);
                // 기존 하드코딩된 데이터 유지 (하위 호환성)
                if (id === 'first-post') {
                    setPost({
                        title: 'GitHub Pages로 블로그 시작하기',
                        date: '2026-01-18',
                        content: 'GitHub Pages는 정적 웹사이트를 호스팅하기에 최적의 장소입니다.',
                        category: 'Development'
                    });
                }
            }
        };

        fetchPost();
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
                <h1 style={{ fontSize: '3.5rem', margin: '1rem 0', lineHeight: 1.2 }}>{post.title}</h1>
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
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                    >
                        {post.content}
                    </ReactMarkdown>
                </article>
            </div>
        </motion.div>
    );
};

export default PostDetail;
