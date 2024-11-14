import { useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { useFilters } from '../../hooks/useFilters';
import BlogSearch from '../BlogSearch/BlogSearch';
import BlogFilters from '../BlogFilters/BlogFilters';
import BlogPost from '../BlogPost/BlogPost';
import Pagination from '../Pagination/Pagination';
import './BlogList.css';

const POSTS_PER_PAGE = 5;

function BlogList({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const {
    filters,
    handleFilterChange,
    filteredItems,
    categories,
    authors,
    allTags
  } = useFilters(posts);

  const {
    searchTerm,
    handleSearch,
    results,
  } = useSearch(filteredItems);

  const totalPages = Math.ceil(results.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = results.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="blog-list">
      <BlogSearch
        searchTerm={searchTerm}
        onSearch={handleSearch}
        resultCount={results.length}
      />
      <BlogFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        categories={categories}
        authors={authors}
        allTags={allTags}
      />
      <div className="posts">
        {currentPosts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default BlogList;
