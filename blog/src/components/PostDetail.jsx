import CodeBlock from './CodeBlock';

const PostDetail = () => {
    // ... existing state and hooks
    const { id } = useParams();
    const [post, setPost] = useState(null);

    // ... useEffect

    if (!post) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container max-w-4xl mx-auto px-6"
            style={{ marginTop: '4rem', paddingBottom: '8rem' }}
        >
            <Link to="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-8 group">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Back to list
            </Link>

            <header className="mb-16 text-center">
                <span className="text-primary-glow font-semibold tracking-wide uppercase text-sm mb-4 block">
                    {post.category}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-text-primary mb-6 leading-tight">
                    {post.title}
                </h1>
                <div className="flex items-center justify-center gap-8 text-text-secondary font-mono text-sm">
                    <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={14} />
                        5 min read
                    </div>
                </div>
            </header>

            <div className="relative">
                {/* Content Glow */}
                <div className="absolute -inset-4 bg-primary-glow/5 blur-3xl -z-10 rounded-full opacity-50" />

                <article className="markdown-body">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <CodeBlock
                                        language={match[1]}
                                        value={String(children).replace(/\n$/, '')}
                                        {...props}
                                    />
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                )
                            }
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </article>
            </div>
        </motion.div>
    );
};

export default PostDetail;
