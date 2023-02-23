import { useRecoilState, useRecoilValue } from 'recoil';
import { textState } from '../recoil/atoms';
import { charCountState } from '../recoil/selectors';

function CharacterCouter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Charactar Count: {count}</>;
}

export default CharacterCouter;
