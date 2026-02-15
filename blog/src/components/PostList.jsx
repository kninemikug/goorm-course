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
        <div className="container max-w-5xl mx-auto px-6 pt-16 pb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-secondary-glow">Insights</span>
                </h1>
                <p className="text-text-secondary text-lg max-w-2xl">
                    Thoughts on software engineering, design systems, and the future of tech.
                </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link to={`/post/${post.id}`} className="group block h-full">
                            <article className="h-full p-6 rounded-2xl bg-surface border border-border-subtle hover:border-primary-glow/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-glow/10 hover:-translate-y-1 relative overflow-hidden">
                                {/* Gradient Blob on Hover */}
                                <div className="absolute top-0 right-0 p-20 bg-primary-glow/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/5 text-primary-glow border border-white/5">
                                            {post.category}
                                        </span>
                                        <div className="flex items-center gap-1.5 text-text-secondary text-xs">
                                            <Calendar size={12} />
                                            <span>{post.date}</span>
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary-glow transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>

                                    <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                                        {post.summary || post.content.substring(0, 100) + "..."}
                                    </p>

                                    <div className="mt-auto flex items-center text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                                        Read article
                                        <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PostList;
