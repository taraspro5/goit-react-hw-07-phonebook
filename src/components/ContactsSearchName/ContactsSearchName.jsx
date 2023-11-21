import { useDispatch, useSelector } from 'react-redux';
import { Container } from './ContactsSearchName.styled';
import { changeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const ContactsSearchName = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Container>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      ></input>
    </Container>
  );
};
