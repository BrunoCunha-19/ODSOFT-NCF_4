
import React, { useEffect, useState } from 'react';
import "../styles/PostRow.sass"
import { Post } from '../../../../models/Post';
import { Points } from '../../points';
import PostMeta from '../../post/components/PostMeta';
import moment from 'moment';
import { PostFilterType } from '../../filters/components/PostFilters';

interface PostRowProps extends Post {
  onUpvoteClicked: () => void;
  onDownvoteClicked: () => void;
  isLoggedIn: boolean;
  activeFilter: PostFilterType;
}

const PostRow: React.FC<PostRowProps> = (props) => {
  const [postedToday, setPostedToday] = useState<boolean>(false);

  useEffect(() => {
    if (props.activeFilter === 'POPULAR') return;

    const postDate = moment(props.createdAt).toDate();
    const today = new Date();

    const flag = 
      postDate.getFullYear() === today.getFullYear() &&
      postDate.getMonth() === today.getMonth() &&
      postDate.getDate() === today.getDate();

    setPostedToday(flag);
  }, []);

  return (
    <div className="post-row" style={{
      ...(postedToday && props.activeFilter === 'NEW' && { backgroundColor: '#f96c2a' })
    }}>
      <Points
        onUpvoteClicked={() => props.onUpvoteClicked()}
        onDownvoteClicked={() => props.onDownvoteClicked()}
        points={props.points}
        isLoggedIn={props.isLoggedIn}
      />
      <PostMeta {...props} />
    </div>
  );
};

export default PostRow;