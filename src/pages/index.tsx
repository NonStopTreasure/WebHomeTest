import React, {FC, ReactElement, Suspense} from "react";
import {
    Route,
    RouteProps,
    Switch,
    BrowserRouter,
} from "react-router-dom"
import routes from "../routes/index.json"
import {PageRoutes} from "../common/enums";
import {IRouteModel} from "../common/interfaces";
import {Spin} from "antd";
import {CommentsPage} from "./CommentsPage";
import {App} from "./App";
import {NewCommentPage} from "./NewCommentPage";


interface RenderPageTypes {
    url: string
    props: RouteProps
}

const RenderPages = ({props, url}: RenderPageTypes): ReactElement => {
    switch (url) {

        case PageRoutes.App:
            return <App {...props} />
        case PageRoutes.NewCommentPage:
            return <NewCommentPage {...props} />
        case PageRoutes.CommentsListPage:
            return <CommentsPage {...props} />
        default:
            return <App {...props} />
    }
}

const PageBuilder: FC = (): ReactElement => {
    return (
        <BrowserRouter>
            <Switch>
                {(routes as IRouteModel[]).map(
                    ({id, url, exact}: IRouteModel): ReactElement => (
                        <Route path={url} exact={exact} key={id}>
                            {(props: RouteProps): ReactElement | string => (
                                <Suspense
                                    fallback={
                                        <Spin size="large"/>
                                    }
                                >
                                    <RenderPages url={url} props={props}/>
                                </Suspense>
                            )}
                        </Route>
                    )
                )}
            </Switch>
        </BrowserRouter>
    )
}

export {PageBuilder}