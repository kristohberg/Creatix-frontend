import React from 'react';
import FeedbackItem from './FeedbackItem';
import { Feedback } from 'Components/Feedback/types';

interface Props {
  feedbacks: Feedback[];
}

const FeedbackList: React.FC<Props> = ({ feedbacks }) => {
  return (
    <div className="cell margin-top-l">
      <div className="grid-x align-center">
        <ul className="feedback-list ">
          {feedbacks.length > 0 &&
            feedbacks.map((feedback) => <FeedbackItem key={feedback.id} feedback={feedback} />)}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackList;
