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
      ],
      removedSectionColors: []
    }
  }

  render() {
    const { sections, removedSectionColors } = this.state;
    let previousScrollY = window.pageYOffset;
    window.addEventListener('scroll', () => {
      const isScrollingUp = window.pageYOffset < previousScrollY;
      if (isScrollingUp && !window.pageYOffset && removedSectionColors.length) {
        const firstElementIndex = sections[0].props.index
        sections.pop()
        sections.unshift(<Section color={removedSectionColors[removedSectionColors.length - 1]} index={firstElementIndex - 1} key={firstElementIndex - 1} />)
        removedSectionColors.pop()
        this.setState({ sections, removedSectionColors })
        window.scrollTo(0, window.innerHeight)

      }
      if (window.pageYOffset > window.innerHeight) {
        const lastElementIndex = sections[sections.length - 1].props.index
        const removedColor = sections[0].props.color
        removedSectionColors.push(removedColor)
        sections.shift()
        sections.push(<Section color={generateHexColor()} index={lastElementIndex + 1} key={lastElementIndex + 1} />)
        this.setState({ sections, removedSectionColors })
      }
      previousScrollY = window.pageYOffset;
    })
    return sections;
  }
}

export default App;
