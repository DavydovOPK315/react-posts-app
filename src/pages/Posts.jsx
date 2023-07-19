// import React, { useEffect, useState} from 'react';
// import '../styles/App.css';
// import PostList from '../components/PostList';
// import MyButton from '../components/UI/button/MyButton';
// import PostForm from '../components/PostForm';
// import PostFIlter from '../components/PostFIlter';
// import MyModal from '../components/UI/MyModal/MyModal';
// import { usePosts } from '../hooks/usePosts';
// import PostService from '../API/PostService';
// import Loader from '../components/UI/Loader/Loader';
// import { useFetching } from '../hooks/useFetching';
// import { getPageCount } from '../utils/pages';
// import Pagination from '../components/UI/pagination/Pagination';

import React, { useEffect, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import MyModal from "../components/UI/MyModal/MyModal";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import Pagination from "../components/UI/pagination/Pagination";
import Loader from "../components/UI/Loader/Loader";
import MyButton from "../components/UI/button/MyButton";
import { getPageCount } from '../utils/pages';
import '../styles/App.css';


function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const setTotalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(setTotalCount, limit));
  })

  useEffect(() => {
    fetchPosts(limit, page);
  }, [])

  const changePage = (page) => {
    setPage(page);
    console.log(page);
    fetchPosts(limit, page);
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Create a new post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError &&
        <h1> Occured error ${postError}</h1>}
      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="JS list" />
      }
      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </div>
  );
}

export default Posts;
