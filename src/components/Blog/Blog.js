import React, {useState, useEffect} from 'react';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sabbirahammadProf/data/main/medcarefakeblogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);
    return (
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-20 pb-12 xl:pt-20 md:pt-40 pt-20 w-11/12 mx-auto ">
            {
                blogs.map((blog) => <div key={blog.blog_id} className="rounded shadow-2xl px-4 py-4">
                    <img src={blog.blog_feature_image_url} alt="" className="rounded"/>
                    <p className="pt-4 text-secondarydark">Author: {blog.blog_author}</p>
                    <h3 className="text-2xl py-4">{blog.blog_title}</h3>
                    <p>{blog.blog_content.slice(0, 150)}</p>
                    <button className="bg-primary-900 text-white rounded py-1 px-2 my-4">Read More &rarr;</button>
                </div>)
            }
        </div>
    );
};

export default Blog;