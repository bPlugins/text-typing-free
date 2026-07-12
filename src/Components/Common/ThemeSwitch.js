import Default from './templates/Default';
import StarFlower from './templates/Starflowers';
import Terminal from './templates/Terminal';
import ThemeFour from './templates/ThemeFour';
import ThemeMonster from './templates/ThemeFive';
import ThemeThree from './templates/ThemeThree';

const ThemeSwitch = (props) => {
  const { themes = {} } = props.attributes;
  const { theme } = themes;

  switch (theme) {
    case 'default':
      return <Default {...props} />
    case 'terminal':
      return <Terminal {...props} />
    case 'starFlower':
      return <StarFlower {...props} />
    case 'neonGrid':
      return <ThemeThree {...props} />
    case 'auroraGlow':
      return <ThemeFour {...props} />
    case 'cyberWave':
      return <ThemeMonster {...props} />
    default:
      return null
  }
};
export default ThemeSwitch;