'use client';
import { useEffect, useState } from 'react';

interface TypeWriterProps {
  prefix: string;
  words: string[];
  delay?: number;
  className?: string;
}

export default function TypeWriter({ prefix, words, delay = 100, className = '' }: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFirstRun, setIsFirstRun] = useState(true);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const fullText = prefix + currentWord;

    const timer = setTimeout(() => {
      if (isFirstRun) {
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        } else {
          setIsFirstRun(false);
          setTimeout(() => setIsDeleting(true), 3000);
        }
      } else if (isDeleting) {
        if (displayText.length > prefix.length) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 3000);
        }
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, words, prefix, delay, isFirstRun]);

  return (
    <span className={`${className} relative`}>
      <span className="font-judson text-5xl">{displayText.slice(0, prefix.length)}</span>
      <span className="font-sacramento text-9xl">{displayText.slice(prefix.length)}</span>
      <span 
        className="absolute -right-1 top-0 h-full w-[2px] bg-[#3C1908] animate-cursor"
        style={{ 
          opacity: displayText.length === (prefix + words[wordIndex]).length ? 0 : 1 
        }}
      />
    </span>
  );
}