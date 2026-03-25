import { useState, useEffect } from 'react';

/**
 * Custom hook for typing effect animation
 */
export const useTypingEffect = (titles, typingSpeed = 100, deletingSpeed = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout;

    if (isDeleting) {
      // Deleting characters
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next title
        setIsDeleting(false);
        setTitleIndex((titleIndex + 1) % titles.length);
        timeout = setTimeout(() => {}, 500);
      }
    } else {
      // Typing characters
      if (charIndex < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Finished typing, pause then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex, titles, typingSpeed, deletingSpeed]);

  return displayText;
};
