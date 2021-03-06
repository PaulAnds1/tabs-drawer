import React from 'react';
import {StyleSheet,View,ScrollView} from 'react-native';
import Box from './Box'
import tasks from './data/tasks';

function StoreScreen({}) {
        
    return (
        <View style={{backgroundColor: '#ab47bc', height: '100%'}}>
        <ScrollView style={styles.scrollView}>
              <View style = {styles.root}>
                {
                  tasks.map((task,i) => (
                    <Box 
                      key={i}
                      url = {task.url}
                      title= {task.title}
                      description = {task.description}
                      stock = {task.stock}
                    />
                    ))
                  }
                  </View>

          </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
  root:{
    marginRight: 'auto',
    marginLeft: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',  
    borderRadius: 50,
    marginTop: 100,
    padding: 10,
    overflow: 'hidden',

    width: '95%',
    height: 'auto',
  },

  scrollView: {
    marginBottom: 50,
  },
  
})

export default StoreScreen;