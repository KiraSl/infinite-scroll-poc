import React from 'react';
import { Section } from './Section'
import { generateHexColor } from './utils/GenerateHexColor'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sections: [
        <Section color={generateHexColor()} index={1} key={1} />,
        <Section color={generateHexColor()} index={2} key={2} />,
        <Section color={generateHexColor()} index={3} key={3} />,
      ]
    }
  }

  render() {
    const { sections } = this.state;
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight) {
        const elementIndex = sections[sections.length - 1].props.index
        sections.shift()
        sections.push(<Section color={generateHexColor()} index={elementIndex + 1} key={elementIndex + 1} />)
        this.setState({ sections: sections })
      }
    })
    return sections;
  }
}

export default App;
