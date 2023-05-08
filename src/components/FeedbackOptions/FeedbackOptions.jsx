import PropTypes from 'prop-types';
import { Option } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(name => (
        <Option key={name} type="button" name={name} onClick={onLeaveFeedback}>
          {name}
        </Option>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
