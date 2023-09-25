
import { UseCaseError } from "../../../../../shared/core/UseCaseError";
import { Result } from "../../../../../shared/core/Result";

export namespace UpvotePostErrors {

  export class MemberNotFoundError extends Result<UseCaseError> {
    constructor () {
      super(false, {
        message: `Couldn't find a member to upvote the post.`
      } as UseCaseError)
    }
  }

  export class PostNotFoundError extends Result<UseCaseError> {
    constructor (slug: string) {
      super(false, {
        message: `Couldn't find a post by slug {${slug}}.`
      } as UseCaseError)
    }
  }

  export class AlreadyUpvotedError extends Result<UseCaseError> {
    constructor (postId: string, memberId: string) {
      super(false, {
        message: `This post was already upvoted postId {${postId}}, memberId {${memberId}}.`
      } as UseCaseError)
    }
  }

}