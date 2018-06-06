import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
    onRowPress = () => {
        //call employeeEdit form with additional props employee
        Actions.employeeEdit({
            employee: this.props.employee
        });
    }
    render() {
        const { name } = this.props.employee;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
});

export default ListItem;