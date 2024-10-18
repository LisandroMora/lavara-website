import React from 'react'
import PostCard from './Item'
import { PostContainerS } from './style'

function PostsContainer({ postsData }) {

    return (
        <PostContainerS>
            {postsData?.map((post, index) => (
                <PostCard key={index} post={post} />
            ))}
        </PostContainerS>
    )
}

export default PostsContainer;