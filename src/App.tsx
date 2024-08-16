import {faker} from '@faker-js/faker';
import RestartButton from './components/RestartButton';
import Results from './components/Results';

const words = faker.random.words(10) //create random words

const App = () => {
  return (
  <>
    <CountdownTime timeLeft={30}/>
    <GenerateWords words={words}/>;
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

const GenerateWords = ({words}: {words: string}) => {
  return <div className="text-4xl text-center text-slate-500">{words}</div>;
}

const CountdownTime = ({timeLeft}: {timeLeft: number}) => {
  return <h2 className='text-primary-500 font-medium'>Time: {timeLeft}</h2>
}


export default App;
