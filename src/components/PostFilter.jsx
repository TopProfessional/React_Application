import React from 'react';
import MySelect from "./UI/select/MySelect.jsx";
import MyInput from "./UI/input/MyInput.jsx";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput 
            value={filter.qury}
            onChange={e => setFilter({...filter, query: e.target.value})}
            placeholder='search...'

            />
            <MySelect
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue="sort"
            options={[
                {value:'title', name:'By name'},
                {value:'body', name:'By description'}
            ]}
            />
        </div>
    );
};

export default PostFilter;