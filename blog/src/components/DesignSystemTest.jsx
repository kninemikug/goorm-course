import React from 'react';

const DesignSystemTest = () => {
    return (
        <div className="p-8 space-y-8 bg-background min-h-screen">
            <section>
                <h2 className="text-2xl font-serif italic text-text-primary mb-4 border-b border-border-subtle pb-2">
                    Typography
                </h2>
                <div className="space-y-4">
                    <div>
                        <p className="text-text-secondary text-sm font-mono mb-1">Sans-serif (Pretendard/Inter)</p>
                        <p className="text-4xl font-sans font-bold text-text-primary">
                            The quick brown fox jumps over the lazy dog.
                        </p>
                        <p className="text-xl font-sans text-text-primary mt-2">
                            가나다라마바사 아자차카타파하
                        </p>
                    </div>
                    <div>
                        <p className="text-text-secondary text-sm font-mono mb-1">Serif (Newsreader/Ridi Batang)</p>
                        <p className="text-4xl font-serif italic text-text-primary">
                            The quick brown fox jumps over the lazy dog.
                        </p>
                        <p className="text-xl font-serif text-text-primary mt-2">
                            가나다라마바사 아자차카타파하
                        </p>
                    </div>
                    <div>
                        <p className="text-text-secondary text-sm font-mono mb-1">Monospace (JetBrains Mono/D2Coding)</p>
                        <p className="text-xl font-mono text-text-primary bg-surface p-2 rounded border border-border-subtle inline-block">
                            const safe = true; // 1234567890
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-serif italic text-text-primary mb-4 border-b border-border-subtle pb-2">
                    Colors & Surfaces
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-surface rounded-lg border border-border-subtle">
                        <div className="w-full h-12 bg-background rounded mb-2 border border-border-subtle"></div>
                        <p className="font-mono text-xs text-text-secondary">Surface / Background</p>
                    </div>
                    <div className="p-4 bg-surface rounded-lg border border-border-subtle shadow-lg">
                        <div className="w-full h-12 bg-primary-glow/20 rounded mb-2 flex items-center justify-center text-primary-glow font-bold">
                            Glow Let
                        </div>
                        <p className="font-mono text-xs text-text-secondary">Primary Glow</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-serif italic text-text-primary mb-4 border-b border-border-subtle pb-2">
                    Glassmorphism
                </h2>
                <div className="relative h-48 bg-gradient-to-tr from-primary-glow/20 to-secondary-glow/20 rounded-xl flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                    <div className="relative z-10 p-6 bg-surface/50 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl max-w-sm text-center">
                        <h3 className="text-lg font-bold text-text-primary mb-2">Glass Card</h3>
                        <p className="text-text-secondary text-sm">
                            This card uses `backdrop-blur-xl` and `bg-surface/50` to achieve a premium frosted glass effect.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DesignSystemTest;
