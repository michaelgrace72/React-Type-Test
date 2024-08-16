import {faker} from '@faker-js/faker';
import RestartButton from './components/RestartButton';
import Results from './components/Results';
import UserInput from './components/UserInput';

const words = faker.random.words(10) //create random words

const App = () => {
  return (
  <>
    <CountdownTime timeLeft={30}/>
    <WordsContainer> 
      {/* generate words to be typed */}
      <GenerateWords words={words}/>
      {/* take input from user */}
      <UserInput className='absolute inset-0' Input={words}/>
    </WordsContainer>

    <RestartButton 
      onRestart={() => {}} 
      classname="mx-auto mt-10 text-slate-500"/>
    <Results
      errors={0}
      accuracy={100}
      total={10}
      className="mt-10"
    />
  </>
  );
}

const WordsContainer = ({children}:{children: React.ReactNode}) => {
  return (
  <div className='relative max-w-xl mt-3 text-3xl leading-relaxed break-all'>
    {children}
  </div>)
}

const GenerateWords = ({words}: {words: string}) => {
  return <div className="text-slate-500">{words}</div>;
}

const CountdownTime = ({timeLeft}: {timeLeft: number}) => {
  return <h2 className='text-primary-500 font-medium'>Time: {timeLeft}</h2>
}


export default App;
