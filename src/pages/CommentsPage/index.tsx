import React, {FC} from 'react';

export interface ICommentsPageProps {}

const CommentsPage:FC<ICommentsPageProps> = () => {
    return (
        <div className="comments-page">
            <div className="new-comment"/>
            <div className="comments-list"/>
        </div>
    );
};


export {CommentsPage}