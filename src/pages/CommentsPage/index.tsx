import React, {createElement, FC, useEffect, useState} from 'react';
import {ICommentsList, ICommentsListDataArray} from "../../common/interfaces";
import {requestGetComments} from "../../common/api/CommentsPage";
import {AxiosResponse} from "axios";
import {List, Comment, Avatar, Tooltip} from 'antd';
import {DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled} from '@ant-design/icons';

export interface ICommentsPageProps {
}

const CommentsPage: FC<ICommentsPageProps> = () => {

    const [comments, setComments] = useState<ICommentsList>({
        current_page: 0,
        data: [],
        first_page_url: "",
        from: 0,
        last_page: 0,
        last_page_url: "",
        links: [],
        next_page_url: "",
        path: "",
        per_page: 0,
        prev_page_url: "",
        to: 0,
        total: 0
    })
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState<string | null>(null);


    useEffect(() => {
        requestGetComments().then(
            (response: AxiosResponse<ICommentsList>) => setComments(response.data)
        )
    }, [])

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
      </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
          <span className="comment-action">{dislikes}</span>
      </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];

    return (
        <div className="comments-page">
            <div className="new-comment"/>
            <div className="comments-list">
                <List
                    className="comment-list"
                    header={`${comments.data.length} replies`}
                    itemLayout="horizontal"
                    dataSource={comments.data}
                    renderItem={(item: ICommentsListDataArray): React.ReactElement => (
                        <li>
                            <Comment
                                actions={actions}
                                author={item.name}
                                avatar={<Avatar/>}
                                content={item.text}
                                datetime={item.created_at}
                            />
                        </li>
                    )}
                />
            </div>
        </div>
    );
};


export {CommentsPage}