export const blog_slugs = {
    "why-you-should-be-doing-regular-air-conditioning-service": true,
    "the-importance-and-benefits-of-boiler-repair-service-and-maintenance": true,
    "5-common-causes-to-do-regular-heating-and-air-conditioning-services": true,
    "what-to-know-before-hiring-a-company-for-air-conditioning-maintenance-services-in-canada": true,
    "the-complete-guide-to-hvac-services-for-commercial-buildings-and-what-you-need-to-know": true,
    "why-you-need-a-heating-and-air-conditioning-repair-in-your-home": true,
    "how-to-keep-mice-out-of-heat-pump": true,
    "what-is-hvac": true,
    "heat-pump-vs-air-conditioning-unit": true
};

export const blog_slugs_string = Object.keys(blog_slugs).join(",");

export const isAllowedBlogSlug = (slug) => {
    return Boolean(slug && blog_slugs[slug]);
};

export const filterAllowedBlogs = (blogs) => {
    if (!Array.isArray(blogs)) return [];
    return blogs.filter((item) => item && item.slug && blog_slugs[item.slug]);
};

export const sanitizePostSummary = (post) => {
    if (!post) return null;
    return {
        id: post.id || null,
        date: post.date || '',
        slug: post.slug || '',
        title: {
            rendered: post.title?.rendered || ''
        },
        excerpt: {
            rendered: post.excerpt?.rendered || ''
        },
        _embedded: {
            'wp:featuredmedia': post._embedded?.['wp:featuredmedia']?.[0]
                ? [{
                    source_url: post._embedded['wp:featuredmedia'][0].source_url || '',
                    alt_text: post._embedded['wp:featuredmedia'][0].alt_text || ''
                }]
                : []
        }
    };
};

export const sanitizeSidebarBlogs = (blogs) => {
    if (!Array.isArray(blogs)) return [];
    return filterAllowedBlogs(blogs).slice(0, 5).map(item => ({
        id: item.id || null,
        date: item.date || '',
        slug: item.slug || '',
        title: {
            rendered: item.title?.rendered || ''
        }
    }));
};

export const sanitizeSingleBlog = (post) => {
    if (!post) return null;
    return {
        id: post.id || null,
        slug: post.slug || '',
        date: post.date || '',
        title: {
            rendered: post.title?.rendered || ''
        },
        content: {
            rendered: post.content?.rendered || ''
        },
        yoast_head_json: {
            title: post.yoast_head_json?.title || '',
            description: post.yoast_head_json?.description || ''
        },
        _embedded: {
            'wp:featuredmedia': post._embedded?.['wp:featuredmedia']?.[0]
                ? [{
                    source_url: post._embedded['wp:featuredmedia'][0].source_url || '',
                    alt_text: post._embedded['wp:featuredmedia'][0].alt_text || ''
                }]
                : []
        }
    };
};

export default blog_slugs;
