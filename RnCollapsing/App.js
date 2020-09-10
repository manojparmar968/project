import React, { Component } from 'react';
import {ScrollView,StyleSheet,Text,View, TouchableOpacity} from 'react-native';
import {RVCollapsibleSingle, RVCollapsingMulti} from './src';
import * as Animatable from 'react-native-animatable';

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: 'First',
    content: 'Description item first.',
  },
  {
    title: 'Second',
    content: BACON_IPSUM,
  },
];

export default class App extends Component {

  renderHeaderSingle = () => {
    const {headerCustom, headerText} = styles
    return(
      <View style={headerCustom}>
        <Text style={headerText}>Title Custom</Text>
      </View>
    )
  }

  componentDidMount() {
    this.refMultiCollapsible.isMultipleSelect(true)
  }

  renderHeaderMulti = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContentMulti(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }

  changeStatusMulti = () => {
    this.refMultiCollapsible.setSections([0, 1])
  }

  changeStatusSingle = () => {
    this.refSingleCollapsible.toggleExpanded()
  }

  render() {
    const {container, content, collapsingCustom} = styles;

    return (
      <View style={container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          <RVCollapsibleSingle 
            ref={(target) => this.refSingleCollapsible = target}
            // title='Single Collapsible'
            collapsingCustom={collapsingCustom}
            renderHeader={this.renderHeaderSingle()}
          >
            <View style={content}>
              <Text>
                Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribs
              </Text>
            </View>
          </RVCollapsibleSingle>
          <TouchableOpacity
            style={{backgroundColor: 'red', marginTop: 2, height: 50,
            alignItems: 'center', justifyContent: 'center'}}
            onPress={this.changeStatusSingle}
          >
            <Text>Change status Single</Text>
          </TouchableOpacity>
          <RVCollapsingMulti 
            ref={(target) => this.refMultiCollapsible = target}
            listSections={CONTENT}
            renderHeader={this.renderHeaderMulti}
            renderContent={this.renderContentMulti}
            duration={400}
          />
          <TouchableOpacity
            style={{backgroundColor: 'red', marginTop: 50, height: 50,
            alignItems: 'center', justifyContent: 'center'}}
            onPress={this.changeStatusMulti}
          >
            <Text>Change status multi</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 55,
  },
  content: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  collapsingCustom: {
    borderBottomColor: 'red'
  },
  headerCustom: {
    backgroundColor: 'green',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: 'white'
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
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
});