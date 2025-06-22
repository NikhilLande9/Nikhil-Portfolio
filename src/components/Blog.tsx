import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Responsive Web Applications with React and Tailwind CSS',
      excerpt: 'Learn how to create beautiful, responsive web applications using modern tools and best practices. We\'ll cover component design, responsive layouts, and performance optimization.',
      date: '2024-03-15',
      readTime: '8 min read',
      tags: ['React', 'Tailwind CSS', 'Responsive Design'],
      featured: true
    },
    {
      id: 2,
      title: 'The Complete Guide to TypeScript in React Projects',
      excerpt: 'Discover how TypeScript can improve your React development workflow with better type safety, IDE support, and maintainable code architecture.',
      date: '2024-03-10',
      readTime: '12 min read',
      tags: ['TypeScript', 'React', 'Best Practices'],
      featured: true
    },
    {
      id: 3,
      title: 'Modern CSS Techniques for Better User Experiences',
      excerpt: 'Explore advanced CSS features including Grid, Flexbox, Custom Properties, and animations to create engaging user interfaces.',
      date: '2024-03-05',
      readTime: '6 min read',
      tags: ['CSS', 'Animation', 'UI/UX'],
      featured: false
    },
    {
      id: 4,
      title: 'Optimizing React Applications for Performance',
      excerpt: 'Learn essential techniques for optimizing React applications, including code splitting, lazy loading, and performance monitoring.',
      date: '2024-02-28',
      readTime: '10 min read',
      tags: ['React', 'Performance', 'Optimization'],
      featured: true
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest <span className="bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent">Blog Posts</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development, design trends, and technology
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Featured Posts
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).slice(0, 2).map((post, index) => (
              <article
                key={post.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Post Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-accent-purple via-accent-cyan to-accent-pink">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Post Meta */}
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Post Title */}
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-accent-purple dark:group-hover:text-accent-cyan transition-colors duration-200">
                    {post.title}
                  </h4>

                  {/* Post Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <button className="inline-flex items-center space-x-2 text-accent-purple dark:text-accent-cyan font-semibold hover:underline transition-all duration-200 group-hover:translate-x-1">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Recent Posts
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Post Meta */}
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                  {post.featured && (
                    <span className="bg-gradient-to-r from-accent-purple to-accent-cyan text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>

                {/* Post Title */}
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent-purple dark:group-hover:text-accent-cyan transition-colors duration-200">
                  {post.title}
                </h4>

                {/* Post Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Tag size={14} className="text-gray-400" />
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs text-gray-500 dark:text-gray-400"
                        >
                          {tag}{tagIndex < post.tags.slice(0, 2).length - 1 && ','}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="text-accent-purple dark:text-accent-cyan font-semibold text-sm hover:underline transition-all duration-200 group-hover:translate-x-1">
                    Read →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Want to stay updated with my latest posts?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-accent-purple dark:focus:ring-accent-cyan w-full sm:w-auto"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-accent-purple to-accent-cyan text-white font-semibold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;