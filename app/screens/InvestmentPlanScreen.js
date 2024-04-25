import React, { useState } from 'react';

import { View, StyleSheet } from 'react-native';
import AmountInput from '../components/AmountInput';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

const items = [
    { title: 'Education', subTitle: 'What is your target for this goal?', description:'You are setting up the total amount which you would like to achieve for Education.', keyId: 1,},
    { title: 'Education', subTitle: 'What is your first investment?', description:'You can start from as low as PKR 500.', keyId: 2,},
    { title: 'Education', subTitle: 'How much do you want to invest daily?', description:'This is the amount you will invest automantically on daily basis.', keyId: 3,},
]



function InvestmentPlanScreen(props) {


    const [activeComponent, setActiveComponent] = useState(items[0]);
    const [number, setNumber] =useState('');
    const [amount, setAmount]=useState([])



    const handlePress=(keyId)=>{
        setActiveComponent(items[keyId])

        const tempArray = [...amount, number];
        setAmount(tempArray);
        
        setNumber(null)
        
        if(keyId==3){
            setActiveComponent(items[0])
        }
    }

    return (
        <Screen>    
            <AmountInput
                title={activeComponent.keyId}
                subTitle={activeComponent.subTitle}
                description={activeComponent.description}
                initialValue={number}
                onChangeText={(value)=>{
                    setNumber(value)
                }}
            />
            {
                number === null?
                    <></>
                :
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <AppButton
                        title={'Continue'}
                        onPress={() => {handlePress(activeComponent.keyId)}}
                    />
                </View>
            }

        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{},
});

export default InvestmentPlanScreen;