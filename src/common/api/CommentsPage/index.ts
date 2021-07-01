import {AxiosResponse} from "axios";
import {basicAxios} from "../../utils/basicAxios";
import {ICommentsList} from "../../interfaces";


const requestGetComments = (): Promise<AxiosResponse<ICommentsList>> =>
    basicAxios.get("https://jordan.ashton.fashion/api/goods/30/comments")

const requestPostComments = (): Promise<AxiosResponse> =>
    basicAxios.post("https://jordan.ashton.fashion/api/goods/30/comments")

export {requestGetComments, requestPostComments}