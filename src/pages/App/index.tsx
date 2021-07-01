import React, {FC} from 'react';
import {Button} from "antd";
import {Link} from "react-router-dom"
import "./style.scss"

const App: FC = () => {
    return (
        <div className="app">

            <Button type="primary" className="link-btn">
                <Link classname="link" to="/new-comment">
                    New Comment
                </Link>
            </Button>

            <Button type="primary" className="link-btn">
                <Link className="link" to="/comments-list">
                    Comment List
                </Link>
            </Button>

        </div>
    );
};

export {App};