import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CodeBlock = ({ language, value }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="my-8 rounded-xl overflow-hidden border border-border-subtle shadow-2xl bg-[#1a1b26] font-mono">
            {/* MacOS Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#16161e] border-b border-[#292e42]">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" /> {/* Close */}
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" /> {/* Minimize */}
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" /> {/* Maximize */}
                </div>

                {language && (
                    <div className="text-xs text-[#565f89] font-medium uppercase tracking-wider">
                        {language}
                    </div>
                )}

                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-xs text-[#7aa2f7] hover:text-[#bb9af7] transition-colors"
                >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'Copied' : 'Copy'}
                </button>
            </div>

            {/* Code Content */}
            <div className="p-4 overflow-x-auto">
                <pre className="text-sm leading-relaxed text-[#c0caf5]">
                    <code>{value}</code>
                </pre>
            </div>
        </div>
    );
};

export default CodeBlock;
