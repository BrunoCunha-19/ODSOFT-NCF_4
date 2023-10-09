

import * as actionCreators from '../actionCreators'
import { postService } from '../../services';
import { Post } from '../../models/Post';

function getPopularPosts (offset?: number, limit?: number) {
  return async (dispatch: any) => {

    dispatch(actionCreators.getPopularPosts());

    const result = await postService.getPopularPosts(offset, limit);

    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(actionCreators.getPopularPostsFailure(error))
    } else {
      const posts: Post[] = result.value.getValue();
      dispatch(actionCreators.getPopularPostsSuccess(posts));
    }
  };
}

export { getPopularPosts };
