import React, {FC, useEffect, useState} from 'react';
import {ICommentsList, ICommentsListDataArray} from "../../common/interfaces";
import {requestGetComments} from "../../common/api/CommentsPage";
import {AxiosResponse} from "axios";
import {List, Comment, Avatar, Spin} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {format} from "date-fns";

import "./style.scss"


export interface ICommentsPageProps {
}


const CommentsPage: FC<ICommentsPageProps> = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
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


    useEffect(() => {
        requestGetComments().then(
            (response: AxiosResponse<ICommentsList>) => setComments(response.data)
        ).finally(() => setIsLoading(false))
    }, [])

    if (isLoading) {
        return <Spin size="large"/>
    }

    return (
        <div className="comments-page">
            <div className="comments-block">
                <List
                    className="comments-list"
                    itemLayout="horizontal"
                    dataSource={comments.data}
                    renderItem={(item: ICommentsListDataArray): React.ReactElement => (
                        <li className="list-item">
                            <Comment
                                className="item-content"
                                author={<p>{item.name}</p>}
                                avatar={<Avatar size={64} icon={<UserOutlined/>}/>}
                                content={<p>{item.text}</p>}
                                datetime={format(new Date(item.created_at), "dd:MM - ss:mm")}
                            />
                        </li>
                    )}
                />
            </div>
        </div>
    );
};


export {CommentsPage}