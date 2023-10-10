
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { Link } from "react-router-dom";
import { Post } from '../../../../models/Post'
import "../styles/PostMeta.sass"
import { commentService } from '../../../../services';
import { APIResponse } from '../../../../../../shared/infra/services/APIResponse';

interface PostMetaProps extends Post {
  includeLink?: boolean;
}

const PostMeta: React.FC<PostMetaProps> = (props) => {
  const [numComments, setNumComments] = useState(props.numComments);

  useEffect(() => {
    commentService.getCommentsBySlug(props.slug).then(
      (value) => {
        if(value.isLeft()) return;
        let numCommentsTemp: number = 0;
        value.value.getValue().forEach((comment) => {
          if (!comment.parentCommentId) numCommentsTemp++; 
        });

        setNumComments(numCommentsTemp);
      }
    );
  }, [props.numComments]);

  return (
    <div className="post-row-content">
      {props.includeLink === false ? '' : <Link to={`/discuss/${props.slug}`} className="title">"{props.title}" {props.link ? <span className="link">[link]</span> : ''}</Link>}
      <div className="post-row-meta">
        {moment(props.createdAt).fromNow()} | {`by `} <Link to={`/member/${props.postAuthor}`}>{props.postAuthor}</Link> | {`${numComments} ${numComments !== 1 ? 'comments' : 'comment'}`}
      </div>
    </div>
  );
}

export default PostMeta;