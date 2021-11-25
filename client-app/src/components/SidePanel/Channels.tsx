import React, { useState, useEffect } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

import {IChannel} from '../../models/channels'
import { ChannelForm } from './ChannelForm'
import { ChannelItem } from './ChannelItem'

import agent from '../../api/agent'

const Channels =()=> {

    const [myChannels, setChannels] = useState<IChannel[]>([]);
    const [selectedModal, setModal] = useState(false);


    useEffect(()=>{
        agent.Channels.list().then((response)=>{
            setChannels(response)
        })
    }, [])

        const openModal = ()=> setModal(true)
        const closeModal = ()=> setModal(false)

        const displayChannels = (channels: IChannel[]) => {
            return (
              channels.length > 0 &&
              channels.map((channel) => (
                <ChannelItem key={channel.id} channel={channel} />
              ))
            )
        }

        const handleCreateChannel = (channel: IChannel) =>{
            agent.Channels.create(channel).then(()=>
            setChannels([...myChannels, channel]))
            
        }

        return (           

            <React.Fragment>
                <Menu.Menu style={{paddingBottom: '2em'}}>
                    <Menu.Item>
                        <span>
                            <Icon name="exchange"/> CHANNELS
                        </span>{' '}
                        ({myChannels.length}) <Icon name="add" onClick={openModal}/>
                    </Menu.Item>
                    {displayChannels(myChannels)}
                </Menu.Menu>
                <ChannelForm 
                    selectedModal={selectedModal}  
                    closeModal={closeModal}
                    createChannel={handleCreateChannel}/>
                
            </React.Fragment>
        )
    }

export default Channels;