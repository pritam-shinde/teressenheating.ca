export const blog_slugs = {
    "why-you-should-be-doing-regular-air-conditioning-service": true,
    "the-importance-and-benefits-of-boiler-repair-service-and-maintenance": true,
    "5-common-causes-to-do-regular-heating-and-air-conditioning-services": true,
    "what-to-know-before-hiring-a-company-for-air-conditioning-maintenance-services-in-canada": true,
    "the-complete-guide-to-hvac-services-for-commercial-buildings-and-what-you-need-to-know": true,
    "why-you-need-a-heating-and-air-conditioning-repair-in-your-home": true,
};

export const isAllowedBlogSlug = (slug) => {
    return Boolean(slug && blog_slugs[slug]);
};

export const filterAllowedBlogs = (blogs) => {
    if (!Array.isArray(blogs)) return [];
    return blogs.filter((item) => item && item.slug && blog_slugs[item.slug]);
};

export default blog_slugs;
