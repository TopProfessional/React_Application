import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from './PostItem.jsx';

const PostList = function(props) {
    if(!props.posts.length) {
        return(
            <h1 style={{textAlign: 'center'}}>
                Posts undefined!
            </h1>
        )
    }
    return(
        <div>
            <h1 style={{textAlign:'center'}}>
                {props.title}
            </h1>
            <TransitionGroup>
                {props.posts.map((post, index) =>
                    <CSSTransition
                        key = {post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={props.remove} number={index + 1} post = {post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default PostList