/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { PostCardS } from './style'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import parse from 'html-react-parser';
import { listItem } from 'src/animations/Index'

function PostCard({ post }) {
    const router = useRouter();

    const handleClick = (id) => {
        router.push(`/blog/${id}`);
    }
    return (
        <PostCardS
            as={motion.article}
            variants={listItem}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.8 }}
        >
            <div className='post-info'>
                <div>
                    <h3>{post?.title}</h3>
                </div>
                <div>
                    {parse(post?.detail)}
                </div >
            </div >
            <div className='post-image'>
                <img src={post?.imageUrl ? `${process.env.AWS_S3_CDN_URL}/${post?.imageUrl}` : "/assets/images/Image-not-found.png"} alt="Post Image" />
            </div>
            <div className='read-more' onClick={() => handleClick(post?.id)}>
                <span>Leer más</span>
            </div>
        </PostCardS >
    )
}

export default PostCard