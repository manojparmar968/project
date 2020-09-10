import React, { Component } from 'react';
import {TouchableOpacity} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

export class RVCollapsingMulti extends Component {
  state = {
    activeSections: [],
    multipleSelect: false,
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  isMultipleSelect = (flag) => {
    this.setState({multipleSelect: flag})
  }

  render() {
    const { multipleSelect, activeSections } = this.state;
    const { listSections, renderHeader, renderContent, duration} = this.props

    return (
      <Accordion
        activeSections={activeSections}
        sections={listSections}
        touchableComponent={TouchableOpacity}
        expandMultiple={multipleSelect}
        renderHeader={renderHeader}
        renderContent={renderContent}
        duration={duration}
        onChange={this.setSections}
      />
    );
  }
}