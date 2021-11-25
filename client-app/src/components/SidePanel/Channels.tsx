import React, { useEffect, useContext } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'

import {IChannel} from '../../models/channels'
import ChannelForm from './ChannelForm'
import { ChannelItem } from './ChannelItem'

import ChannelStore from '../../stores/ChannelStore'

const Channels =()=> {
    const channelStore = useContext(ChannelStore)
    const {channels} = channelStore

    useEffect(()=>{
        channelStore.loadChannels()
    }, [channelStore])

        const displayChannels = (channels: IChannel[]) => {
            return (
              channels.length > 0 &&
              channels.map((channel) => (
                <ChannelItem key={channel.id} channel={channel} />
              ))
            )
        }

        console.log(channels)
        return (           

            <React.Fragment>
                <Menu.Menu style={{paddingBottom: '2em'}}>
                    <Menu.Item>
                        <span>
                            <Icon name="exchange"/> CHANNELS
                        </span>{' '}
                        ({channels.length}) <Icon name="add" onClick={()=>channelStore.showModal(true)}/>
                    </Menu.Item>
                    {displayChannels(channels)}
                </Menu.Menu>
                <ChannelForm/>                
            </React.Fragment>
        )
    }

export default observer (Channels)