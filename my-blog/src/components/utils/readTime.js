export function calculateReadTime(content) {
    const wordsPerMinute = 80;
    const wordCount = content.trim().split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }