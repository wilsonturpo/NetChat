import React, {ChangeEvent, useContext, useState} from 'react'
import { Button, Form, Icon, Input, Modal } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'

import { IChannel } from '../../models/channels'
import {v4 as uuid} from 'uuid'
import ChannelStore from '../../stores/ChannelStore'

const ChannelForm: React.FC = () => {

    const initialChannel ={
        id: '',
        name: '',
        description:''
    }

    const [channel, setChannel] = useState<IChannel>(initialChannel)
    const {isModalVisible, showModal, createChannel} = useContext(ChannelStore)


    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setChannel({...channel, [event.target.name]: event.target.value})
    }

    const handleSubmit =()=>{        
        let newChannel ={
            ...channel,
            id: uuid()
        }
        createChannel(newChannel)
        showModal(false)
    }

    return (
        <Modal basic open={isModalVisible}>
                    <Modal.Header>Add Channel</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <Input 
                                    fluid label="Channel Name" 
                                    name="name"
                                    onChange={handleInputChange} />
                            </Form.Field>

                            <Form.Field>
                                <Input 
                                    fluid label="Channel Description" 
                                    name="description"
                                    onChange={handleInputChange} />
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                        <Modal.Actions>
                            <Button 
                                basic color='green' 
                                inverted
                                onClick={()=>handleSubmit()}>
                            <Icon name='checkmark' /> Add
                            </Button>

                            <Button color='red' inverted onClick={()=>showModal(false)}>
                            <Icon name='remove' /> Cancel
                            </Button>
                        </Modal.Actions>                        
                    
                </Modal>
    )
}

export default observer(ChannelForm)