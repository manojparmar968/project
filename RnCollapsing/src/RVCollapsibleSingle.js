import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native';
import Collapsible from 'react-native-collapsible';

export class RVCollapsibleSingle extends Component {
  state = {
    collapsed: true
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const {header, headerText, collapsing} = styles;
    const {title, children, collapsingCustom, renderHeader} = this.props

    return (
      <View style={[collapsing, collapsingCustom]}>
          <TouchableOpacity onPress={this.toggleExpanded}>
            {
                renderHeader? renderHeader:
              <View style={header}>
                <Text style={headerText}>{title}</Text>
            </View>
            }
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed} align="center">
              {children}
          </Collapsible>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  collapsing: {
    borderBottomWidth: 1,
    borderBottomColor: '#a5b0b5'
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});