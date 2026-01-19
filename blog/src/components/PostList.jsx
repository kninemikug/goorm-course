import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${import.meta.env.BASE_URL}posts.json`);
                if (!response.ok) throw new Error('Failed to fetch posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <div className="container" style={{ marginTop: '4rem' }}>Loading insights...</div>;

    return (
        <div className="container fade-in" style={{ marginTop: '4rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem', lineHeight: 1.2 }}>
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
                                    <h2 style={{ fontSize: '1.5rem', margin: '0.5rem 0', lineHeight: 1.2 }}>{post.title}</h2>
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
